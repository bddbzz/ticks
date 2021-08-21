import { createFromIconfontCN } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2630389_fwbvm0etgbh.js'
});

export default defineComponent({
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => <MyIcon type={'icon-' + props.type} />;
  }
});
