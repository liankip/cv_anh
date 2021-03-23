<template>
<div>
  <section class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <figure class="image is-128x128">
              <img class="is-rounded" src="../assets/anh.jpg">
            </figure>
          </div>
        </div>
        <div class="columns has-text-centered">
          <div class="column">
            <h1 class="title is-1 has-text-primary">
              Agung Nizam Hawari
            </h1>
            <h2 class="subtitle">
              Photografer
            </h2>
            <p>
              <a href="docs/resume.txt" class="icon has-text-light">
                <i class="fas fa-file-word"></i> <strong>Resume</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h1 class="title">About Me</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
    </div>
  </section>

  <experience />
  <portofolio />
  <education />
</div>
</template>

<script lang="ts">
import Experience from './Experience.vue';
import Portofolio from './Portofolio.vue';
import Education from './Education.vue';

export default {
    name:'Lander',
    components:{
      Experience,
      Portofolio,
      Education
    }
}
</script>

<style lang="css" scoped>

</style>