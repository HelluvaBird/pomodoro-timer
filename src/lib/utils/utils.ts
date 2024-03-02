type BackgroundColorType = {
	[key: string]: string;
};

const bgColors: BackgroundColorType = {
	pink: 'bg-pink-400',
	blue: 'bg-sky-400',
	orange: 'bg-orange-400'
};

const progressColors: BackgroundColorType = {
	pink: 'rgb(244 114 182)',
	blue: 'rgb(56 189 248)',
	orange: 'rgb(251 146 60)'
};

export function getBackgroundColor(color: string) {
	return bgColors[color] ?? 'bg-pink-400';
}

export function getProgressColor(color: string) {
	return progressColors[color] ?? 'rgb(244 114 182)';
}
