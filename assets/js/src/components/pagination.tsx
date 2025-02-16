import React from 'react';

import {Link} from 'react-router-dom';

type Props = {
	page: number;
	totalHit: number;
	hitPerPage: number;
};

const Pagination = ({page, totalHit, hitPerPage}: Props) => {
	const totalPage = Math.ceil(totalHit / hitPerPage);
	const left = page != 1 && (
		<Link to={`/${page - 1}`} className="pagination__item pagination__item-prev btn">
			«
		</Link>
	);
	const right = page != totalPage && (
		<Link to={`/${page + 1}`} className="pagination__item pagination__item-next btn">
			»
		</Link>
	);

	return (
		<div className="pagination">
			{left}
			<span className="pagination__item pagination__item--current">
				{page}/{totalPage}
			</span>
			{right}
		</div>
	);
};

export default Pagination;
