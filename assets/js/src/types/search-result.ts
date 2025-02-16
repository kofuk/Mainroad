import {SearchHit} from './search-hit';

export type SearchResult = {
	took: number;
	count: number;
	hits: SearchHit[];
};
