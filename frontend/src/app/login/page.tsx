"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { syncUser } from "@/app/actions/user-actions";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      if (auth) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        document.cookie = `chronix-uid=${userCredential.user.uid}; path=/; max-age=86400;`;
        router.push("/dashboard");
      } else {
        // Fallback to mock login if firebase is not configured
        login();
        document.cookie = `chronix-uid=demo-user-123; path=/; max-age=86400;`;
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign in. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    setError("");
    
    try {
      if (auth) {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        
        // Sync user to Prisma database
        await syncUser(user.uid, user.email || "", user.displayName || "Google User");
        
        document.cookie = `chronix-uid=${user.uid}; path=/; max-age=86400;`;
        router.push("/dashboard");
      } else {
        login();
        document.cookie = `chronix-uid=demo-user-123; path=/; max-age=86400;`;
      }
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_20px_40px_rgba(0,0,0,0.05)] border border-outline-variant/30 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <img src="/icon.svg" alt="Chronix OS Logo" className="w-16 h-16 hover:opacity-80 transition-opacity cursor-pointer" />
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="font-display-md font-serif text-[28px] text-on-surface mb-2">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant">Enter your credentials to access the terminal.</p>
        </div>
        
        {loading ? (
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {error && (
              <div className="bg-error-container text-on-error-container p-3 rounded-lg text-sm mb-2">
                {error}
              </div>
            )}
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-on-surface">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="executive@chronix.os"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-sm font-semibold text-on-surface flex justify-between">
                Password
                <a href="#" className="text-primary hover:underline text-xs font-normal">Forgot?</a>
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-mono-label font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-12 mt-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "ACCESS TERMINAL"
              )}
            </button>

            <div className="flex items-center gap-4 my-2">
              <div className="h-[1px] bg-outline-variant/30 flex-1"></div>
              <span className="text-on-surface-variant text-xs font-mono uppercase tracking-widest">OR</span>
              <div className="h-[1px] bg-outline-variant/30 flex-1"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isSubmitting}
              className="w-full bg-transparent border-2 border-outline-variant/50 text-on-surface py-3 rounded-xl font-mono-label font-bold hover:bg-surface-container transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-12 gap-2"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              CONTINUE WITH GOOGLE
            </button>
            
            <div className="text-center mt-4">
              <p className="text-sm text-on-surface-variant">
                Don't have an execution profile?{" "}
                <Link href="/signup" className="text-primary font-bold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
