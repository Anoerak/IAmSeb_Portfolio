<script>
export default {
	name: 'TypeWriter',
	props: {
		data: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			//
		}
	},
	mounted() {
		if ((window.innerWidth > 768 && window.innerWidth < window.innerHeight) || window.innerWidth > window.innerHeight) {
			window.addEventListener('scroll', () => {
				const container = document.querySelector('.TypeWriter');
				const lines = document.querySelectorAll('.line__selector');
				let delay = 1;

				if (window.scrollY > container.offsetTop - window.innerHeight / 2) {
					lines.forEach((line) => {
						line.style.animation = `animated-text__${line.classList[0].split('__')[1]
							} 4s steps(87, end) ${delay}s 1 normal both, animated-cursor__${line.classList[0].split('__')[1]
							} 250ms steps(87, end) ${delay}s 5`;
						delay += 4;
					});
				}
			});
		}
	}
}
</script>
		
<template>
	<div className='TypeWriter'>
		<p v-for="(item, index) in data" :key="index" :class="'line__' + (index + 1) + ' line__selector'">
			{{ item.text }}
		</p>
	</div>
</template>


<style scoped>
.TypeWriter .line__1,
.TypeWriter .line__2,
.TypeWriter .line__3 {
	word-spacing: 2px;
	text-align: center;
	width: 0;
	white-space: nowrap;
	/* keep text in one line */
	overflow: hidden;
	/* hide text behind the cursor */
	border-right: 1px solid transparent;
	/* create the typewriter cursor */
}
</style>