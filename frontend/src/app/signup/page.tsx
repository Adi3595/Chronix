"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { syncUser } from "@/app/actions/user-actions";

function SignupForm() {
  const { user, loading, login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const upgradePlan = searchParams.get("upgrade");
  
  const getRedirectUrl = () => {
    if (upgradePlan) return `/dashboard/settings?checkout=${upgradePlan}`;
    return "/dashboard";
  };
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.push(getRedirectUrl());
    }
  }, [user, loading, router, upgradePlan]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      if (auth) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        
        // Update Firebase profile with name
        await updateProfile(newUser, { displayName: name });
        
        // Sync user to Prisma database
        const syncRes = await syncUser(newUser.uid, email, name);
        if (!syncRes.success) {
          console.error("Failed to sync user to database:", syncRes.error);
        }
        
        document.cookie = `chronix-uid=${newUser.uid}; path=/; max-age=31536000;`;
        router.push(getRedirectUrl());
      } else {
        // Fallback to mock if firebase is not configured
        login();
        document.cookie = `chronix-uid=demo-user-123; path=/; max-age=31536000;`;
        router.push(getRedirectUrl());
      }
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsSubmitting(true);
    setError("");
    
    try {
      if (auth) {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        
        // Sync user to Prisma database
        await syncUser(user.uid, user.email || "", user.displayName || "Google User");
        
        document.cookie = `chronix-uid=${user.uid}; path=/; max-age=31536000;`;
        router.push(getRedirectUrl());
      } else {
        login();
        document.cookie = `chronix-uid=demo-user-123; path=/; max-age=31536000;`;
        router.push(getRedirectUrl());
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign up with Google.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(var(--color-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--color-outline-variant) 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: 'center center' }}>
      </div>

      <div className="bg-surface p-10 border border-outline-variant w-full max-w-md relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-center mb-8">
          <Link href="/" className="font-sans text-[24px] font-bold tracking-widest uppercase flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img src="/icon.png" alt="Chronix OS Logo" className="w-16 h-16 object-contain mix-blend-screen [filter:invert(1)_hue-rotate(180deg)] cursor-pointer" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
              CHRONIX
            </span>
          </Link>
        </div>
        <div className="text-center mb-10">
          <h1 className="font-sans font-black text-[32px] text-foreground uppercase tracking-tighter mb-2">Create Account</h1>
          <p className="font-mono text-[12px] text-muted-foreground uppercase tracking-widest">Initialize your execution profile</p>
        </div>
        
        {loading ? (
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
        ) : (
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            {error && (
              <div className="bg-error/10 border border-error/20 text-error p-4 text-sm mb-2 font-mono">
                {error}
              </div>
            )}
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="A. Executive"
                className="w-full bg-background border border-outline-variant px-4 py-3 text-foreground font-mono text-[14px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="executive@chronix.os"
                className="w-full bg-background border border-outline-variant px-4 py-3 text-foreground font-mono text-[14px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground flex justify-between">
                Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background border border-outline-variant px-4 py-3 text-foreground font-mono text-[14px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                required
                minLength={6}
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-background py-4 font-bold font-mono text-[12px] uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="flex items-center gap-4 my-4">
              <div className="h-[1px] bg-outline-variant/50 flex-1"></div>
              <span className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">OR</span>
              <div className="h-[1px] bg-outline-variant/50 flex-1"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={isSubmitting}
              className="w-full bg-transparent border border-outline-variant text-foreground py-4 font-bold font-mono text-[12px] uppercase tracking-widest hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              Continue with Google
            </button>
            
            <div className="text-center mt-6">
              <p className="text-[12px] text-muted-foreground font-mono">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold hover:underline uppercase tracking-widest">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <SignupForm />
    </Suspense>
  );
}
