import os
import google.generativeai as genai

# Setup Gemini
genai.configure(api_key=os.environ.get("GEMINI_API_KEY", "mock_key_for_now"))

# GenerativeModel initialization
model = genai.GenerativeModel('gemini-1.5-pro-latest')

async def generate_roadmap(goal_title: str, goal_description: str):
    """
    Atlas: Strategic Planning Agent
    Generates a high-level roadmap and initial tasks for a given goal.
    """
    prompt = f"""
    You are Atlas, the Strategic Planning Agent for Chronix.
    Given the goal '{goal_title}', and description: '{goal_description}',
    generate a list of 5 actionable tasks to get started. 
    Format as JSON: [ {{"title": "Task 1", "description": "...", "estimated_hours": 2.0}}, ... ]
    """
    # For MVP, we will just return a mock response if no key is set
    if os.environ.get("GEMINI_API_KEY") in [None, "mock_key_for_now", ""]:
        return [
            {"title": f"Research {goal_title}", "description": "Initial research phase.", "estimated_hours": 2.0},
            {"title": "Setup Foundation", "description": "Create the basic structure.", "estimated_hours": 4.0},
            {"title": "Execute Phase 1", "description": "Begin main execution.", "estimated_hours": 8.0}
        ]

    response = await model.generate_content_async(prompt)
    # Ideally parse JSON here
    return response.text

async def detect_risks(tasks):
    """
    Sentinel: Risk Intelligence Agent
    """
    return {"risk_score": 15, "message": "All clear for now."}
