<template>
  <div id="app">
    <h1 @click="handleClick">{{ name }}</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "App",
  props: ["name"],
  async mounted() {
    let toolsModule = await window.System.import("@study/tools")
    toolsModule.sharedSubject.subscribe(console.log)
  },
  methods: {
    async handleClick() {
      let toolsModule = await window.System.import("@study/tools")
      toolsModule.sayHello("vue-demo")
    }
  }
}
</script>

<style>
p {
  display: flex;
  justify-content: space-around;
}
</style>
