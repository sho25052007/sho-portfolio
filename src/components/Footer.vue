<template>
    <v-footer ref='footer' paddless default class='footer' id='footer'>
        <v-container class="signature d-flex flex-column align-center">
            <div class="logo">
                <p class='logo-txt'>SHO SUZUKI PORTFOLIO {{year}}</p>
            </div>
            <div class="extra-links d-flex justify-space-evenly">
                <p class='tag mx-5'>LINK TO CV</p>
                <p class="tag">|</p>
                <p class='tag mx-5'>CODE FOR PORTFOLIO</p>
            </div>
        </v-container>
    </v-footer>
</template>
<script>
    export default {
        name: "Footer",
        components: {
        },
        computed:{
            year(){
                var d = new Date();
                return  d.getFullYear();
            }
        },
    }
</script>
<style lang="scss" scoped>
$small: 400px;
$medium: 800px;
$large: 1200px;
#footer {
    background-color:var(--dark-color);
}
.signature {
    display: block;
    padding: 0 20%;
    text-align: left;
    @media screen and (max-device-width:$small) and (orientation: portrait) {
        padding: 0 10%;
    }
}
.logo-txt{
    margin: 0.5em;
    font-weight: 600;
    font-size: 1.2vw;
    color: var(--bg-color);
    @media screen and (max-device-width:$small) and (orientation: portrait) {
        font-size: 4vw;
    }
    @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
        font-size: 1.8vw;
    }
}
.tag{
    margin: 0.5em;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--accent-color);
    @media screen and (max-device-width:$small) and (orientation: portrait) {
        font-size: 2.8vw;
    }
    @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
        font-size: 1.2vw;
    }
}
</style>