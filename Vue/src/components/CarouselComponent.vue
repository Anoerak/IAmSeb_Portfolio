<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
	name: 'CarouselComponent',
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
		}
	},
	props: {
		medias: {
			type: Array,
			default: () => [],
		},
	},
})
</script>

<template>
	<Carousel :autoplay="10000" :wrap-around="true">
		<Slide v-for="slide in medias" :key="slide">
			<div class="carousel__item">
				<img :src="slide.path" :alt="slide.alt" />
			</div>
		</Slide>

		<template #addons>
			<Pagination />
		</template>
	</Carousel>
</template>

<style scoped>
.carousel__item {
	width: auto;
	max-width: 32rem;
	height: auto;
	max-height: 23rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-y: scroll;
}

.carousel__item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>