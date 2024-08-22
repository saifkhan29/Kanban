<template>
  <div class="app-container">
    <Sidebar/>

    <div class="container">
      <Navbar/>
      <Column/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Column from './components/Column.vue';

export default {
  components: {
    Sidebar,
    Navbar,
    Column
  }
};
</script>