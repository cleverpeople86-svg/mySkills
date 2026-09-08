import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { loadSkills } from '../src/skill-loader.js';

const testFile = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(path.dirname(testFile));

test('loads only directories containing SKILL.md', async () => {
  const skills = await loadSkills(projectRoot);

  assert.deepEqual(
    skills.map(({ id }) => id),
    ['DefectRiskAnalyzer', 'RequirementSummarizer', 'TestCaseGenerator']
  );
  assert.ok(skills.every(({ content }) => content.includes('## Description')));
});
