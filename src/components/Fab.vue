<template>
    <div id="fab">
        <v-btn fab dark small color="primary" elevation="6" @click="open" id="extra-icon" :class="{'open': expand}">
            <font-awesome-icon icon="fas fa-plus"/>
        </v-btn>
        <div class="expanded-card" :class="{'expanded-card open': expand}">
            <div id="cv-link">
                <font-awesome-layers class="icon-group fa-2x">
                    <v-list-item id="cv-clickable" :href="extras.cvLink" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-circle"  transform="grow-2" id="cv-icon-circle" />
                    <font-awesome-icon icon="fas fa-code-branch"  transform="shrink-8" id="cv-icon"/>
                    <font-awesome-layers-text transform="right-26 shrink-8" value="CV Link" id="cv-icon-text"/>
                </v-list-item>
                </font-awesome-layers>
            </div>
            <div id="code-link">
                <font-awesome-layers class="icon-group fa-2x">
                    <v-list-item id="code-clickable" :href="extras.codeLink" target="_blank">
                        <font-awesome-icon icon="fa-solid fa-circle" transform="grow-2" id="code-icon-circle" />
                        <font-awesome-icon icon="fas fa-code"  transform="left-2 shrink-9" id="code-icon"/>
                        <font-awesome-layers-text transform="right-30 shrink-8" value="Site Code" id="code-icon-text"/>
                    </v-list-item>
                </font-awesome-layers>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

export default({
    data(){
        return{
            expand: false,
        }
    },
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'font-awesome-layers': FontAwesomeLayers,
        'font-awesome-layers-text': FontAwesomeLayersText
    },
    methods: {
        open() {
            this.expand = !this.expand
        }
    },
    computed: {
        extras: {
            get() {
                return this.$store.getters.extras
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    #fab{
        .v-list-item:hover {
            color: transparent;
        }
    }

    #fab{
        position: relative;
        #extra-icon {
            z-index: 20;
            cursor: pointer;
        }
        .expanded-card {
            // display: none;
            position: absolute;
            bottom: -85%;
            opacity: 0;
        }
        #code-clickable, #cv-clickable{
            display: none;
        }
        #cv-icon-text, #code-icon-text{
            display: none;
            color: var(--secondary-color);
            white-space: nowrap;
            font-weight: 400;
        }
        #cv-icon-circle, #code-icon-circle{
            color: var(--accent-color);
        }
        #cv-icon, #code-icon{
            color: var(--primary-color);
        }
        #cv-link .icon-group{
            margin-bottom: 0.6em;
            margin-left: 0.03em;
        }
        #code-link .icon-group{
            margin-bottom: 0.85em;
            margin-left: 0.03em;
        }
    }

    #fab{
        .expanded-card.open {
            // display: block;
            bottom: 100%;
            // overflow: hidden;
            opacity: 1;
            transition: all 1s ease-out;
            #code-clickable, #cv-clickable{
            display: block;
            padding-top: 1em;
            margin:0.1em;
        }
        #cv-link, #code-link {
                z-index: 5;
                cursor: pointer;
            }
        }
        #extra-icon.open{
            transform: rotate(45deg);
            transition: all 1s ease-out;
        }
    }

    .expanded-card {
            #cv-link:hover {
                #cv-icon-text{
                    display: block;
                }
                #cv-icon{
                    color: white;
                }
            }
            #code-link:hover {
                #code-icon-text{
                    display: block;
                }
                #code-icon{
                    color: white;
                }
            }
        }
</style>