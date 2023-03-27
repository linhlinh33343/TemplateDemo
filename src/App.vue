<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Sevices from "./components/Sevices.vue";
import AboutUs from "./components/AboutUs.vue";
import Blog from "./components/Blog.vue";

import OurTeam from "./components/OurTeam.vue";
export default {
  components: {
    Header,
    Footer,
    Home,
    Sevices,
    AboutUs,
    Blog,
    OurTeam,
  },
  data() {
    return {};
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
