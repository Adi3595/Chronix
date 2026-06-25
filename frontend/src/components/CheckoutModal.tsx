"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { upgradePlan } from "@/app/actions/user-actions";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { PlanDefinition } from "@/lib/plans";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanDefinition;
}

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.uid) {
      setError("No active session found. Please log in.");
      return;
    }

    setIsProcessing(true);
    setError("");

    // Simulate network delay for payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await upgradePlan(user.uid, plan.id as "executive" | "enterprise");

    if (res.success) {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Wait for success animation then reload dashboard to refresh layout state
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        window.location.reload(); 
      }, 1500);
    } else {
      setIsProcessing(false);
      setError(res.error || "Payment failed to process. Try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-surface-container p-6 border-b border-outline-variant/30 flex justify-between items-center">
              <div>
                <h2 className="font-display-md text-[20px] font-serif text-on-surface">Upgrade to {plan.name}</h2>
                <p className="font-mono-label text-[12px] text-on-surface-variant mt-1">Secure Checkout</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-6"
                  >
                    <span className="material-symbols-outlined text-[40px] text-primary">check_circle</span>
                  </motion.div>
                  <h3 className="font-display-md text-[24px] font-serif text-on-surface mb-2">Payment Successful</h3>
                  <p className="text-on-surface-variant text-[14px]">Your executive suite has been upgraded.</p>
                </div>
              ) : (
                <form onSubmit={handlePayment} className="flex flex-col gap-5">
                  <div className="flex justify-between items-center p-4 rounded-xl border border-primary/20 bg-primary-container/10 mb-2">
                    <div>
                      <div className="font-mono-label text-[12px] text-primary uppercase tracking-widest mb-1">Total Due</div>
                      <div className="font-serif text-[28px] font-bold text-on-surface">{plan.price.split('/')[0]}<span className="text-[14px] text-on-surface-variant font-sans font-normal">/{plan.price.split('/')[1]}</span></div>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[32px]">workspace_premium</span>
                  </div>

                  {error && (
                    <div className="p-3 bg-error-container text-on-error-container text-[13px] rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono-label text-[12px] text-on-surface-variant mb-1">Card Number</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="4242 4242 4242 4242" 
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-transparent text-on-surface focus:border-primary focus:outline-none"
                          required
                          maxLength={19}
                        />
                        <span className="material-symbols-outlined absolute left-3 top-3 text-on-surface-variant">credit_card</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono-label text-[12px] text-on-surface-variant mb-1">Expiry</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-transparent text-on-surface focus:border-primary focus:outline-none"
                          required
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block font-mono-label text-[12px] text-on-surface-variant mb-1">CVC</label>
                        <input 
                          type="text" 
                          placeholder="123" 
                          className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-transparent text-on-surface focus:border-primary focus:outline-none"
                          required
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full mt-4 bg-primary text-on-primary py-3.5 rounded-xl font-bold text-[14px] hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-wait flex justify-center items-center h-[52px]"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      `Pay ${plan.price.split('/')[0]}`
                    )}
                  </button>
                  
                  <p className="text-center text-[11px] text-on-surface-variant mt-2 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">lock</span> Secured by Simulated Checkout
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
