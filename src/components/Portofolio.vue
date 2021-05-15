<template>
<div>
  <section class="section">
    <div class="container">
      <div class="content">
        <h1>Portofolio</h1>
      </div>

      <div class="columns is-multiline">
        <div v-for="image in images" v-bind:key="image.id"  class="column is-one-quarter-desktop is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image ">
                <img :src="image.ims" :key="image.id" alt="">
              </figure>
            </div>
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
      images: [
        {
          id: 1,
          ims: require('@/assets/img/2.jpg'),
        },
        {
          id: 2,
          ims: require('@/assets/img/project-2.png'),
        },
        {
          id: 3,
          ims: require('@/assets/img/10.jpg')
        },
        {
          id: 4,
          ims: require('@/assets/img/LC 6.jpg')
        },
        {
          id: 5,
          ims: require('@/assets/img/project-5.png')
        },
        {
          id: 6,
          ims: require('@/assets/img/project-6.png')
        },
        {
          id: 7,
          ims: require('@/assets/img/6236.jpg')
        },
        {
          id: 8,
          ims: require('@/assets/img/1.jpg')
        },
        {
          id: 9,
          ims: require('@/assets/img/22.jpg')
        },
        {
          id: 10,
          ims: require('@/assets/img/human interest 2.jpg')
        },
        {
          id: 11,
          ims: require('@/assets/img/8.jpg')
        },
        {
          id: 12,
          ims: require('@/assets/img/rollways.jpg')
        },
        {
          id: 13,
          ims: require('@/assets/img/4046.jpg')
        },
        {
          id: 14,
          ims: require('@/assets/img/4.jpg')
        },
        {
          id: 15,
          ims: require('@/assets/img/7.jpg')
        },
        {
          id: 16,
          ims: require('@/assets/img/9.jpg')
        }
      ]
    }
  }
}
</script>