import React from 'react';

type Props = {
	onClick?: () => void;
};

const BackButton = ({onClick}: Props) => {
	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault();
		onClick?.();
	};

	return (
		<a href="#" onClick={handleClick} className="search__back_button">
			« 戻る
		</a>
	);
};

export default BackButton;
