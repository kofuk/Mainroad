import React, {useState} from 'react';

import {createPortal} from 'react-dom';

import SearchResult from './search-result';
import SearchBox from './search-box';
import BackButton from './back-button';

const SearchPage = () => {
	const [query, setQuery] = useState('');
	const handleSubmit = (query: string) => {
		setQuery(query);
	};

	return (
		<>
			{query !== '' && <BackButton onClick={() => setQuery('')} />}
			<SearchResult query={query} />
			{createPortal(<SearchBox onSubmit={handleSubmit} />, document.getElementById('site_search_root')!)}
		</>
	);
};

export default SearchPage;
