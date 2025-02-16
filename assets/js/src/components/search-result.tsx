import React from 'react';

import Header from './header';
import Article from './article';
import Pagination from './pagination';
import Loading from './loading';
import Error from './error';
import Empty from './empty';
import {useParams} from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import {fetchSearchResult} from '../utils/search';

type Props = {
	query: string;
};

const SearchResult = ({query}: Props) => {
	const {page} = useParams();
	const pageNum = Number(page ?? '1');

	const {data, isLoading, error} = useSWRImmutable(`search-${query}-${page}`, () => fetchSearchResult(query, pageNum));
	if (isLoading) {
		return <Loading />;
	}
	if (error) {
		return <Error />;
	}

	if (!data || data.count === 0) {
		return <Empty />;
	}

	return (
		<>
			<main>
				<Header query={query} resultCount={data.count} tookMs={data.took} />
				{data.hits.map((hit, i) => (
					<Article key={i}>{hit}</Article>
				))}
			</main>
			<Pagination page={pageNum} totalHit={data.count} hitPerPage={10} />
		</>
	);
};

export default SearchResult;
