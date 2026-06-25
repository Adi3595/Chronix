"use client";

import React, { createContext, useContext } from "react";
import { PlanId, PlanDefinition, PLANS, canAccess } from "@/lib/plans";

interface PlanContextType {
  plan: PlanId;
  planDef: PlanDefinition;
  can: (feature: keyof PlanDefinition["features"]) => boolean;
  isAdmin: boolean;
}

const PlanContext = createContext<PlanContextType>({
  plan: "starter",
  planDef: PLANS.starter,
  can: () => false,
  isAdmin: false,
});

export const usePlan = () => useContext(PlanContext);

export function PlanProvider({
  children,
  plan,
  isAdmin,
}: {
  children: React.ReactNode;
  plan: PlanId;
  isAdmin: boolean;
}) {
  const planDef = PLANS[plan];

  return (
    <PlanContext.Provider
      value={{
        plan,
        planDef,
        can: (feature) => canAccess(plan, feature),
        isAdmin,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
