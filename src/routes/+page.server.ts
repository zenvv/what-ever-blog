import { db } from '$lib/supabase/db';

import { error } from '@sveltejs/kit';

export const load = async () => {
	const { data: articles, error: db_error } = await db.from('articles').select();

	if (!articles) throw error(404, db_error);
	return { articles };
};
