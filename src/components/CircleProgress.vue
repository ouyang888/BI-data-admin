<template>
  <div>
    <!-- {{this.cav}} -->
    <canvas ref="cav" :width="size" :height="size"></canvas>


  </div>
</template>

<script>

  import circleProgress from '@/utils/circleProgress.js'

  export default {

    name: 'Progress',
   props: {
      rate: {
        type: Number,
        default:function(){
          return 0
        }
      },
      size: {
        type: Number,
        default:function(){
          return 300
        } 
      },
      circleSize: {
        type: Number,
        default: function(){
          return 300
        } 
      },
      color: {
        type: String,
        default: '#1B6FFF'
      },
      deg: {
        type: Object,
        default: function (){
          return {
          start: 120,
          end: 60
        }
      }
      },
      barSize: {
        type: Number,
        default: 10
      },
      isBackground: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        title:'123',
        cav:'',
        cavId:''

      }
    },
    mounted() {
      this.cav = this.$refs.cav;
      console.log('this.cav',this.cav,this.$props)
      if (this.cav) {
        console.log('props',this.$props)
        const goProgress = new circleProgress({
          el: this.cav,
          progress: this.$props.rate / 100,
          number: this.$props.rate,
          color: this.$props.color,
          deg: this.$props.deg,
          barSize: this.$props.barSize,
          circleSize:this.$props.circleSize,
          isBackground: this.$props.isBackground
        })
      }
    },
    watch: {
      // this.$props: {
      //   handle(newVal, old) {
      //     if (this.cav) {
      //       console.log('this.$props', this.$props)
      //       const goProgress = new circleProgress({
      //         el: this.cav,
      //         progress: this.$props.rate / 100,
      //         number: this.$props.rate,
      //         color: this.$props.color,
      //         deg: this.$props.deg,
      //         barSize: this.$props.barSize,
      //         isBackground: this.$props.isBackground
      //       })
      //     }
      //   }

      // }

    },

    methods: {




    },

  }
</script>

<style scoped>

</style>