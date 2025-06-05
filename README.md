## Critical Points to Keep in mind

1. Don't install anything new without asking.
2. Don't make changes to `.svelte-kit`, `node_modules` (auto-generated).
3. Generally, would only need to make updates in `/src`, `/static` directories.
4. As a general rule, if any configs need to be changed `inform`.
5. Go through `README.md` to get started.
6. `REFERENCE.md` is just to get an idea of multiple configs, hidden files, etc (OPTIONAL).
7. Never push to remote `origin/main` branch.
8. We will use (conventional commits) [https://www.conventionalcommits.org/en/v1.0.0/] for commits and pull requests. 
9. Only make changes in files and folders corresponding to your task.
10. Fork the repository, clone the forked repo, work on the forked repo, push(sync) to yout forked repo,
open a pull request (with clear title and description) and wait for review.

## Prerequisites

**Visual Studio Code installed**

**General Related VScode extensions installed**

**Node.js and npm installed**
   - Download from [https://nodejs.org](https://nodejs.org)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

## Getting Started

Install dependencies (`node_modules` folder) and start developing:

```bash
npm install
npm run dev
# or open in browser: npm run dev -- --open
```

## How to complete frontend tasks (in `src/lib`)

You will likely be assigned a specific component or page to work on. Each component/page will have at least 3 files associated with it:

- `<component/page>.svelte` - This is the file containing the actual content of the component/page.  
- `<component/page>.svelte.test.ts` - This is the file containing the tests for your component. You shouldn't need to edit this file other than removing the `.skip` (more details in the next section).  
- `<component/page>.stories.svelte` - This is the file containing the storybook preview of the component/page. You shouldn't need to edit this file.


## Creating and testing your component (ONLY NEEDED IF THERE IS A TEST FILE)

First, go into the `<component/page>.svelte.test.ts` file associated with your component. Near the top, you'll see something like:

```ts
describe.skip('<component/page>.svelte', () => {
  ...
});
````

Remove the `.skip` to enable testing for your component.

Then, run:

```bash
npm run test:unit
```

This will run the suite of tests for the website as a whole and your component. These tests will fail at first. Read them to see what the requirements are for your component, then implement all required features. Keep running `npm run test:unit` until all tests pass.

## Previewing your component

Run:

```bash
npm run storybook
```

to open an interactive preview for the website's UI. Find your component within the tree and ensure everything looks and functions as expected.


## Tools Overview (check package.json `scripts`)

**Prettier** - Code formatting
```bash
npm run format
```

**Storybook** - Component docs (**`IMPORTANT`**)
```bash
npm run storybook
```

**ESLint** - Code linting  
```bash
npm run lint
```

**Vitest** - Unit testing
```bash
npm run test:unit
```

**Playwright** - E2E testing (end to end)
```bash
npm run test:e2e
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check |
| `npm run format` | Format code |
| `npm run lint` | Check formatting and linting |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run storybook` | Start Storybook |

## Building (GENERALLY WILL NOT BE NEEDED)

```bash
npm run build
npm run preview
```

Deploy with an appropriate [adapter](https://svelte.dev/docs/kit/adapters) for your environment.

