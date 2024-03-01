type BackgroundColorType = {
	[key: string]: string;
};

const bgColors: BackgroundColorType = {
	pink: 'bg-pink-400',
	blue: 'bg-sky-400',
	orange: 'bg-orange-400'
};

export function getBackgroundColor(color: string) {
	return bgColors[color] ?? 'bg-pink-400';
}
