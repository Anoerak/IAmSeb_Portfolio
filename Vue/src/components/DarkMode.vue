<script>

export default {
	name: 'DarkMode',
	methods: {
		setDark() {
			localStorage.setItem('theme', 'dark');
			document.body.classList.add('dark');
		},

		setLight() {
			localStorage.setItem('theme', 'light');
			document.body.classList.remove('dark');
		},

		toggleTheme() {
			if (localStorage.getItem('theme') === 'dark') {
				this.setLight();
			} else {
				this.setDark();
			}
		}
	},
	beforeMount() {
		const storedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (e.matches) {
				this.setDark();
			} else {
				this.setLight();
			}
		});

		if (defaultDark) {
			this.setDark();
		}

		if (!defaultDark) {
			this.setLight();
		}


	}
}
</script>
		

<template>
	<div class='toggler' v-on:click="toggleTheme"></div>
	<button class='circle'></button>
</template>


<style scoped></style>