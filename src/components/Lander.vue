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
              Photographer
            </h2>
            <div class="tags are-large is-centered">
              <span class="tag is-dark">
                <a href="https://wa.me/6281362056296?text=Haloo%20Agung,%20saya%20sangat%20suka%20dengan%20cv%20dan%20portofoliomu">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </span>
              <span class="tag is-dark"><i class="fa fa-instagram" aria-hidden="true"></i></span>
              <span class="tag is-dark"><i class="fa fa-facebook" aria-hidden="true"></i></span>
              <span class="tag is-dark">
                <a href="mailto:nizaemmaru@gmail.com">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h1 class="title">Tentang Saya</h1>
      <hr />
      <p class="is-size-3">Haloo, perkenalkan nama saya agung nizam hawari biasa dipanggil agung dan saya adalah freelance photographer, tidak lupa juga saya suka melakukan perjalanan jauh, berfoto di alam terbuka di daerah pegunangan dan bersepeda. <span class="has-text-success">dan jangan malu untuk dengan chat dengan saya langsung klik tombol diatas dan pilih satu.</span></p>
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