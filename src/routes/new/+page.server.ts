import { db } from '$lib/supabase/db';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	new: async ({ request, locals: { getSession } }) => {
		const auth = await getSession();

		const body = Object.fromEntries(await request.formData());

		const { error: err } = await db.from('articles').insert({
			authorId: auth?.user.id,
			title: body.title as string,
			description: body.desc as string,
			content: body.content as string,
			published: true
		});
		if (err) {
			return 'Something happened. Try again.';
		}

		throw redirect(303, '/');
	}
};
