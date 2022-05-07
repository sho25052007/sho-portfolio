<template>
    <v-container fluid class="about d-flex flex-column justify-center align-items-center" id="about">
        <div class="my-info">
                <h1 v-scroller="1" class="heading mb-2"><span class="paren">(about myself)</span> <span class="emph">my</span> BAC<span class="emph">K</span>GROUND <span class="paren">(is in)</span></h1>
            <v-row>
                <v-col class="col-md-5">
                    <h1 v-scroller="1.5" class="heading text-right">IND<span class="emph">U</span>STRIAL DE<span class="emph">S</span>IGN, <span class="paren">(and)</span></h1>
                </v-col>
                <v-col class="col-md-3 d-flex justify-center">
                    <v-img v-slider src="../assets/about.jpg" class="rounded-lg" fill id="solder-me"></v-img>
                </v-col>
                <v-col class="col-md-4">
                        <h1 v-scroller="2" class="heading float-left text-left"><span class="paren">(wanting to)</span> CO<span class="emph">M</span>BINE</h1>
                </v-col>
            </v-row>
                <h1 v-scroller="2.5" class="heading">DI<span class="emph">G</span>ITAL F<span class="emph">A</span>BRICATION <span class="paren">(and)</span></h1>
                <h1 v-scroller="3" class="heading ml-10">WOO<span class="emph">D</span>WORKING C<span class="emph">R</span>AFT</h1>
                <h1 v-scroller="3.5" class="heading text-right"><span class="paren">(I discovered my)</span> PASSI<span class="emph">O</span>N <span class="paren">(in)</span> PRO<span class="emph">G</span>RAMMING</h1>
        </div>
    </v-container>
</template>

<script>
import {scroller} from '../plugins/scrollObserver.js'
import {slider} from '../plugins/slideObserver.js'

export default {
    name : 'About',
    directives: {
        scroller,
        slider,
    },
}
</script>


<style lang="scss" scoped>
    $x-small: 300px;
    $small: 500px;
    $medium: 800px;
    $large: 1200px;

    .about {
        height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
        padding: 10%;
        @media screen and (min-device-width:$x-small) and (max-device-width:$small) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2){
            padding: 14%;
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            padding: 16%;
        }
    }

    .col {
        padding-top: 0;
    }

    .my-info{
        .heading {
            font-size: 4.4vw;
            color: var(--primary-color);
            line-height: 1.2;
            // margin-top: 1vh;
            // white-space: nowrap;
        }
        span.paren{
            font-size: 1.2vw;
            font-style: italic;
            color: var(--dark-accent);

        }
        span.emph{
            font-family: 'My Soul', cursive;
            color: var(--secondary-color);
        }
        @media screen and (min-device-width:$x-small) and (max-device-width:$small) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2){
            .heading {
                font-size: 8vw;
                margin-top: 1vh;
            }
            span.paren{
                font-size: 3vw;
            }
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            .heading {
                font-size: 3.4vw;
                // margin-top: 0;
            }
            span.paren{
                font-size: 1.2vw;
            }
        }
    }

    #solder-me{
        display: inline-block;
        max-width: 16vw;
        max-height: 0%;
        padding-right: auto;
        @media screen and (min-device-width:$x-small) and (max-device-width:$small) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2){
            max-width: 40vw;
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            max-width: 18vw;
        }
    }

    #solder-me.slide {
        box-sizing: border-box;
        border: 3px solid;
        color: var(--accent-color);
        max-height: 100%;
        transition: max-height 1s ease-in;
    }

    .before-enter.enter {
        opacity: 1;
        transform: translateY(0px);
        transition: 1.2s all cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    .before-enter {
        opacity: 0;
        transform: translateY(40px);
    }
</style>