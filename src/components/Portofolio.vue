<template>
<div>
  <section class="section">
    <div class="container">
      <div class="content is-large">
        <h1>Bulma Responsive Gallery</h1>
        <p>I was having trouble finding an example of a Bulma based gallery that wrapped.  Here is what I came up with...</p>
      </div>

      <div class="columns is-multiline">
        <div v-for="image in images" v-bind:key="image.id"  class="column is-one-quarter-desktop is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image ">
              <!-- <figure class="image is-3by2"> -->
                <!-- <img src="https://unsplash.it/300/200/?random&pic=1" alt=""> -->
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
          ims: require('@/assets/img/project-1.png'),
        },
        {
          id: 2,
          ims: require('@/assets/img/project-2.png'),
        },
        {
          id: 3,
          ims: require('@/assets/img/project-3.png')
        },
        {
          id: 4,
          ims: require('@/assets/img/project-4.png')
        },
        {
          id: 5,
          ims: require('@/assets/img/project-5.png')
        },
        {
          id: 6,
          ims: require('@/assets/img/project-6.png')
        }
      ]
    }
  }
}
</script>