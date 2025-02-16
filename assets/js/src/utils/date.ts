export const formatUnixTime = (time: number): string => {
	const date = new Date(time * 1000);
	const y = date.getFullYear().toString();
	const m = ('0' + date.getMonth() + 1).slice(-2);
	const d = ('0' + date.getDay()).slice(-2);
	return `${y}-${m}-${d}`;
};

export const formatRFC3339 = (time: number): string => {
	const date = new Date(time * 1000);
	return date.toISOString();
};
