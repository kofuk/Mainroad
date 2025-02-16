import React from 'react';

type Props = {
	query: string;
	resultCount: number;
	tookMs: number;
};

const Header = ({query, resultCount, tookMs: took}: Props) => {
	return (
		<header className="post__header">
			<h1>"{query}" の検索結果</h1>
			<div className="list__meta meta">
				{resultCount}件の結果 （{took / 1000} 秒）
			</div>
		</header>
	);
};

export default Header;
