import React from 'react';

import Header from './header';
import Body from './body';
import type {SearchHit} from '../../types/search-hit';

type Props = {
	children: SearchHit;
};

const Article = ({children: hit}: Props) => {
	return (
		<article className="list__item post">
			<Header permalink={hit.permalink} date={hit.date} lastmod={hit.lastmod}>
				{hit.title}
			</Header>
			<Body permalink={hit.permalink} truncated={hit.truncated}>
				{hit.summary}
			</Body>
		</article>
	);
};

export default Article;
