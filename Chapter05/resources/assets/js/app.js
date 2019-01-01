import "core-js/fn/object/assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

Vue.component("image-carousel", {
    template: `<div class='image-carousel'>
                <img v-bind:src="image"/>
                    <div class='controls'>
                        <carousel-control dir="left" @change-image="changeImage"></carousel-control>
                        <carousel-control dir="right" @change-image="changeImage"></carousel-control>                    
                    </div>
                </div>`,
    props: ['images'],
    data() {
        return {
            index: 1
        }
    },
    computed: {
        image() {
            return this.images[this.index];
        }
    },
    methods: {
        changeImage(val) {
            let newVal = this.index + parseInt(val);

            if (newVal < 0) {
                this.index = this.images.length -1;
            } else if (newVal === this.images.length) {
                this.index = 0;
            } else {
                this.index =newVal;
            }
        }
    },
    components: {
        'carousel-control': {
            template: `<i :class="classes" @click="clicked"></i>`,
            props: ['dir'],
            computed: {
                classes() {
                    return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
                }
            },
            methods: {
              clicked(){
                this.$emit("change-image", this.dir==='left' ? -1 : 1);
              }
            }
        }
    }
});



var app = new Vue({
  el: '#app',
  data: Object.assign(model, {
    headerImageStyle: {
      'background-image': `url(${model.images[0]})`
    },
    contracted: true,
    modalOpen: false,
    rcolor: true
  }),
  methods: {
    escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false;
      }
    },
    rColorAction(param1){
//        this.rcolor = !this.rcolor;
//        alert('method!' + this.rcolor + param1);
    }
  },
  watch: {
    modalOpen() {
      var className = 'modal-open';
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  created() {
    document.addEventListener('keyup', this.escapeKeyListener);
    
  },
  destroyed() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
});

var timerId1 = setInterval(function(){
    app.rcolor = !app.rcolor;
//    alert('method!' + app.rcolor);
}, 500);

setTimeout(function(){
    clearInterval(timerId1);
}, 2500);



//alert("created!!!! sdcsc_");