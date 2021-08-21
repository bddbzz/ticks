<template>
  <div class="grid">
    <div v-for="(item, index) in list" :key="index">{{ item.text }}</div>
  </div>
  <br /><br />
  <div class="grid2">
    <div v-for="(item, index) in list2" :key="index">{{ item.text }}</div> </div
  ><br /><br />
  <div class="grid3">
    <div class="putao">葡萄</div>
    <div class="longxia">龙虾</div>
    <div class="yangyu">养鱼</div>
    <div class="xigua">西瓜</div>
  </div>
  <div class="grid4"> <div>1</div> <div>2</div> <div>3</div> <div>4</div> <div>5</div> <div>6</div> </div><br /><br />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'grid',
  components: {},
  setup() {
    const list = Array.from({ length: 12 }).map((_, i) => {
      return {
        text: i + 1
      };
    });
    const list2 = Array.from({ length: 24 }).map((_, i) => {
      return {
        text: i + 1
      };
    });
    return {
      list,
      list2
    };
  }
});
</script>
<style lang="less" scoped>
.grid {
  width: 1040px;
  grid-template-columns: [c1] 80px [c2] auto [c3] 100px [c4];
  grid-template-rows: [r1] 25% [r2] 100px [r3] auto [r4] 60px [r5];
  display: grid;
  > div {
    border: 1px solid #ddd;
  }
}
.grid2 {
  display: grid;
  //grid-template-columns: repeat(24, 40px [col-start]);
  grid-template-columns: repeat(auto-fill, 200px);
  width: 960px;
  > div {
    border: 1px solid #ddd;
  }
}
.grid3 {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    '葡萄 葡萄 葡萄'
    '龙虾 养鱼 养鱼'
    '龙虾 养鱼 养鱼'
    '西瓜 西瓜 西瓜';
}
.putao {
  grid-area: 葡萄;
  border: 1px solid #ddd;
}
.longxia {
  grid-area: 龙虾;
  border: 1px solid #ddd;
}
.yangyu {
  grid-area: 养鱼;
  border: 1px solid #ddd;
}
.xigua {
  grid-area: 西瓜;
  border: 1px solid #ddd;
}
.grid4 {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(300px, 2fr);
  grid-gap: 5px;
  grid-auto-rows: 50px;
  > div {
    border: 1px solid #ddd;
  }
}
</style>
