import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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
    ['RequirementSummarizer', 'TestCaseGenerator', 'DefectRiskAnalyzer']
  );
  assert.ok(skills.every(({ content }) => content.includes('## Description')));
});

test('package manifest does not declare the package as a dependency', async () => {
  const pkgJson = JSON.parse(
    await readFile(path.join(projectRoot, 'package.json'), 'utf8')
  );

  const dependencySections = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies'
  ];

  const offenders = dependencySections.flatMap((section) => {
    const deps = pkgJson[section] ?? {};
    return Object.keys(deps).filter((name) => name === pkgJson.name).map((name) => `${section}.${name}`);
  });

  assert.deepEqual(offenders, []);
});
