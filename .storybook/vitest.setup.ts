import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/sveltekit';
import * as projectAnnotations from './preview';

// Setup Vitest to apply Storybook's preview configuration before running tests,
// ensuring story tests run with the same setup as in Storybook for consistency.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
