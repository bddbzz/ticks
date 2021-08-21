<template>
  <a-layout id="default-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['pubuliu']" @click="handleMenuClick">
        <a-menu-item key="waterfall">
          <SvgIcon type="pubuliu" />
          <span>瀑布流</span>
        </a-menu-item>
        <a-menu-item key="grid">
          <SvgIcon type="wangge" />
          <span>网格布局</span>
        </a-menu-item>
        <a-menu-item key="triangle">
          <SvgIcon type="wangge" />
          <span>三角形</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Home',
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Content.name]: Layout.Content,
    [Layout.Header.name]: Layout.Header,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const router = useRouter();
    const handleMenuClick = (e: any) => {
      router.push(e.key);
    };
    return {
      collapsed: ref<boolean>(false),
      handleMenuClick
    };
  }
});
</script>
<style lang="less">
html,
body,
#app {
  min-height: 100%;
}
#default-layout {
  min-height: 100%;
}
#default-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#default-layout .trigger:hover {
  color: #1890ff;
}

#default-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
