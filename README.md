@magic-tao/clipboardcopy / [Exports](docs/modules.md)

# ClipboardCopy
A simple ClipboardCopy

## Examples

```ts
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

new ClipboardCopy().copy('This is the test copy').then(() => {
  this.$toast('复制成功～');
}).catch((e) => {
  this.$toast('请手动"拷贝"进行复制～');
});
```