import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

// (gebriish) : allowed routes go here
const frontendRoutes = [
	'/',
	'/aboutus',
	'/caportal',
]


const requestFilter : Handle = async ({event, resolve}) => {
	const path = event.url.pathname.toLowerCase();

	const isAllowed = frontendRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);

	if (!isAllowed) {
		return new Response('Not Found', { status: 404 });
	}

	return resolve(event);
}

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return requestFilter({ event, resolve: (_event) =>
			resolve(_event, {
				transformPageChunk: ({ html }) =>
					html.replace('%paraglide.lang%', locale)
			})
		});
	});

export const handle: Handle = handleParaglide;