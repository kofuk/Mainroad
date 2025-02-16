import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import SearchResult from './components/search-result';

document.addEventListener('DOMContentLoaded', () => {
	const mainElement = document.getElementsByTagName('main')[0];

	const articles = [];
	for (let i = 0; i < mainElement.children.length; i++) {
		articles.push(mainElement.children[i]);
	}
	const pagination = document.querySelector('div.pagination');

	document.getElementById('searchForm')!.addEventListener('submit', (event) => {
		event.preventDefault();
		mainElement.innerHTML = '';
		if (pagination) {
			pagination.innerHTML = '';
		}

		const root = createRoot(mainElement);
		root.render(
			<StrictMode>
				<SearchResult query="hoge" />
			</StrictMode>
		);
	});
});
