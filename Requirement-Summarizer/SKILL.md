# Requirement Summarizer

## Description

The Requirement Summarizer analyzes requirements and user stories, extracting key business goals, features, acceptance criteria, and risks.

## Purpose

Transform lengthy requirement documents into concise and actionable summaries.

---

## Input Schema

{
  "document_title": "string",
  "document_type": "string",
  "requirement_text": "string",
  "project_name": "string",
  "author": "string",
  "created_date": "datetime"
}

### Field Description

- document_title: Name of the requirement document
- document_type: BRD, FRD, User Story, Epic, etc.
- requirement_text: Full requirement content
- project_name: Associated project
- author: Requirement owner
- created_date: Document creation date

---

## Output Schema

{
  "summary": "string",
  "business_objectives": [
    "string"
  ],
  "key_features": [
    "string"
  ],
  "acceptance_criteria": [
    "string"
  ],
  "risks": [
    "string"
  ],
  "assumptions": [
    "string"
  ]
}

### Field Description

- summary: Concise requirement overview
- business_objectives: Primary business goals
- key_features: Main system capabilities
- acceptance_criteria: Conditions for successful implementation
- risks: Potential project risks
- assumptions: Assumptions identified from requirements

---

## Example Output

{
  "summary": "Users can access dashboards after authentication.",
  "business_objectives": [
    "Improve visibility of production data"
  ],
  "key_features": [
    "User Authentication",
    "Dashboard Access"
  ],
  "acceptance_criteria": [
    "User can log in successfully",
    "Dashboard loads within 3 seconds"
  ],
  "risks": [
    "Single Sign-On dependency"
  ],
  "assumptions": [
    "Users possess valid credentials"
  ]
}
