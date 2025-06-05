import type { Preview } from '@storybook/sveltekit';
import '../src/app.css'; // Apply global app styles to all stories

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i, // Enable color picker for matching props
				date: /Date$/i // Enable date  picker for matching props
			}
		}
	}
};

export default preview;
