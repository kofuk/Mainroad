import React from 'react';

import {formatRFC3339, formatUnixTime} from '../../utils/date';

type Props = {
	permalink: string;
	date: number;
	lastmod: number;
	children: string;
};

const Header = ({permalink, date, lastmod, children: title}: Props) => {
	return (
		<header className="list__header">
			<h2 className="list__title post__title">
				<a href={permalink} rel="bookmark" dangerouslySetInnerHTML={{__html: title}}></a>
			</h2>
			<div className="list__meta meta">
				<div className="meta__item-datetime meta__item">
					<svg className="meta__icon icon icon-time" width="16" height="14" viewBox="0 0 30 28">
						<path d="M15 0C7 0 1 6 1 14s6 14 14 14 14-6 14-14S23 0 15 0zm0 25C9 25 4 20 4 14S9 3 15 3s11 5 11 11-5 11-11 11zm1-18h-2v8.4l6.8 4.4L22 18l-6-3.8V7z"></path>
					</svg>
					<time className="meta__text" dateTime={formatRFC3339(date)}>
						{formatUnixTime(date)}
					</time>
					{date !== lastmod && (
						<time className="meta__text" dateTime={formatRFC3339(date)}>
							(最終更新: {formatUnixTime(date)})
						</time>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
