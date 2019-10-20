<template>
  <div class="wrapper">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Body from '../components/Body.vue';
import Footer from '../components/Footer.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    Header,
    Body,
    Footer,
    HelloWorld
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/button.scss';
  @import '../assets/styles/header.scss';
  @import '../assets/styles/body.scss';
  @import '../assets/styles/home.scss';
  @import '../assets/styles/prices';
  @import '../assets/styles/footer.scss';
</style>
