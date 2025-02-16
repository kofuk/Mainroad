import React, {StrictMode} from 'react';

import {Routes, Route, MemoryRouter} from 'react-router-dom';
import {Root, createRoot} from 'react-dom/client';
import SearchResult from './components/search-result';

document.addEventListener('DOMContentLoaded', () => {
	const mainElement = document.getElementsByTagName('main')[0];
	const mainHTML = mainElement.innerHTML;

	const pagination = document.querySelector('div.pagination');
	const paginationHTML = pagination?.innerHTML;

	let root: Root | null = null;

	document.getElementById('searchForm')!.addEventListener('submit', (event) => {
		event.preventDefault();

		const query = (document.getElementById('searchField') as HTMLInputElement).value;
		if (root) {
			root.unmount();
			root = null;
		}

		if (query === '') {
			mainElement.innerHTML = mainHTML;
			if (pagination) {
				pagination.innerHTML = paginationHTML!;
			}
			return;
		}

		mainElement.innerHTML = '';
		if (pagination) {
			pagination.innerHTML = '';
		}

		root = createRoot(mainElement);
		root.render(
			<StrictMode>
				<MemoryRouter>
					<Routes>
						<Route path="/:page?" element={<SearchResult query={query} />} />
					</Routes>
				</MemoryRouter>
			</StrictMode>
		);
	});
});
