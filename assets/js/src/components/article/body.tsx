import React from 'react';

type Props = {
	permalink: string;
	truncated: boolean;
	children: string;
};

const Body = ({permalink, truncated, children: summary}: Props) => {
	return (
		<>
			<div className="content list__excerpt post__content clearfix" dangerouslySetInnerHTML={{__html: summary}}></div>
			{truncated && (
				<div className="list__footer clearfix">
					<a className="list__footer-readmore btn" href={permalink}>
						続きを読む…
					</a>
				</div>
			)}
		</>
	);
};

export default Body;
