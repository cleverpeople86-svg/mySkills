# Test Case Generator

## Description

Generate test scenarios and test cases from requirements and acceptance criteria.

## Purpose

Accelerate software testing preparation and improve test coverage.

---

## Input Schema

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

### Field Description

- requirement_id: Unique requirement identifier
- requirement_title: Requirement title
- summary: Requirement summary
- acceptance_criteria: List of acceptance criteria
- application_type: Web, Mobile, Desktop, API
- priority: High, Medium, Low

---

## Output Schema

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

### Field Description

- test_case_id: Unique test case identifier
- title: Test case title
- priority: Business priority
- pre_conditions: Required setup
- test_steps: Execution steps
- expected_results: Validation outcomes

---

## Example Output

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
`