<template>
    <v-container fluid class="banner d-flex flex-column justify-center align-items-center">
          <div class="intro">
                    <v-col class="col-md-4 offset-2">
                        <h1 v-scroller="1" class="heading"> I <span class="paren">(SHO SUZUKI)</span> M<span class="emph">A</span>KE</h1>
                    </v-col>
                <v-row>
                    <v-col class="col-md-6 mb-4">
                        <v-img v-slider src="../assets/portrait.jpg" class="float-right rounded-lg" fill id="portrait"></v-img>
                    </v-col>
                    <v-col class="col-md-6 text-left d-flex flex-column justify-end">
                        <h1 v-scroller="1.5" class="heading">WEBSIT<span class="emph">E</span>S <span class="paren">(and)</span></h1>
                        <h1 v-scroller="2" class="heading">FURNIT<span class="emph">U</span>RES, <span class="paren">(with)</span></h1>
                    </v-col>
                </v-row>
                <v-row class="mt-0">
                    <v-col class="col-md-6 offset-md-2 offset-sm-1 text-left">
                        <h1 v-scroller="2.5" class="heading text-right">PEO<span class="emph">P</span>LE <span class="paren">(in mind)</span></h1>
                        <h1 v-scroller="3" class="heading"><span class="paren">(hence)</span> UTILI<span class="emph">T</span>ARIAN</h1>
                        <h1 v-scroller="3.5" class="heading"><span class="paren">(and)</span> SI<span class="emph">M</span>PLE</h1>
                    </v-col>
                </v-row>
          </div>
    </v-container>
</template>


<script>
import {scroller} from '../plugins/scrollObserver.js'
import {slider} from '../plugins/slideObserver.js'

export default {
    name: "Banner",
    directives: {
        scroller,
        slider,
    },
}
</script>


<style lang="scss" scoped>
    $small: 400px;
    $medium: 800px;
    $large: 1200px;

     .banner {
        height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
        padding: 10%;
        @media screen and (max-width:$small) and (orientation: portrait) {
            padding: 14%;
        }
        @media screen and (min-width:$medium) and (max-width:$large) and (orientation: landscape) {
            padding: 16%;
        }
    }

    .col {
        padding-top: 0;
    }

    .intro{
        .heading {
            font-size: 4.6vw;
            color: var(--primary-color);
            line-height: 1.2;
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
        @media screen and (max-width:$small) and (orientation: portrait) {
            .heading {
                font-size: 8vw;
                margin-top: 1vh;
            }
            span.paren{
                font-size: 4vw;
            }
        }
        @media screen and (min-width:$medium) and (max-width:$large) and (orientation: landscape) {
            .heading {
                font-size: 3.4vw;
                margin-top: 0;
            }
            span.paren{
                font-size: 1.2vw;
            }
        }
    }

    #portrait{
        display: inline-block;
        max-width: 12vw;
        max-height: 0%;
        @media screen and (max-width:$small) and (orientation: portrait) {
            max-width: 40vw;
            margin-top: 2vh;
        }
        @media screen and (min-width:$medium) and (max-width:$large) and (orientation: landscape) {
            max-width: 12vw;
        }
    }

    #portrait.slide {
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