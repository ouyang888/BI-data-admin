<template>
  <el-select :popper-append-to-body="false" v-model="currentTime"  @change="changeDate">
    <el-option v-for="(item, index) in timeOptions" :key="index" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<script>

export default {
  name: 'selectTime',
  data() {
    return {
      currentTime: 0,
      timeOptions: [
        { value: 15, label: "近15天" },
        { value: 30, label: "近30天" },
        { value: 0, label: "本月" }
      ],
    }
  },
  methods: {
    changeDate(val) { /*echart切换时间*/
      if(val>0){
      let dd = new Date();
      dd.setDate(dd.getDate() - val);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 >= 10 ? dd.getMonth() + 1 : '0' + (dd.getMonth() + 1);
      var d = dd.getDate() >= 10 ? dd.getDate() : '0' + dd.getDate();

      let ondd = new Date();
      var ony = ondd.getFullYear();
      var onm = ondd.getMonth() + 1 >= 10 ? ondd.getMonth() + 1 : '0' + (ondd.getMonth() + 1);
      var ond = ondd.getDate() >= 10 ? ondd.getDate() : '0' + ondd.getDate();

      let start_date = `${y}-${m}-${d}`;
      let end_date = `${ony}-${onm}-${ond}`;
      this.$emit('changeDate', start_date, end_date);
    }else{
      let ontime = this.$store.state.year +'-'+ this.$store.state.month;
      let start_date =`${ontime}-01`;
      let end_date =`${ontime}-${this.$store.state.endDay}`;
      this.$emit('changeDate', start_date, end_date);
    }
    },

  },

}
</script>

<style scoped>
</style>