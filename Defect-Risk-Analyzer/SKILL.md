# Defect Risk Analyzer

## Description

Analyze testing quality metrics and determine project risk level before release.

## Purpose

Provide data-driven risk assessment and release readiness recommendations.

---

## Input Schema

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

### Field Description

- project_name: Project identifier
- total_test_cases: Total test count
- passed_test_cases: Successful executions
- failed_test_cases: Failed executions
- blocked_test_cases: Blocked executions
- test_coverage_percentage: Coverage metric
- critical_defects: Critical severity defects
- major_defects: Major severity defects
- minor_defects: Minor severity defects

---

## Output Schema

{
  "risk_score": "number",
  "risk_level": "string",
  "project_health": "string",
  "release_readiness": "string",
  "recommendations": [
    "string"
  ]
}

### Field Description

- risk_score: Risk score (0-100)
- risk_level: Low, Medium, High, Critical
- project_health: Overall health status
- release_readiness: Ready or Not Ready
- recommendations: Improvement actions

---

## Risk Levels

0-20   = Low

21-50  = Medium

51-80  = High

81-100 = Critical

---

## Example Output

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