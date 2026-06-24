<div align="center">
  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ra48ArBG32KGJ3FgD64JQx1TJPGZyCB7yCxJ4UaNBtkTGzrF7kutaH-ddtpMNfUeVB7JlVM9PxXy6jhyhV-L1sMfRO__zrHHa5MAv4doHXdeQD2OreYm0bgj4q-WIZQNw6596CdNNOUS4F5ycT1XVLzxXYr4BhbKD_KtLGasSRsSWEo2ugnj_NyF9IcYRBog-nig4k2Z07AsHbT-ItihTCurSoNou3Gak2J8fWIOB_74HGVWX2nwBQmGhu6tkXdi5dq8tzOo3GM" alt="Chronix OS Logo" width="120" height="120">
  <br/>
  <h1>Chronix OS</h1>
  <p><strong>Execution Without Chaos.</strong> A premium autonomous executive productivity suite powered by an interconnected neural suite of AI agents.</p>
</div>

---

## ⚡ Overview
Chronix OS transforms goals, deadlines, and responsibilities into clear, autonomous execution paths. It actively manages your workload via a 6-agent Neural Suite, preventing burnout and context switching through smart rescheduling, momentum calculation, and real-time telemetry.

![Chronix OS Dashboard Overview](https://chronix.os/og-image.jpg)

## 🤖 The 6-Agent Neural Suite
Our custom-built intelligent agents manage your workflow autonomously behind the scenes.

1. **Atlas (A-01 | Strategic Core):** Automatically deconstructs massive goals into step-by-step actionable tasks.
2. **Orbit (A-02 | Integrations):** Synchronizes external platforms (Google Calendar, Slack, GitHub) and detects scheduling conflicts.
3. **Sentinel (A-03 | Risk Monitor):** Scans for impending bottlenecks in your Task Matrix and smartly suggests deferring non-essential work to tomorrow.
4. **Pulse (A-04 | Momentum):** Dynamically calculates your productivity velocity score based on completion rates.
5. **Rescue (A-05 | Recovery):** Steps in when you're overwhelmed, freezing overdue tasks and enforcing deep work.
6. **Echo (A-06 | Synthesis):** Automatically synthesizes your weekly accomplishments into an executive briefing report.

## 🚀 Features
- **Execution Matrix:** Prioritize tasks seamlessly with the auto-sorted matrix and Kanban view.
- **Future Self Simulator:** Set ambitious deadlines and visualize the butterfly effect of your choices today on your future goals.
- **Agent Command Center:** A live telemetry feed tracking what your AI agents are doing in real-time.
- **Settings & Autonomy Controls:** Dial the autonomy of your agents up or down depending on your comfort level.

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router, Server Actions)
- **Database:** Prisma ORM with SQLite (Local Development)
- **Styling:** Tailwind CSS + Framer Motion (Glassmorphism & Micro-animations)
- **Typography:** Geist Sans/Mono + Source Serif 4 (Premium aesthetic)

## 📦 Local Development

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
   npm run dev
   ```

Visit `http://localhost:3000` to access the terminal.

## 🛡 License
This project is licensed under the MIT License.
