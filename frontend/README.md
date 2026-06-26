# Chronix OS

Chronix OS is a hyper-executive suite built for high-performers, designed to orchestrate your goals, manage your calendar, filter your communications, and optimize your bio-rhythms using autonomous AI agents.

## The Core Neural Network (Live Agents)

Chronix is powered by 6 specialized agents. Each operates autonomously in the background to streamline your life:

- **Atlas (Goal Architecture)**: Powered by Gemini 2.5 Flash, Atlas breaks down your macroscopic goals into highly structured, actionable sub-tasks in real-time.
- **Orbit (Calendar Synchronization)**: Deeply integrated with **Google Calendar via secure OAuth 2.0**. Orbit analyzes your schedule, detects conflicts, and autonomously injects "Deep Work" blocks directly onto your live calendar.
- **Nova (Communications Filter)**: Integrated directly with the **Slack Web API**. Nova intercepts Slack channels and uses Gemini to generate concise, executive summaries of the conversation, saving you hours of reading.
- **Sentinel (Risk & Focus)**: The ultimate protector of your time. When engaged, Sentinel physically alters your Slack profile, sets Do-Not-Disturb modes, and aggressively protects your Deep Work sessions.
- **Echo (Knowledge Retrieval)**: A state-of-the-art **RAG (Retrieval-Augmented Generation) pipeline**. Echo connects to your live **Notion** workspace, uses Gemini to generate vector embeddings, stores them in **Pinecone**, and retrieves answers based solely on your personal second brain.
- **Aura (Biometrics)**: Monitors energy levels to optimize when you tackle your most cognitively demanding tasks.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (via Vercel) + Prisma ORM
- **AI/LLM**: Google Gemini (`@google/genai`)
- **Integrations**: Google APIs, Slack Web API, Notion Client, Pinecone Database
- **Authentication**: Custom JWT / Cookie-based with Firebase UI
- **Deployment**: Vercel

## Live Integrations Note
To fully utilize Orbit, Nova, and Echo locally, you must provide valid API keys in your `.env` file for:
- Google Cloud (OAuth Client ID/Secret)
- Slack (User & Bot Tokens)
- Pinecone (API Key & Index Name)
- Notion (API Key & Page ID)
- Gemini (API Key)

*Chronix OS – Orchestrating Excellence.*
