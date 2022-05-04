<template>
    <div class="skills-wrapper filter">
        <div class="background">
            <div class="overlay">
                <v-img class="bg-img" :src="bgImage"></v-img>
            </div>
        </div>
        <v-container
            fluid id="skills"
            class="skills unfiltered d-flex flex-column justify-center align-items-center"
            >
            <h1 v-scroller="1" class="heading mb-2">What else do I bring to the table... </h1>
            <div v-scroller="2" class="skills-name d-flex justify-space-around align-center">
                <div
                    class="skills-title"
                    v-for="skill in skills"
                    :key="skill.number"
                    :tabindex="skill.number"
                    @click="slideshow(skill.number)"
                    :class="{focused:isFocused[skill.number-1].active}">
                        <h1 class="names text-center">{{skill.name}}</h1>
                        <span class="line"></span>
                </div>
            </div>
            <h2
                v-scroller="3"
                text-center
                v-for="skill in skillShow"
                :key="skill.number"
                class="skill-description text-center"
                :class="{focused:isFocused[skill.number-1].active}">
                    {{skill.description}}
            </h2>
            <v-col class="slideshow col-md-12">
                <Skill
                    v-for="skill in skillShow"
                    :key="skill.number"
                    :skill="skill"
                />
            </v-col>
        </v-container>
    </div>
</template>


<script>
import Skill from "@/components/Skill.vue"

import {scroller} from '../plugins/scrollObserver.js'
import {slider} from '../plugins/slideObserver.js'
import {indenter} from '../plugins/indentObserver.js'

export default {
    name:"Skills",
    components: {
        Skill,
    },
    directives: {
        scroller,
        slider,
        indenter
    },
    data() {
        return {
            isFocused: [{active:true, number:1},{active:false, number:2},{active:false, number:3}],
            bgImage: require("@/assets/bg-skill.jpg"),
            noise: require("@/assets/noise.png"),
        }
    },
    computed: {
        skillShow() {
            return this.skills.filter(e => e.isShow)
        },
        skills: {
            get() {
                return this.$store.getters.skills
            }
        }
    },
    methods: {
        slideshow(index) {
            this.skills[index-1].isShow = !this.skills[index-1].isShow
            this.skills.forEach(el => {
                if (el.number == index) {
                    el.isShow = true
                } else {
                    el.isShow = false
                }
            })
            this.isFocused.forEach(status => {
                if (status.number == index) {
                    status.active = true
                } else {
                    status.active = false
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
    $small: 400px;
    $medium: 800px;
    $large: 1200px;

    .col {
        padding-left: 0;
        padding-top: 0;
    }
    .skills-wrapper {
        position: relative;
    }
    .background {
        // position: relative;
        height: 120vh;
    }
    .bg-img {
        @media screen and (max-device-width:$small) and (orientation: portrait) {
            display: none;
        }
    }
    .overlay{
        position: relative;
        display: inline-block;
        overflow: hidden;
    }
    .overlay:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url("~@/assets/noise.png") no-repeat center center fixed !important;
        z-index: 2;
    }

    .filter>* {
        -webkit-filter: grayscale(100%) blur(3px) opacity(0.4);
        filter: grayscale(100%) blur(3px) opacity(0.4);
    }
    .unfiltered {
        -webkit-filter: grayscale(0) blur(0) opacity(1);
        filter: grayscale(0) blur(0) opacity(1) !important;
    }

    .skills {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 100vw;
        // background-color: var(--bg-color);
        padding: 1% 10%;
        height: auto;
        .heading {
            font-size: 3vw;
            color: var(--primary-color);
            margin-top: 1vh;
        }
        @media screen and (max-device-width:$small) and (orientation: portrait) {
            padding: 3% 14%;
            .heading {
                font-size: 7.2vw;
                margin-top: 1vh;
            }
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            padding: 4% 16%;
            .heading {
                font-size: 3.6vw;
                // margin-top: 0;
            }
        }
    }
    .skills-title {
        cursor: pointer;
        max-width: max-content;
    }

    .skills-title {
        h1.names {
            font-weight: 300;
            font-size: 1.4vw;
            color: var(--secondary-color);
            @media screen and (max-device-width:$small) and (orientation: portrait) {
                font-size: 3vw;
            }
        }
    }

    .skills-title:hover{
        span.line {
            animation: line-grow 0.4s ease-in forwards;
        }
    }

    @keyframes line-grow {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    span.line {
        display: block;
        width: 0%;
        border-bottom: 2px solid;
        color: var(--secondary-color);
    }

    .skills-title.focused {
        h1.names {
            font-weight: 600;
            color: var(--primary-color);
            transform:translateY(-7px);
            transition: transform 1s ease;
        }
        span.line {
            color: var(--primary-color);
            animation: line-grow 0.4s ease-in forwards;
            border-bottom: 3px solid;
        }
    }

    .skill-description {
        display: none;
        color: var(--dark-color);
        font-size: 1vw;
        margin: 0.6em 0;
        @media screen and (max-device-width:$small) and (orientation: portrait) {
            font-size: 3.2vw;
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            font-size: 1.6vw;
        }
    }
    .skill-description.focused {
        display: inline-block;
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