import { db } from '$lib/supabase/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const { data: articles, error: db_error } = await db
			.from('articles')
			.select('*')
			.eq('id', params.slug);

		if (!articles) throw error(404, db_error);

		const { data: postContent } = await db.storage
			.from('posts')
			.getPublicUrl(`${articles[0].authorId}/${articles[0].content}.md`);

		return { articles, postContent };
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
