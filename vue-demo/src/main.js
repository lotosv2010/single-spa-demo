import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueRouter from "vue-router"
import App from './App.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false;

// 路由组件
const Foo = { template: "<div>foo</div>" } 
const Bar = { template: "<div>bar</div>" }
// 路由规则
const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
]
// 路由实例
const router = new VueRouter({ routes, mode: "history", base: "/vue-demo" })

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    // 路由 
    router,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
