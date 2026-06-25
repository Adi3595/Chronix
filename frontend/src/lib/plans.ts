// Plan definitions and feature gates for Chronix OS

export type PlanId = 'starter' | 'executive' | 'enterprise';

export interface PlanDefinition {
  id: PlanId;
  name: string;
  price: string;
  color: string;
  badge: string;
  features: {
    maxTasks: number | null;         // null = unlimited
    goals: boolean;
    analytics: boolean;
    calendar: boolean;
    futureSelf: boolean;
    agentHub: boolean;
    rescueCenter: boolean;
    allAgents: boolean;              // All 6 AI agents
    teamWorkspace: boolean;
    sso: boolean;
  };
}

export const PLANS: Record<PlanId, PlanDefinition> = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: '$0/forever',
    color: 'text-on-surface-variant',
    badge: 'bg-surface-container text-on-surface-variant',
    features: {
      maxTasks: 100,
      goals: true,
      analytics: false,
      calendar: true,
      futureSelf: false,
      agentHub: false,
      rescueCenter: false,
      allAgents: false,
      teamWorkspace: false,
      sso: false,
    },
  },
  executive: {
    id: 'executive',
    name: 'Executive Suite',
    price: '$12/month',
    color: 'text-primary',
    badge: 'bg-primary-container text-on-primary-container',
    features: {
      maxTasks: null,
      goals: true,
      analytics: true,
      calendar: true,
      futureSelf: true,
      agentHub: true,
      rescueCenter: true,
      allAgents: true,
      teamWorkspace: false,
      sso: false,
    },
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$49/user/mo',
    color: 'text-secondary',
    badge: 'bg-secondary-container text-on-secondary-container',
    features: {
      maxTasks: null,
      goals: true,
      analytics: true,
      calendar: true,
      futureSelf: true,
      agentHub: true,
      rescueCenter: true,
      allAgents: true,
      teamWorkspace: true,
      sso: true,
    },
  },
};

// Admin emails — these users always get enterprise access regardless of DB plan
export const ADMIN_EMAILS = [
  process.env.NEXT_PUBLIC_ADMIN_EMAIL,
  'admin@chronix.os',
].filter(Boolean) as string[];

export function resolveUserPlan(email: string | null | undefined, dbPlan: string, isAdmin: boolean): PlanId {
  if (isAdmin) return 'enterprise';
  if (email && ADMIN_EMAILS.some(a => a.toLowerCase() === email.toLowerCase())) return 'enterprise';
  if (dbPlan === 'enterprise') return 'enterprise';
  if (dbPlan === 'executive') return 'executive';
  return 'starter';
}

export function canAccess(plan: PlanId, feature: keyof PlanDefinition['features']): boolean {
  return !!PLANS[plan].features[feature];
}
