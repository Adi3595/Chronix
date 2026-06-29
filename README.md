<div align="center">
  <img src="./frontend/public/icon.svg" alt="Chronix OS Logo" width="100" height="100">
  <br/>
  <h1>CHRONIX OS</h1>
  <p><strong>Execution Without Chaos.</strong><br/>The world's first cinematic productivity operating system powered by an interconnected neural suite of AI agents.</p>

  <p>
    <a href="#-overview"><img src="https://img.shields.io/badge/Overview-Explore-1D2E1B?style=for-the-badge&logoColor=A9C632" alt="Overview" /></a>
    <a href="#-the-neural-suite"><img src="https://img.shields.io/badge/Agents-Neural_Suite-1D2E1B?style=for-the-badge&logoColor=A9C632" alt="Agents" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tech-Stack-1D2E1B?style=for-the-badge&logoColor=A9C632" alt="Tech Stack" /></a>
    <a href="#-quick-start"><img src="https://img.shields.io/badge/Quick-Start-1D2E1B?style=for-the-badge&logoColor=A9C632" alt="Quick Start" /></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" />
    <img src="https://img.shields.io/badge/Gemini-2.5_Flash-blue?style=flat-square&logo=google" />
    <img src="https://img.shields.io/badge/Prisma-PostgreSQL-3982CE?style=flat-square&logo=prisma" />
    <img src="https://img.shields.io/badge/Slack-OAuth-4A154B?style=flat-square&logo=slack" />
    <img src="https://img.shields.io/badge/Pinecone-RAG-00B37D?style=flat-square" />
    <img src="https://img.shields.io/badge/Notion-Integration-000000?style=flat-square&logo=notion" />
  </p>
</div>

---

## ⚡ Overview

Designed exclusively for founders, executive leaders, and high-leverage builders who cannot afford context switching. Chronix OS transforms goals, deadlines, and responsibilities into **intelligent, autonomous execution paths** powered by a network of 8 specialized AI agents.

Unlike passive task managers that wait for you to update them, Chronix **actively executes, monitors, and protects your cognitive bandwidth**. It predicts risks before they happen, maintains unbreakable momentum, and finishes what truly matters.

> **Graceful Degradation:** If you don't configure external API keys, all agents fall back into "Simulated Mode" — letting you explore the full UI and experience the product without any broken states.

---

## 🤖 The Neural Suite (8 AI Agents)

| Agent | Role | Core Responsibility | Integration |
| :--- | :--- | :--- | :--- |
| **Atlas** | Strategic Brain | Decomposes goals into executable task trees, detects risks, and prioritizes critical paths | Gemini 2.5 Flash |
| **Orbit** | Calendar Manager | Scans Google Calendar for conflicts and auto-blocks time for deep work | Google Calendar API (OAuth) |
| **Nova** | Communications Filter | Connects to Slack, reads threads, and delivers crisp executive summaries — so you never scroll again | Slack API + Gemini |
| **Echo** | Knowledge Retrieval | RAG architecture querying your Notion workspace via Pinecone vector embeddings | Notion API + Pinecone |
| **Sentinel** | Focus Guardian | Monitors momentum and auto-engages Deep Work mode — sets Slack DND and updates your status | Slack API |
| **Pulse** | Momentum Engine | Dynamically calculates your productivity velocity score based on task completion rates | Native Logic |
| **Rescue** | Risk Interceptor | Scans for stalled goals and approaching deadlines; escalates before they become crises | Gemini 2.5 Flash |
| **Future Self** | Reflection Engine | Generates a letter from your future self based on current goals and momentum trajectory | Gemini 2.5 Flash |

---

## 🚀 Key Features

- **Cinematic Interface** — Dual theme system: a botanical light mode (Matcha Lime / Forest Brew palette) and a volumetric dark mode with animated particle effects and ambient glow
- **Multi-Tenant Slack OAuth** — Every user connects their own Slack workspace via OAuth v2; tokens stored securely per-user in the database
- **Persistent Agent History** — Every agent command and response is stored in PostgreSQL and pre-loaded on each page visit — agents remember everything
- **Google Calendar OAuth** — Real-time scheduling conflict detection and deep work time-blocking
- **RAG Knowledge Retrieval** — Echo uses Pinecone vector search over your Notion pages to answer executive-level questions
- **Execution Matrix** — Auto-sorted task prioritization with Kanban view and goal decomposition
- **Future Self Simulator** — Visualize how today's decisions affect your long-term goals
- **Premium Skeleton Screens** — Custom per-page loading skeletons across all dashboard routes
- **Fully Responsive** — Desktop and mobile optimized

---

## 🛠 Tech Stack

![Next JS](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Server Components, Server Actions) |
| Database | PostgreSQL via Prisma ORM (Prisma Postgres hosted) |
| AI Core | Google Gemini 2.5 Flash + text-embedding-004 |
| Vector DB | Pinecone (RAG knowledge retrieval) |
| Auth | Firebase Authentication |
| Styling | Tailwind CSS v4 + Framer Motion |
| Integrations | Slack Web API, Google Calendar API, Notion API, Oura Ring API |
| Deployment | Vercel |

---

## 📦 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Adi3595/Chronix.git
cd Chronix/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
# ── Database (Required) ──────────────────────────────────
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

# ── Firebase Auth (Required) ─────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""

# ── AI Core — Atlas, Rescue, Future Self (Required) ──────
GEMINI_API_KEY=""

# ── Google Calendar — Orbit Agent (Optional) ─────────────
GOOGLE_CALENDAR_CLIENT_ID=""
GOOGLE_CALENDAR_CLIENT_SECRET=""

# ── Slack — Nova & Sentinel Agents (Optional) ────────────
# For multi-tenant OAuth (recommended):
SLACK_CLIENT_ID=""
SLACK_CLIENT_SECRET=""
# OR hardcode your own tokens for single-workspace use:
SLACK_BOT_TOKEN=""
SLACK_USER_TOKEN=""

# ── Notion + Pinecone — Echo Agent (Optional) ────────────
NOTION_API_KEY=""
PINECONE_API_KEY=""
PINECONE_INDEX_NAME="chronix-index"

# ── Oura Ring — Pulse/Aura Agent (Optional) ──────────────
OURA_API_KEY=""
```

### 4. Initialize the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Launch

```bash
npm run dev
```

Visit `http://localhost:3000` to enter the system.

---

## 🔗 Slack Integration Setup

To enable Nova and Sentinel with your own Slack workspace:

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and create a new app
2. Under **OAuth & Permissions**, add these **Bot Token Scopes**: `channels:read`, `channels:history`, `chat:write`
3. Add these **User Token Scopes**: `channels:history`, `dnd:write`, `users.profile:write`, `search:read`
4. Add your Redirect URL: `https://your-domain.com/api/slack/callback`
5. Under **Manage Distribution**, enable **Public Distribution**
6. Copy `Client ID` and `Client Secret` from **Basic Information** → App Credentials into your `.env`
7. In the Chronix Settings → Connected Services, click **"Add to Slack"**
8. In the Slack channel you want Nova to read, type `/invite @YourBotName`

---

## 🎨 Design System

Chronix uses a bespoke **Botanical** color palette built for both light and dark modes:

| Token | Color | Hex | Usage |
|---|---|---|---|
| Matcha Lime | 🟩 | `#A9C632` | Primary actions, highlights |
| Forest Brew | 🟫 | `#1D2E1B` | Dark background, text |
| Tea Mist | 🩶 | `#C8D2A6` | Surface accents, cards |
| Bamboo Beige | 🟨 | `#E6D4A6` | Light mode base |

---

## 🗂 Project Structure

```
Chronix/
├── frontend/
│   ├── prisma/
│   │   └── schema.prisma          # Database schema
│   ├── public/                    # Static assets (icon, bg image)
│   └── src/
│       ├── app/
│       │   ├── actions/           # Server Actions (agent logic)
│       │   │   ├── atlas-actions.ts
│       │   │   ├── echo-actions.ts
│       │   │   ├── nova-actions.ts
│       │   │   └── ...
│       │   ├── api/
│       │   │   ├── auth/google/   # Google Calendar OAuth
│       │   │   └── slack/         # Slack OAuth v2 endpoints
│       │   ├── dashboard/
│       │   │   ├── agent-hub/     # Central agent command center
│       │   │   ├── nova/          # Nova agent page + history
│       │   │   ├── echo/          # Echo agent page + history
│       │   │   ├── analytics/     # Productivity analytics
│       │   │   ├── goals/         # Goal management
│       │   │   ├── tasks/         # Task execution matrix
│       │   │   ├── calendar/      # Calendar integration
│       │   │   ├── settings/      # User settings + integrations
│       │   │   └── ...
│       │   └── (landing)/         # Public landing page
│       └── components/            # Shared UI components
├── vercel.json                    # Vercel deployment config
└── README.md
```

---

## 🌍 Deployment

Chronix is deployed on **Vercel**. The `vercel.json` at the root handles the build pipeline automatically:

```json
{
  "buildCommand": "npx prisma generate && npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

Simply connect your GitHub repo to Vercel and add all environment variables in the Vercel dashboard.

---

## 🛡 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with obsession at the <strong>Vibe2Ship Hackathon</strong></p>
  <p><em>Chronix OS — Where ambition meets execution.</em></p>
</div>
