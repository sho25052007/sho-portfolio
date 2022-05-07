<template>
    <swiper-slide class="slide">
        <v-img class="slide-image rounded-lg" :src="slide.img" cover></v-img>
        <div class="slide-info text-center">{{ slide.info }}</div>
    </swiper-slide>
</template>

<script>
import {SwiperSlide} from 'vue-awesome-swiper'
// // import swiper module styles
import 'swiper/swiper-bundle.css'

export default {
    name: 'Show',
    props: ['slide'],
    components: {
        // {SwiperSlide} from 'vue-awesome-swiper'
        SwiperSlide,
    },
}
</script>

<style lang="scss" scoped>
$x-small: 300px;
$small: 500px;
$medium: 800px;
$large: 1200px;

.slide {
    .slide-image {
        height: 60vh;
        // width: 100vw;
        box-sizing: border-box;
        border: 2px solid;
        color: var(--accent-color);
    }
    .slide-info {
        color: var(--dark-color);
        font-size: 0.8vw;
        padding: 0 5%;
        font-weight: 400;
        @media screen and (min-device-width:$x-small) and (max-device-width:$small) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2){
            font-size: 3vw;
        }
    }
}
</style>