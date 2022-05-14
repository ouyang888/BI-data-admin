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
        default: function () {
          return 0
        }
      },
      size: {
        type: Number,
        default: function () {
          return 300
        }
      },
      circleSize: {
        type: Number,
        default: function () {
          return 300
        }
      },
      color: {
        type: String,
        default: '#1B6FFF'
      },
      deg: {
        type: Object,
        default: function () {
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
        title: '123',
        cav: '',
        cavId: ''

      }
    },
    mounted() {
      this.cav = this.$refs.cav;
      // console.log('this.cav',this.cav,this.$props) 
      if (this.cav) {
        const goProgress = new circleProgress({
          el: this.cav,
          progress: this.$props.rate / 200,
          number: this.$props.rate,
          color: this.$props.color,
          deg: this.$props.deg,
          barSize: this.$props.barSize,
          circleSize: this.$props.circleSize,
          isBackground: this.$props.isBackground
        })
      }



    },
    watch: {
      rate: {
        handler: function (newValue, oldValue) {
          const goProgress = new circleProgress({
            el: this.cav,
            progress: newValue / 200,
            number: newValue,
            color: this.$props.color,
            deg: this.$props.deg,
            barSize: this.$props.barSize,
            circleSize: this.$props.circleSize,
            isBackground: this.$props.isBackground
          })
        }
      },
    },

    methods: {




    },

  }
</script>

<style scoped>

</style>