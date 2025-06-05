# SvelteKit Project Structure Guide

## 📁 Core Directories

### `.storybook/` - Component Documentation
* **Purpose**: Storybook configuration for component development
* **Key Files**:
  * `main.ts` - Core setup (stories location, addons, framework config)
  * `preview.ts` - Global styles, decorators, and story parameters
  * `manager.ts` - *(Optional)* Customize Storybook UI theme/layout
  * `vitest.setup.ts` - *(Optional)* Integration with Vitest for story testing
* **Status**: Version-controlled, customize as needed
* **Access**: `npm run storybook` (runs on port 6006)

### `.svelte-kit/` - Build Cache
* **Purpose**: Auto-generated compilation and caching directory
* **Contains**: Compiled files, routing metadata, type definitions
* **Rules**: 
  * ❌ Never edit manually
  * ✅ Safe to delete (regenerates automatically)
  * 🚫 Usually in `.gitignore`
* **Regenerates**: On `npm run dev` or `svelte-kit sync`

### `messages/` - Internationalization
* **Purpose**: Translation files for multi-language support
* **Structure**: 
  ```
  messages/
  ├── en.json    # English (base)
  ├── es.json    # Spanish
  ├── hi.json    # Hindi
  └── ...
  ```
* **Format**: Key-value pairs with interpolation support
  ```json
  {
    "hello_world": "Hello, {name}!",
    "nav.home": "Home"
  }
  ```
* **Usage**: UI components reference message IDs, display based on locale
* **Fallback**: Uses `baseLocale` (typically English) for missing translations

---

## 🔧 Configuration Files

### `project.inlang` - i18n Configuration
* **Purpose**: Inlang internationalization setup
* **Key Sections**:
  * `project_id` & `cache` - ⚠️ Auto-generated, don't modify
  * `$schema` - Validates configuration structure
  * `modules` - Translation plugins and formatters
  * `pathPattern` - Message file locations (`../messages/{locale}.json`)
  * `baseLocale` - Primary language (`"en"`)
  * `locales` - Supported languages array
* **Integration**: Works with translation tools and IDE extensions

### `.gitignore` & `.prettierignore`
* **Purpose**: Define ignored files for Git and Prettier
* **Common Exclusions**:
  * `node_modules/`, `.svelte-kit/`, `build/`
  * `*.log`, `.env*`, coverage reports
  * Lock files: `package-lock.json`, `pnpm-lock.yaml`

### `.npmrc` - npm Configuration
* **Purpose**: Controls npm package manager behavior
* **Key Settings**:
  * `engine-strict=true` - Enforces Node.js/npm version requirements
  * `registry` - Custom package registry (if needed)
  * `save-exact=true` - Install exact versions instead of ranges

### `.prettierrc` - Code Formatting
* **Purpose**: Prettier configuration for consistent code style
* **Format Options**: JSON, YAML, or JavaScript
* **Common Settings**:
  ```json
  {
    "useTabs": true,
    "singleQuote": true,
    "trailingComma": "none",
    "printWidth": 100,
    "plugins": ["prettier-plugin-svelte"]
  }
  ```
* **Integration**: Works with editors and `npm run format`

### `eslint.config.js` - Code Linting
* **Purpose**: ESLint setup for code quality and bug prevention
* **Features**:
  * Rule definitions and severity levels
  * Plugin integrations (Svelte, TypeScript, a11y)
  * Environment configurations (browser, node)
  * File-specific overrides
* **Benefits**: Catches errors, enforces style, improves maintainability

---

## 📦 Package Management

### `package.json` - Project Manifest
* **Purpose**: Main project configuration and dependency management
* **Key Sections**:
  * `dependencies` - Runtime packages
  * `devDependencies` - Development-only packages
  * `scripts` - Runnable commands
  * `engines` - Node.js/npm version requirements
  * `type: "module"` - Enables ES modules
* **Critical**: Required for `npm install` and project setup

### `package-lock.json` / `pnpm-lock.yaml`
* **Purpose**: Dependency version locking for consistent installs
* **Features**:
  * Exact version specifications
  * Dependency tree flattening
  * Integrity checksums for security
* **Auto-generated**: Never edit manually
* **Benefit**: Prevents "works on my machine" issues

---

## 🧪 Testing Configuration

### `playwright.config.ts` - E2E Testing
* **Purpose**: Playwright end-to-end testing configuration
* **Key Settings**:
  * Browser targets (Chromium, Firefox, Safari)
  * Test directories and file patterns
  * Base URL and timeout configurations
  * Screenshot and video recording options
  * Parallel execution settings
* **Usage**: `npm run test:e2e`

---

## ⚙️ Build & Development

### `svelte.config.js` - SvelteKit Core
* **Purpose**: Main SvelteKit configuration
* **Key Areas**:
  * **Preprocessors**: TypeScript, SCSS, PostCSS
  * **Adapters**: Deployment targets (Vercel, Netlify, static)
  * **Kit options**: Routing, aliases, CSR/SSR settings
  * **Vite integration**: Build tool configuration
* **Impact**: Affects entire project build and runtime behavior

### `tsconfig.json` - TypeScript
* **Purpose**: TypeScript compiler configuration
* **Key Settings**:
  * `compilerOptions` - Type checking strictness, module system
  * `include/exclude` - File scope for compilation
  * `paths` - Import path aliases (`$lib/*`, `$app/*`)
  * `extends` - Base configurations from SvelteKit
* **Benefits**: Type safety, better IDE support, refactoring

### `vite.config.ts` - Build Tool
* **Purpose**: Vite development and build configuration
* **Features**:
  * Development server settings (port, proxy, HMR)
  * Plugin integrations (SvelteKit, testing, optimization)
  * Build optimizations and asset handling
  * Path aliases and environment variables
* **Integration**: Works seamlessly with SvelteKit and testing tools

---

## 🚀 Quick Commands

| File/Folder | Command | Purpose |
|-------------|---------|---------|
| `.storybook/` | `npm run storybook` | Launch component docs |
| `.svelte-kit/` | `svelte-kit sync` | Regenerate types |
| `messages/` | - | Edit translations directly |
| `package.json` | `npm install` | Install dependencies |
| `playwright.config.ts` | `npm run test:e2e` | Run E2E tests |
| `eslint.config.js` | `npm run lint` | Check code quality |
| `.prettierrc` | `npm run format` | Format code |

---

## 💡 Best Practices

- **Never edit**: `.svelte-kit/`, lock files, auto-generated configs
- **Version control**: All config files except sensitive data
- **Keep updated**: Dependencies and configuration as project grows
- **Document changes**: Especially in `svelte.config.js` and complex setups
- **Test configurations**: Verify builds work after config changes