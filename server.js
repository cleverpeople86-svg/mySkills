#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { loadSkills } from './src/skill-loader.js';

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(currentFile);
const skillsRoot = projectRoot;
const port = Number(process.env.PORT ?? 3000);

const app = express();
app.use(express.json());

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/skills', async (_request, response, next) => {
  try {
    const skills = await loadSkills(skillsRoot);
    response.json({
      skills: skills.map(({ id, directory, description }) => ({ id, directory, description }))
    });
  } catch (error) {
    next(error);
  }
});

app.get('/api/skills/:skillId', async (request, response, next) => {
  try {
    const skills = await loadSkills(skillsRoot);
    const skill = skills.find(({ id }) => id === request.params.skillId);

    if (!skill) {
      response.status(404).json({ error: 'Skill not found.' });
      return;
    }

    response.json({
      id: skill.id,
      directory: skill.directory,
      description: skill.description,
      content: skill.content
    });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: 'Unable to load skills.' });
});

app.listen(port, () => {
  console.log(`Skills server listening at http://localhost:${port}`);
});
