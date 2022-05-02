<template>
  <swiper class="swiper" :options="swiperOption" id="skill">
      <Show
        v-for="slide in skill.showcase"
        :key="slide.number"
        :slide="slide"
      ></Show>
  </swiper>
</template>

<script>
import Show from "@/components/Show.vue"

import {Swiper} from 'vue-awesome-swiper'
// // import swiper module styles
import 'swiper/swiper-bundle.css'


export default {
    name: 'Skill',
    props: ['skill'],
    components: {
        // Show,
        // Swiper,
    },
    data() {
      return {
        swiperOption: {
          grabCursor: true,
          slidesPerView: 1.6,
          spaceBetween: 30,
          centeredSlides: true,
          breakpoints: {
          // when window width is >= 320px
          320: {
          slidesPerView: 0.5,
          spaceBetween: 20
          },
          // when window width is >= 840px
          840: {
          slidesPerView: 1.6,
          spaceBetween: 20
          },
        },
      }
    }
  }
}
</script>

<style>

</style>