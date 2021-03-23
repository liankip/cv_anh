<template>
<div>
  <section class="section">
    <div class="container">
      <h1 class="title">Pengalaman Kerja</h1>
      <hr />
      <div v-for="experience in experiences" v-bind:key="experience.id" class="card card-gap">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img v-bind:src="experience.ims" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ experience.name }}</p>
              <p class="subtitle is-6"><time datetime="2018-1">{{experience.dstart}}</time> - <time
                  datetime="2019-9">{{experience.dend}}</time> </p>
            </div>
          </div>
          <div class="content">
            <p>{{ experience.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          name: "PT Asuransi Jiwa Adisarana WanaArtha",
          ims: require('@/assets/img/wanarthalife.png'),
          job: "Sebagai office boy",
          dstart: "2014",
          dend: "2014"
        },
        {
          id: 2,
          name: "WIGO",
          ims: require('@/assets/img/wigo.png'),
          job: "Sebagai direct sales executive (DSE)",
          dstart: "2014",
          dend: "2016"
        },
        {
          id: 3,
          name: "HOTEL MIYANA",
          ims: require('@/assets/img/miyana.png'),
          job: "Sebagai Steward, Waiters, Banquet, Bartender",
          dstart: "2017",
          dend: "2018"
        },
        {
          id: 4,
          name: "PT. ARVIN INTI JAYA",
          ims: require('@/assets/img/arwin.png'),
          job: "Sebagai Admin Gudang",
          dstart: "2018",
          dend: "2021"
        },
        {
          id: 5,
          name: "Freelance Photographer",
          ims: require('@/assets/img/real.png'),
          job: "Sebagi Photographer",
          dstart: "2019",
          dend: "2021"
        }
      ]
    }
  }
}
</script>