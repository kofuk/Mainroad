import React from 'react';

type Props = {
	page: number;
	totalHit: number;
	hitPerPage: number;
	onClickNext: () => void;
	onClickPrev: () => void;
};

const Pagination = ({page, totalHit, hitPerPage, onClickNext, onClickPrev}: Props) => {
	const totalPage = Math.ceil(totalHit / hitPerPage);
	const left = page != 1 && (
		<a href="#" className="pagination__item pagination__item-prev btn" onClick={() => onClickPrev()}>
			«
		</a>
	);
	const right = page != totalPage && (
		<a href="#" className="pagination__item pagination__item-next btn" onClick={() => onClickNext()}>
			»
		</a>
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
