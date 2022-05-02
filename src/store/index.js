import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      projects: [
          {
                name:"TOTONOU",
                number: 1,
                description:"E-Commerce Website built using Vue and Nuxt for a Vitamins company",
                full_info: "A Vue project that utilizes the organisation features of Nuxt and the database of Firebase to create a user access E-commerce site. Checkout is set up with Stripe.",
                stack:["Vue", "Nuxt", "Firebase"],
                imgA: require("@/assets/totonou-pic.jpg"),
                imgB: require("@/assets/totonou-page.jpg"),
                url:"https://totonou-project.web.app/",
                github: "https://github.com/sho25052007/totonou"
            },
            {
                name:"Boulder//Britain",
                number: 2,
                description:"A member's database to create bouldering information across the UK!",
                full_info: "It creates a community of logged in users, allowing them to view boulders on a map, create routes by uploading images and info, and finally being able to rate and comment.",
                stack:["Node", "Express", "MongoDB"],
                imgA: require("@/assets/boulderbritain-pic.jpg"),
                imgB: require("@/assets/boulderbritain-page.jpg"),
                url:"https://boulder-britain.herokuapp.com/",
                github: "https://github.com/sho25052007/boulder_britain"
            },
            {
                name:"Hiep Phat Website",
                number: 3,
                description:"Landing page for an industrial nets manufacturing company",
                full_info: "This landing page was built to client's requests, first presenting an interactive AdobeXD page and then purely made with HTML and CSS. The job included logo design, photography and video-making as well as the website development.",
                stack:["HTML", "CSS"],
                imgA: require("@/assets/hiepphat-pic.jpg"),
                imgB: require("@/assets/hiepphat-page.jpg"),
                url:"http://hiepphat-net.com/home",
                github: "https://github.com/sho25052007/hiepphat-website"
            },
            {
                name:"Creativo",
                number: 4,
                description:"Music Playlist Community where user's can share and upload images and music info to match the playlist!",
                full_info: "It's a simple app that allows user's to create playlists with lists of musics and each playlist with an accompanying image.",
                stack:["Vue3", "Firebase"],
                imgA: require("@/assets/creativo-pic.jpg"),
                imgB: require("@/assets/creativo-page.jpg"),
                url:"https://creativo-ecae0.web.app/",
                github: "https://github.com/sho25052007/creativo"
            },
            {
                name:"Listella",
                number: 5,
                description:"A clean and simple to-do app! Responsive and interactive!",
                full_info: "This to-do app is a project that utilizes design and interaction, putting user experience as the main purpose so that it's use is intuitive.",
                stack:["Vuetify", "Firebase"],
                imgA: require("@/assets/listella-pic.jpg"),
                imgB: require("@/assets/listella-page.jpg"),
                url:"https://listella.netlify.app/",
                github: "https://github.com/sho25052007/listella"
            },
        ],

      skills: [
        {
            name:"Designer / Maker",
            number: 1,
            isShow: true,
            description:"With an Industrial Design background and my current job as a CAD technician in a kitchen furniture business, I got the chance to merge my interest in digital fabrication and woodworking craft to make utilitarian furniture.",
            showcase: [
                { img: require("@/assets/skills1_A.jpg"),
                info:"Multi-faced speaker that can rotate infinitely around its own axis and allows you to interact with acoustics physically." },
                { img: require("@/assets/skills1_B.jpg"),
                info:"My graduating project of a flat-pack kitchenette that makes converting a van into a living space effortless!" },
                { img: require("@/assets/skills1_C.jpg"),
                info:"This was a client project here they wanted a 'camper-box' that will turn their day car into a weekend gateway!" },
            ],
        },
        {
            name:"Computer Aided Design",
            number: 2,
            isShow: false,
            description:"I mainly use Rhino but I have also used Sketchup and Solidworks in the past",
            showcase: [
                { img: require("@/assets/skills2_A.jpg"),
                info:"This is the CAD for the graduating project of the flat-pack kitchenette for van-life." },
                { img: require("@/assets/skills2_B.jpg"),
                info:"This is a stand-alone modular component that can be the joinery for a table or shelf - it connects a leg to a surface." },
                { img: require("@/assets/skills2_C.jpg"),
                info:"A CAD for a design competition for sustainable hotels. My concept was for a wall-integrated soap pill dispenser." },
            ],
        },
        {
            name:"Adobe Suites",
            number: 3,
            isShow: false,
            description:"I have used Adobe throughout my career, from photography(Ps), logo designs(Ai), videos(Pr) and website layouts (Xd).",
            showcase: [
                { img: require("@/assets/skills3_A.jpg"),
                info:"Logo for a lifestyle brand for a hip-hop podcaster, merchandise and event organiser." },
                { img: require("@/assets/skills3_B.jpg"),
                info:"Company logo for client's industrial net corporation." },
                { img: require("@/assets/skills3_C.jpg"),
                info:"Small online retail business logo for Vietnamese hot sauce." },
            ]
        },
    ]
  },
  getters:{
      projects: (state) => {
          return state.projects
      },
      skills: (state) => {
          return state.skills
      }
  },
})