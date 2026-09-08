import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const skillFileName = 'SKILL.md';

function toSkillName(directoryName) {
  return directoryName
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

function getDescription(markdown) {
  const description = markdown.match(/^## Description\s*\n+([^\n#]+)/im);
  return description?.[1]?.trim() ?? 'No description provided.';
}

export async function loadSkills(skillsRoot) {
  const entries = await readdir(skillsRoot, { withFileTypes: true });
  const skillDirectories = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const filePath = path.join(skillsRoot, entry.name, skillFileName);

    try {
      await access(filePath);
      skillDirectories.push(entry);
    } catch {
      // Ignore project directories that are not skill definitions.
    }
  }

  const skills = await Promise.all(skillDirectories.map(async (directory) => {
    const filePath = path.join(skillsRoot, directory.name, skillFileName);
    const content = await readFile(filePath, 'utf8');

    return {
      id: toSkillName(directory.name),
      directory: directory.name,
      description: getDescription(content),
      file: filePath,
      content
    };
  }));

  return skills.sort((left, right) => left.id.localeCompare(right.id));
}
