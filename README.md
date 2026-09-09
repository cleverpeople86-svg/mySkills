# My Skills

This package contains the shared `SKILL.md` definitions for the included skills, ready to be installed and shared via npm.

## Install

```powershell
npm install @cleverpeople/my-skills
```

## Included skills

- `Defect-Risk-Analyzer`
- `Requirement-Summarizer`
- `Test-Case-Generator`

After installation, the package files are available in your local `node_modules/my-skills/` folder.

## How to use these skills

Each skill is published as a folder containing a `SKILL.md` file with structured guidance for a Copilot-style skill. You can:

1. Install the package with npm.
2. Copy or reference the skill folders from `node_modules/@cleverpeople/my-skills/`.
3. Use the `SKILL.md` definitions in compatible tooling that supports shared skill packages.
4. Provide the required input payloads for each skill to receive the expected structured output.

---

## Skill 1: Defect-Risk-Analyzer

### Description

Analyze testing quality metrics and determine project risk level before release.

### Purpose

Provide data-driven risk assessment and release readiness recommendations.

### Input Schema

```json
{
  "project_name": "string",
  "total_test_cases": "number",
  "passed_test_cases": "number",
  "failed_test_cases": "number",
  "blocked_test_cases": "number",
  "test_coverage_percentage": "number",
  "critical_defects": "number",
  "major_defects": "number",
  "minor_defects": "number"
}
```

### Field Description

- `project_name`: Project identifier
- `total_test_cases`: Total test count
- `passed_test_cases`: Successful executions
- `failed_test_cases`: Failed executions
- `blocked_test_cases`: Blocked executions
- `test_coverage_percentage`: Coverage metric
- `critical_defects`: Critical severity defects
- `major_defects`: Major severity defects
- `minor_defects`: Minor severity defects

### Output Schema

```json
{
  "risk_score": "number",
  "risk_level": "string",
  "project_health": "string",
  "release_readiness": "string",
  "recommendations": [
    "string"
  ]
}
```

### Field Description

- `risk_score`: Risk score (0-100)
- `risk_level`: Low, Medium, High, Critical
- `project_health`: Overall health status
- `release_readiness`: Ready or Not Ready
- `recommendations`: Improvement actions

### Risk Levels

- `0-20`: Low
- `21-50`: Medium
- `51-80`: High
- `81-100`: Critical

### Example Output

```json
{
  "risk_score": 78,
  "risk_level": "High",
  "project_health": "At Risk",
  "release_readiness": "Not Ready",
  "recommendations": [
    "Resolve all critical defects",
    "Increase test coverage above 80%",
    "Retest failed test cases"
  ]
}
```

---

## Skill 2: Requirement-Summarizer

### Description

The Requirement Summarizer analyzes requirements and user stories, extracting key business goals, features, acceptance criteria, and risks.

### Purpose

Transform lengthy requirement documents into concise and actionable summaries.

### Input Schema

```json
{
  "document_title": "string",
  "document_type": "string",
  "requirement_text": "string",
  "project_name": "string",
  "author": "string",
  "created_date": "datetime"
}
```

### Field Description

- `document_title`: Name of the requirement document
- `document_type`: BRD, FRD, User Story, Epic, etc.
- `requirement_text`: Full requirement content
- `project_name`: Associated project
- `author`: Requirement owner
- `created_date`: Document creation date

### Output Schema

```json
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
```

### Field Description

- `summary`: Concise requirement overview
- `business_objectives`: Primary business goals
- `key_features`: Main system capabilities
- `acceptance_criteria`: Conditions for successful implementation
- `risks`: Potential project risks
- `assumptions`: Assumptions identified from requirements

### Example Output

```json
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
```

---

## Skill 3: Test-Case-Generator

### Description

Generate test scenarios and test cases from requirements and acceptance criteria.

### Purpose

Accelerate software testing preparation and improve test coverage.

### Input Schema

```json
{
  "requirement_id": "string",
  "requirement_title": "string",
  "summary": "string",
  "acceptance_criteria": [
    "string"
  ],
  "application_type": "string",
  "priority": "string"
}
```

### Field Description

- `requirement_id`: Unique requirement identifier
- `requirement_title`: Requirement title
- `summary`: Requirement summary
- `acceptance_criteria`: List of acceptance criteria
- `application_type`: Web, Mobile, Desktop, API
- `priority`: High, Medium, Low

### Output Schema

```json
{
  "test_cases": [
    {
      "test_case_id": "string",
      "title": "string",
      "priority": "string",
      "pre_conditions": [
        "string"
      ],
      "test_steps": [
        "string"
      ],
      "expected_results": [
        "string"
      ]
    }
  ]
}
```

### Field Description

- `test_case_id`: Unique test case identifier
- `title`: Test case title
- `priority`: Business priority
- `pre_conditions`: Required setup
- `test_steps`: Execution steps
- `expected_results`: Validation outcomes

### Example Output

```json
{
  "test_cases": [
    {
      "test_case_id": "TC001",
      "title": "Verify Successful Login",
      "priority": "High",
      "pre_conditions": [
        "User account exists"
      ],
      "test_steps": [
        "Open login page",
        "Enter valid credentials",
        "Click Login"
      ],
      "expected_results": [
        "Dashboard displayed successfully"
      ]
    }
  ]
}
```

---

## Notes

- The project also includes a lightweight HTTP server in `server.js` that exposes the available skills through API endpoints.
- The `src/skill-loader.js` utility reads each skill folder and loads the content of its `SKILL.md` file.
- The package currently includes the three skills listed above and is ready to be published or shared as a reusable skill bundle.
