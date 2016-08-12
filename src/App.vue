<template>
  <div class="container">
    <div id="wrap">
      <navbar> </navbar>
      <br>
      <div class="outer">
        <div class="container">


            <component :is="currentView" transition="fade"> </component>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import About from './components/About'
export default {
  components: {
    Navbar,
    'blog': Blog,
    'about': About
  },
  data () {
    return {
      currentView: 'blog'
    }
  }

}

</script>
<style>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    background-color: #eee;
  }

  a:hover,a:link {
    text-decoration: none;
  }

  .slide-transition {
    transition: transform .5s ease;
  }

  .slide-enter {
    transform: translate3d(100%, 0, 0);
  }

  .slide-leave {
    transform: translate3d(-100%, 0, 0);
  }
  .fade-transition {
    transition: opacity 0.3s ease;
  }
  .fade-enter,
  .fade-leave {
    opacity: 0;
  }

</style>
