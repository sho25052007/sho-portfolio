<template>
    <v-container fluid class="portfolio d-flex flex-column justify-center align-items-center" id="portfolio">
        <div class="projects">
            <h1 v-scroller="1" class="heading mb-2"><span class="paren">(latest)</span> PROJ<span class="emph">E</span>CTS</h1>

                    <!-- //project -->
                    <Project class="project" v-for="project in projects" :key="project.number" :project="project"/>

        </div>
    </v-container>
</template>

<script>
import Project from "@/components/Project.vue"

import {scroller} from '../plugins/scrollObserver.js'
import {slider} from '../plugins/slideObserver.js'
import {indenter} from '../plugins/indentObserver.js'

export default {
    name: 'Portfolio',
    components: {
        Project,
    },
    directives: {
        scroller,
        slider,
        indenter
    },
    computed: {
        projects: {
            get() {
                return this.$store.getters.projects
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $small: 400px;
    $medium: 800px;
    $large: 1200px;

     .portfolio {
        // height: 100vh;
        width: 100vw;
        background-color: var(--bg-color);
        padding: 5% 10%;
        @media screen and (max-device-width:$small) and (orientation: portrait) {
            padding: 7% 14%;
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            padding: 8% 16%;
        }
    }

    .col {
        padding-left: 0;
        padding-top: 0;
    }

    .projects{
        height: auto;
        .heading {
            font-size: 5vw;
            color: var(--primary-color);
            margin-top: 1vh;
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

        @media screen and (max-device-width:$small) and (orientation: portrait) {
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