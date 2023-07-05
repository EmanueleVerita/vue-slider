

//console.log(slides);


const {createApp} = Vue;

const app = createApp ({

    data() {

        return{
            activeSlide: 0,
            autoPlay: null,

            const: slides = [
                {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
        }

    },
    methods: {
        changeSlide(index){

            this.activeSlide= index;
        },
        next(){
            this.activeSlide++;
            if(this.activeSlide > this.slides.lengh -1){
                this.activeSlide = 0;
            }
        },
         prev(){
            this.activeSlide--;
            if(this.activeSlide < 0){
                this.activeSlide = this.slides.lengh - 1;
            }
         },
         autoScroll(){
            this.autoPlay = setInterval (() => {
                this.next()
            }, 3000);
         },
         stopAutoScroll(){
            clearInterval(this.autoPlay)
            this.autoPlay = null;
         }
    },
    created(){
        this.autoScroll();
    },

}) .moount('#app');