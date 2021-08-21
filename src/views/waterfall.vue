<template>
  <h2>竖向瀑布流:grid</h2>
  <div class="waterfall">
    <div v-for="(item, index) in list" :style="{ 'grid-row': 'auto / span ' + Math.round(item.h / 20) }" :key="index"><img :src="item.url" :alt="item.text" /></div>
  </div>
  <h2>竖向瀑布流:flex</h2>
  <div class="waterfall2">
    <div v-for="(item, index) in list" :key="index"><img :src="item.url" :alt="item.text" /></div>
  </div>
  <h2>竖向瀑布流:multi column</h2>
  <div class="waterfall3">
    <div v-for="(item, index) in list" :key="index"><img :src="item.url" :alt="item.text" /></div>
  </div>
  <h2>横向瀑布流：</h2>
  <div class="waterfall4">
    <div v-for="(item, index) in list" :key="index"><img :src="item.url" :alt="item.text" /></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Random } from 'mockjs';
export default defineComponent({
  name: 'waterfall',
  components: {},
  setup() {
    const list = Array.from({ length: 50 }).map(() => {
      const h = 200 + ~~(Math.random() * 400);
      return {
        text: `200x${h}`,
        url: Random.dataImage(`200x${h}`, `200x${h}`),
        h
      };
    });
    return {
      list
    };
  }
});
</script>
<style lang="less" scoped>
.waterfall {
  width: 1040px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(autofill, auto);
  grid-auto-flow: row dense;
  grid-auto-rows: 20px;
  img {
    vertical-align: top;
    margin-top: 10px;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  }
}
.waterfall2 {
  width: 620px;
  height: 700vh;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  > div {
    display: block;
    margin: 5px;
    object-fit: none;
  }
}
.waterfall3 {
  column-count: 5;
  column-width: 200px;
  width: 1040px;
  column-gap: 10px;
  img {
    display: block;
    margin-top: 10px;
  }
  div {
    width: 200px;
    overflow: hidden;
    break-inside: avoid;
  }
}
</style>
