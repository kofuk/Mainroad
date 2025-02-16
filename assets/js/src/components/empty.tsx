import React from 'react';

const Empty = () => {
	return (
		<div className="warning">
			<h1 className="warning__headline">検索結果がありません</h1>
			<p className="warning__text">違うキーワードで検索してみてください。</p>
		</div>
	);
};

export default Empty;
