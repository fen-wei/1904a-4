<template>
    <div>
         <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
     <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
</van-dropdown-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'a',
      option1: [
        { text: '分类', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '筛选', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  }
};
</script>
<style scoped>
  .sssv{
      
  }
</style>