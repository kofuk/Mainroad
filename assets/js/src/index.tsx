import React, {StrictMode} from 'react';

import {Routes, Route, MemoryRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import SearchPage from './components/search-page';

const root = createRoot(document.getElementById('search_result_root')!);
root.render(
	<StrictMode>
		<MemoryRouter>
			<Routes>
				<Route path="/:page?" element={<SearchPage />} />
			</Routes>
		</MemoryRouter>
	</StrictMode>
);
