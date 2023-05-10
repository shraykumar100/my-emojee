export function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName;
}

export function keepTheme() {
	const theme = localStorage.getItem("theme");
	if (theme) {
		setTheme(theme);
	} else {
		const doesUserPreferDarkMode = window.matchMedia([
			"(prefers-color-scheme: dark)",
		]).matches;

		if (doesUserPreferDarkMode) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}
}
