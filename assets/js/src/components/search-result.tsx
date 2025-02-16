import React from 'react';

import Header from './header';
import Article from './article';
import Pagination from './pagination';
import Empty from './empty';
import {useParams} from 'react-router-dom';

type Props = {
	query: string;
};

const SearchResult = ({query}: Props) => {
	const {page} = useParams();
	const pageNum = Number(page ?? '1');

	const result = {
		took: 2,
		count: 2,
		hits: [
			{
				title: 'hoge',
				permalink: '#',
				date: 0,
				lastmod: 0,
				summary: 'fuga',
				truncated: true
			},
			{
				title: 'fuga',
				permalink: '#',
				date: 0,
				lastmod: 0,
				summary: 'hoge',
				truncated: false
			}
		]
	};

	if (result.count === 0) {
		return <Empty />;
	}

	return (
		<>
			<main>
				<Header query={query} resultCount={result.count} tookMs={result.took} />

				{result.hits.map((hit, i) => (
					<Article key={i}>{hit}</Article>
				))}
			</main>
			<Pagination page={pageNum} totalHit={result.count} hitPerPage={10} />
		</>
	);
};

export default SearchResult;
