<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions(["getCategoryList"]),
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style></style>
