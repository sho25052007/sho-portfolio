<template>
    <v-container fluid class="project">
        <v-row class="d-flex">
            <!-- left space -->
            <v-col class="space col-md-4"></v-col>
            <!-- center space for project image and hover details-->
            <v-col class="col-md-4">
                <div class="project-info d-flex align-start justify-end">
                    <div class="details d-flex flex-column justify-space-between">
                        <h3 class="detail-text text-right">{{ project.full_info }}</h3>
                        <div class="tech-stack text-right d-flex flex-column">
                            <h2 class="sub-title">TECH STACK</h2>
                            <h3 v-for="(stack, index) in project.stack" :key="index" class="sub-text">{{ stack }}</h3>
                        </div>
                    </div>
                    <v-img v-slider :src="project.imgB" class="project-pic-front rounded-lg" fill></v-img>
                    <v-img v-slider :src="project.imgA" class="project-pic-back rounded-lg" fill></v-img>
                    <div class="cover"></div>
                </div>
            </v-col>
            <!-- right space for title and brief -->
            <v-col class="col-md-4 d-flex flex-column justify-end">
                <h2 v-scroller="2" class="title px-2">{{ project.name }}</h2>
                <div class="project-title mt-3 d-flex justify-space-between align-end">
                    <h3 v-scroller="3" class="paragraph px-2">{{ project.description }}</h3>
                    <div class="action-btn d-flex">
                        <div v-scroller="3" class="git-action mr-3">
                            <div class="d-flex justify-center align-items-end">
                                <v-list-item class="link-item" :href="project.github" target="_blank">
                                    <h3 class="git-heading mr-1">CODE</h3>
                                </v-list-item>
                                <font-awesome-icon icon="fas fa-code" id="code-icon"/>
                            </div>
                            <span class="line"></span>
                        </div>
                        <div v-scroller="3" class="view-action mr-3">
                            <div class="d-flex justify-center align-items-end">
                                <v-list-item class="link-item" :href="project.url" target="_blank">
                                    <h3 class="view-heading mr-1">VIEW</h3>
                                </v-list-item>
                                <font-awesome-icon icon="fas fa-eye" id="view-icon"/>
                            </div>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-col class="col-md-8 offset-md-4 mt-2 px-0">
            <span v-indenter="1" class="border"></span>
        </v-col>
    </v-container>
</template>

<script>
import {scroller} from '../plugins/scrollObserver.js'
import {slider} from '../plugins/slideObserver.js'
import {indenter} from '../plugins/indentObserver.js'

export default {
    name: 'Project',
    directives: {
        scroller,
        slider,
        indenter
    },
    props: ['project']
}
</script>

<style lang="scss" scoped>
    $small: 500px;
    $medium: 800px;
    $large: 1200px;

    .col {
            padding: 0;
            padding-bottom: 12px;
        }
    .project {
        padding: 5vh 0;
        h2.title{
            font-size: 3vw !important;
            font-weight: 400;
            color: var(--primary-color);
            letter-spacing: -0.15rem !important;
        }
        h3.paragraph{
            font-size: 1vw !important;
            font-weight: 300;
            color: var(--secondary-color);
            margin-left: 0.1vw;
            // letter-spacing: -0.2rem !important;
        }

        @media screen and (max-device-width:$small) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2){
            h2.title{
                font-size: 10vw !important;
                letter-spacing: 0rem !important;
            }
            h3.paragraph{
                font-size: 4vw !important;
            }
        }
        @media screen and (min-device-width:$medium) and (max-device-width:$large) and (orientation: landscape) {
            h2.title{
                font-size: 4vw !important;
                letter-spacing: 0rem !important;
            }
            h3.paragraph{
                font-size: 1.6vw !important;
            }
        }
    }

    #view-icon, #code-icon {
        font-size: 0.8em;
        color: var(--secondary-color);
        padding-top: 0.1em;
    }

    .link-item {
        padding: 0 !important;
        min-height: 0 !important;
    }

    span.line {
        display: block;
        width: 0%;
        border-bottom: 2px solid;
        color: var(--primary-color);
    }

    .view-action:hover, .git-action:hover {
        #view-icon, #code-icon {
            // animation-delay: 5s;
            animation: bounce 1s ease infinite;
        }
        span.line {
            animation: line-grow 0.4s ease-in forwards;
        }
    }

    @keyframes bounce {
        20% { transform:translateY(0px); }
        40% { transform:translateY(-5px); }
        60% { transform:translateY(0); }
        80% { transform:translateY(-3px); }
        100% { transform:translateY(0); }
    }

    @keyframes line-grow {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    .view-action, .git-action {
        padding-top: 0.1em;
        cursor: pointer;
    }

    h3.view-heading, h3.git-heading {
        font-size: 0.7em;
        color: var(--secondary-color);
    }


    span.border {
        display: block;
        width: 0%;
        border-bottom: 2px solid;
        color: var(--primary-color);
    }

    span.border.indent {
        width: 100%;
        transition: width 1.2s ease-in;
    }

    .project-info {
        display: inline-block;
        position: relative;
        max-width: 100%;
        height: 40vh;
        cursor: pointer;

        .cover {
            background: var(--bg-color);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            height: 100%;
            width: 100%;
        }
    }

    .project-pic-back {
        z-index: 10;
        height: 0%;
        box-sizing: border-box;
        border: 2px solid;
        color: var(--primary-color);

        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }

    .project-pic-back.slide, .project-pic-front.slide  {
        height: 100%;
        transition: height 1s ease-in;
    }

    .project-pic-front {
        box-sizing: border-box;
        border: 2px solid;
        color: var(--primary-color);
        // display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 15;
        opacity: 0;
    }


    @media screen and (min-device-width:$large) {
        .project-info:hover {
            .project-pic-front {
                opacity: 1;
                // display: inline-block;
                transition: all 0.25s ease-out;
            }
            .details {
                transform: translate(-105%);
                transition: all 1s ease-out;
            }
        }
    }

    .details {
        position: absolute;
        height: 38vh;
        width: 100%;
        margin-top: 1vh;
        transform: translate(0%);
    }

    .details h3.detail-text {
        font-size: 1em;
        font-weight: 300;
        color: var(--secondary-color);
    }

    .details h2.sub-title {
        font-size: 0.7em;
        color: var(--secondary-color);
    }

    .details h3.sub-text {
        font-weight: 300;
        font-size: 0.7em;
        color: var(--secondary-color);
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