import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	// Define where to find your stories
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],

	// Core addons
	addons: [
		'@storybook/addon-svelte-csf', // Enables Svelte Component Story Format
		'@chromatic-com/storybook', // Visual testing with Chromatic
		'@storybook/addon-docs', // Auto-generated documentation
		'@storybook/addon-a11y', // Accessibility testing
		'@storybook/addon-vitest' // Unit testing with Vitest
	],

	// SvelteKit framework and its configuration
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	}
};

export default config;
