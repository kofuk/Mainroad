import {SearchResult} from '../types/search-result';

export const fetchSearchResult = async (query: string, page: number): Promise<SearchResult> => {
	const url = new URL(location.href);
	url.pathname = '/search';
	const searchParams = new URLSearchParams();
	searchParams.append('q', query);
	searchParams.append('page', page.toString());
	url.search = searchParams.toString();

	return (await fetch(url.toString()).then((resp) => resp.json())) as SearchResult;
};
