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

## Publish to npm

This workspace is set up to publish as a public npm package from GitHub Actions.

1. Add a GitHub repository secret named `NPM_TOKEN` with a valid npm publish token.
2. Commit your code changes.
3. Open GitHub Actions and run the `Publish to npm` workflow.
4. The workflow will:
   - run the tests
   - bump the patch version automatically if the current version already exists on npm
   - publish the package using `NPM_TOKEN`

The included workflow file is `.github/workflows/publish-npm.yml`.

> The workflow now handles automatic patch version bumps for future releases.

## API

- `GET /health` - server health check
- `GET /api/skills` - list available skills and descriptions
- `GET /api/skills/:skillId` - return one skill's metadata and full markdown content

Current skill IDs:

- `DefectRiskAnalyzer`
- `RequirementSummarizer`
- `TestCaseGenerator`

The server reads the markdown files on each request, so edits to a `SKILL.md` are picked up without changing the server code. These routes host the skill definitions; an LLM or other client can use the returned content as its instruction contract.
