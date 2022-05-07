<template>
  <v-app>
      <Homepage id='h' v-if="!loading" app>
      </Homepage>
      <div class="temp-bg">
        <div :class="loadAnimate ? 'overlay slide' : 'overlay'"></div>
      </div>
  </v-app>
</template>

<script>
import Homepage from '@/pages/Homepage.vue'
export default {
  name: 'App',
  components: {
      Homepage
     },
  mounted() {
    setTimeout(() => {
      this.loading = true
      this.loadAnimate = true
    },100)

    document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      setTimeout(() => {
      this.loadAnimate = false
      this.loading = false
        }, 1000)
      }
    }
  },
  data() {
      return {
          loading: true,
          loadAnimate: false
      }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=My+Soul&display=swap');
:root{
  --bg-color :#f0f0e6;
  --primary-color : #5c4634;
  --secondary-color : #6b5746;
  --dark-color : #332112;
  --accent-color:#c0b0a1;
  --primary-font : 'Nunito Sans', sans-serif;
  --secondary-font :  'My Soul', cursive;
}
.my-soul-cursive{
  font-family: 'My Soul', cursive;
}
.nunito-sans{
  font-family: 'Nunito Sans', sans-serif;
}
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  overflow:hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
body::-webkit-scrollbar {
  display: none;
}
h1, h2, h3, h4, h5, h6 {
 font-family: 'Nunito Sans', sans-serif;
 font-weight: 900;
}

/* loader animation */
.temp-bg {
  background-color: var(--bg-color);
  width: 100%;
  height: 100%;
  z-index: 5;
}
.overlay {
  background-color: var(--secondary-color);
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.overlay.slide {
  height: 0%;
  transition: height 1s ease-out;
}
</style>