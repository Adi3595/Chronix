<div align="center">
  <img src="./public/icon.png" alt="Chronix OS Logo" width="120" height="120">
  <br/>
  <h1>Chronix OS</h1>
  <p><strong>Execution Without Chaos.</strong> A premium autonomous executive productivity suite powered by an interconnected neural suite of AI agents.</p>

  <p>
    <a href="#-overview"><img src="https://img.shields.io/badge/Overview-Explore-blue?style=for-the-badge&logo=explore" alt="Overview" /></a>
    <a href="#-the-6-agent-neural-suite"><img src="https://img.shields.io/badge/Agents-View_AI-purple?style=for-the-badge&logo=robot" alt="Agents" /></a>
    <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tech-Stack-green?style=for-the-badge&logo=react" alt="Tech Stack" /></a>
    <a href="#-quick-start"><img src="https://img.shields.io/badge/Quick-Start-orange?style=for-the-badge&logo=rocket" alt="Quick Start" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-black?style=for-the-badge" alt="License" /></a>
  </p>
</div>

---

## ⚡ Overview
Chronix OS transforms your goals, deadlines, and responsibilities into clear, autonomous execution paths. It actively manages your workload via a **6-agent Neural Suite**, preventing burnout and context switching through smart rescheduling, momentum calculation, and real-time telemetry.

![Chronix OS Dashboard Overview](https://chronix.os/og-image.jpg)

<details>
<summary><strong>✨ Why choose Chronix OS? (Click to expand)</strong></summary>

Most task managers expect you to do all the micro-management. Chronix OS inverts the model. The **AI Agents** work alongside you:
- They break down goals so you don't have to.
- They push non-critical tasks away when you are overwhelmed.
- They write your weekly reports.
</details>

---

## 🤖 The 6-Agent Neural Suite
Our custom-built intelligent agents manage your workflow autonomously behind the scenes.

| Agent | Designation | Core Responsibility |
| :--- | :--- | :--- |
| **Atlas** | `A-01 | Strategic Core` | Automatically deconstructs massive goals into step-by-step actionable tasks. |
| **Orbit** | `A-02 | Integrations` | Synchronizes external platforms (Calendar, Slack, GitHub) to detect scheduling conflicts. |
| **Sentinel** | `A-03 | Risk Monitor` | Scans for impending bottlenecks in your Task Matrix and suggests deferring non-essential work. |
| **Pulse** | `A-04 | Momentum` | Dynamically calculates your productivity velocity score based on completion rates. |
| **Rescue** | `A-05 | Recovery` | Steps in when you're overwhelmed, freezing overdue tasks and enforcing deep work. |
| **Echo** | `A-06 | Synthesis` | Automatically synthesizes your weekly accomplishments into an executive briefing report. |

<details>
<summary><strong>🧠 How do they communicate? (Click to expand)</strong></summary>

The agents operate using Next.js Server Actions and Prisma to log real-time actions into a central **Synergy Feed** (visible on the Agent Hub page). There are absolutely NO external API dependencies required (e.g. OpenAI keys). They function purely through built-in logic algorithms and local processing.
</details>

---

## 🚀 Key Features

- 🟢 **Execution Matrix:** Prioritize tasks seamlessly with the auto-sorted matrix and Kanban view.
- 🔮 **Future Self Simulator:** Set ambitious deadlines and visualize the butterfly effect of your choices today on your future goals.
- 📡 **Agent Command Center:** A live telemetry feed tracking what your AI agents are doing in real-time.
- ⚙️ **Settings & Autonomy Controls:** Dial the autonomy of your agents up or down depending on your comfort level.

---

## 🛠 Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Database:** Prisma ORM with SQLite (Local Development)
- **Styling:** Tailwind CSS + Framer Motion (Glassmorphism & Micro-animations)
- **Typography:** Geist Sans/Mono + Source Serif 4 (Premium aesthetic)

---

## 📦 Quick Start

Want to run Chronix OS locally? Just follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adi3595/Chronix.git
   cd Chronix/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start the development server**
   ```bash
   npm run dev --webpack
   ```

> [!TIP]
> **Accessing the app:** Visit `http://localhost:3000` to access the terminal.

---

## 🛡 License
This project is licensed under the [MIT License](LICENSE).
