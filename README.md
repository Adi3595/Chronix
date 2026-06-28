<div align="center">
  <img src="./frontend/public/icon.svg" alt="Chronix OS Logo" width="120" height="120" style="filter: invert(1);">
  <br/>
  <h1>CHRONIX OS</h1>
  <p><strong>Execution Without Chaos.</strong> The world's first cinematic productivity operating system powered by an interconnected neural suite of AI agents.</p>

  <p>
    <a href="#-overview"><img src="https://img.shields.io/badge/Overview-Explore-121212?style=for-the-badge&logo=explore&logoColor=2e7d32" alt="Overview" /></a>
    <a href="#-the-neural-suite"><img src="https://img.shields.io/badge/Agents-View_AI-121212?style=for-the-badge&logo=robot&logoColor=2e7d32" alt="Agents" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tech-Stack-121212?style=for-the-badge&logo=react&logoColor=2e7d32" alt="Tech Stack" /></a>
    <a href="#-quick-start"><img src="https://img.shields.io/badge/Quick-Start-121212?style=for-the-badge&logo=rocket&logoColor=2e7d32" alt="Quick Start" /></a>
  </p>
</div>

---

## ⚡ Overview

Designed exclusively for founders, executive leaders, and high-leverage builders who cannot afford context switching. Chronix transforms goals, deadlines, and responsibilities into intelligent, autonomous execution paths. 

Instead of another simple to-do list, Chronix acts as a true Operating System for your ambition. It actively manages your workload via a **6-agent Neural Suite**, preventing burnout and context switching through smart rescheduling, momentum calculation, and real-time telemetry.

<details>
<summary><strong>✨ Why choose Chronix OS? (Click to expand)</strong></summary>

Most task managers expect you to do all the micro-management. Chronix OS inverts the model. The **AI Agents** work alongside you:
- They break down massive goals so you don't have to.
- They push non-critical tasks away when your schedule is overwhelmed.
- They query your personal Notion workspace to answer deep questions.
- They directly modify your Google Calendar to enforce Deep Work.
</details>

---

## 🚀 Key Features

- **Cinematic Interface:** A stunning, premium aesthetic featuring glassmorphism, dynamic grids, and frictionless Framer Motion micro-animations.
- **The Execution Matrix:** Prioritize tasks seamlessly with the auto-sorted matrix and Kanban view.
- **Future Self Simulator:** Visualize the butterfly effect of your choices today on your future goals.
- **Agent Command Center:** A live telemetry feed tracking exactly what your AI agents are doing in real-time.
- **Native Integrations:** Directly hooks into Google Calendar, Slack, and Notion for genuine external autonomy.

---

## 🤖 The Neural Suite (AI Agents)

Our custom-built intelligent agents manage your workflow autonomously behind the scenes. 

| Agent | Designation | Core Responsibility | Required Integration |
| :--- | :--- | :--- | :--- |
| **Atlas** | `A-01 | Strategic Core` | Automatically deconstructs massive goals into step-by-step actionable tasks with strategic reasoning. | `Google Gemini API` |
| **Orbit** | `A-02 | Integrations` | Scans Google Calendar for conflicts and auto-schedules Deep Work blocks for high-priority tasks. | `Google Calendar API (OAuth)` |
| **Sentinel** | `A-03 | Risk Monitor` | Detects context-switching and suggests deferring non-essential work when overloaded. | *Native Logic* |
| **Pulse** | `A-04 | Momentum` | Dynamically calculates your productivity velocity score based on completion rates. | *Native Logic* |
| **Nova** | `A-05 | Communications`| Auto-drafts Slack messages or summarizes missed communications. | `Slack Bot Token` |
| **Echo** | `A-06 | Second Brain` | RAG architecture that queries your Notion workspace to answer executive-level questions. | `Notion API`, `Pinecone DB` |

> **Graceful Degradation:** If you don't configure the external API keys, the agents will intelligently fall back into "Simulated Mode"—allowing you to test the beautiful UI and experience the product without breaking!

---

## 🛠 Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![PostgreSQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Database:** PostgreSQL + Prisma ORM
- **AI Core:** Google Gemini (`gemini-2.5-flash` & `text-embedding-004`)
- **Vector DB:** Pinecone
- **Styling:** Tailwind CSS + Framer Motion 
- **Typography:** Geist Sans/Mono + Source Serif 4

---

## 📦 Quick Start

Run Chronix OS locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adi3595/Chronix.git
   cd Chronix/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `frontend` directory:
   ```env
   # Database (Required)
   DATABASE_URL="postgresql://..."
   
   # Core AI (Required for Atlas)
   GEMINI_API_KEY="..."
   
   # Google Calendar (Required for Orbit)
   GOOGLE_CALENDAR_CLIENT_ID="..."
   GOOGLE_CALENDAR_CLIENT_SECRET="..."
   
   # Notion & Vector DB (Required for Echo)
   NOTION_API_KEY="..."
   NOTION_PAGE_ID="..."
   PINECONE_API_KEY="..."
   PINECONE_INDEX_NAME="chronix-index"
   
   # Slack (Required for Nova)
   SLACK_BOT_TOKEN="..."
   SLACK_CHANNEL_ID="..."
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the execution matrix**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to enter the system.

---

## 🛡 License
This project is licensed under the [MIT License](LICENSE).
