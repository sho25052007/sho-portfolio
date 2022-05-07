<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <Fab id='fab'></Fab>
        <Navigation id='nav'></Navigation>

        <Banner/>
        <Portfolio/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </v-container>
</template>

<script>
    import Fab from "@/components/Fab.vue"
    import Navigation from "@/components/Navigation.vue"
    import Banner from "@/components/Banner.vue"
    import Portfolio from "@/components/Portfolio.vue"
    import About from "@/components/About.vue"
    import Skills from "@/components/Skills.vue"
    import Contact from "@/components/Contact.vue"
    import Footer from "@/components/Footer.vue"

    export default {
        name: 'Homepage',
        components: {
            Fab,
            Navigation,
            Banner,
            Portfolio,
            About,
            Skills,
            Contact,
            Footer,
        }
    }

</script>

<style scoped >
#nav{
    position: fixed;
    z-index: 50;
}
#fab{
    position: fixed;
    bottom: 0%;
    margin: 3em;
    z-index: 100;
}
</style>