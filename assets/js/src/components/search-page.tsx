import React, {useState} from 'react';

import {createPortal} from 'react-dom';

import SearchResult from './search-result';
import SearchBox from './search-box';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const handleSubmit = (query: string) => {
		setQuery(query);
	};

	return (
		<>
			<SearchResult query={query} />
			{createPortal(<SearchBox onSubmit={handleSubmit} />, document.getElementById('site_search_root')!)}
		</>
	);
};

export default SearchPage;
