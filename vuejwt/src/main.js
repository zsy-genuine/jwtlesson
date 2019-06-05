import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
//全局前置守卫  导航触发时候调用  如果使用了这个钩子必须调用next方法才会继续往下执行  to到哪去  from从哪来
router.beforeEach(async (to, from, next) => {
  // console.log(to.name, from.name);
  // console.log(to.path, from.path);
  // console.log(to, from);
  // store.dispatch("valilogin");
  let islogin = await store.dispatch("valilogin");
  console.log(islogin);
  if (islogin) {
    //已经登录了
    if (to.name == "login") {
      //并且是登录页 ，就跳转到首页
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});
