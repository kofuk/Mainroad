import React, {useRef} from 'react';

type Props = {
	onSubmit?: (query: string) => void;
};

const SearchBox = ({onSubmit}: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit?.(ref.current?.value ?? '');
	};

	return (
		<form className="widget-search__form" role="search" onSubmit={handleSubmit}>
			<label>
				<input ref={ref} className="widget-search__field" type="search" placeholder="検索…" aria-label="検索…" />
			</label>
			<input className="widget-search__submit" type="submit" value="Search" />
		</form>
	);
};

export default SearchBox;
