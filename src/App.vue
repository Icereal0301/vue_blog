<template>
  <div class="container1">
    <div id="wrap">
      <navbar> </navbar>
      <br>
      <div class="outer">
        <div class="container">
          <div class="row">
            <blog v-if="$route.path === '/'" transition="slide"></blog>
            <about v-if="$route.path === '/about'" transition="slide"></about>
            <sidebar> </sidebar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import About from './components/About'
import Sidebar from './components/Sidebar'
export default {
  components: {
    Navbar,
    Blog,
    About,
    Sidebar
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
</style>
