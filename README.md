# My Skills Server

A small Node.js server that hosts the `SKILL.md` files in this folder as a discoverable HTTP API.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```powershell
npm install
npm start
```

The server listens on `http://localhost:3000` by default. Set `PORT` to use another port.

```powershell
$env:PORT = 4000
npm start
```

For development, use Node's built-in watch mode:

```powershell
npm run dev
```

## API

- `GET /health` - server health check
- `GET /api/skills` - list available skills and descriptions
- `GET /api/skills/:skillId` - return one skill's metadata and full markdown content

Current skill IDs:

- `DefectRiskAnalyzer`
- `RequirementSummarizer`
- `TestCaseGenerator`

The server reads the markdown files on each request, so edits to a `SKILL.md` are picked up without changing the server code. These routes host the skill definitions; an LLM or other client can use the returned content as its instruction contract.
