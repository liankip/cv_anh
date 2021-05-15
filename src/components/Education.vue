<template>
<div>
<section class="section">
	<div class="container">
		<h1 class="title">Kursus</h1>
    <div class="columns is-multiline is-mobile has-text-centered">
<!-- section1 -->
			<div v-for="training in trainings" v-bind:key="training.id" class="column is-3-tablet is-6-mobile">
        <img :src="training.img" /> 
				<p class="title is-6">{{ training.name }}</p>
        <p class="subtitle is-6"><span class="tag is-dark">{{training.require}}</span> - <time datetime="2016-9">{{training.dstart}}</time> - <time datetime="2019-9">{{training.dend}}</time></p>
			</div>
    </div>
		<!-- <div v-for="training in trainings" v-bind:key="training.id" class="card card-gap">
			<div class="card-content">
					<div class="content">
            <p class="title is-4">{{ training.name }}</p>
            <p class="subtitle is-6"><span class="tag is-dark">{{training.require}}</span> - <time datetime="2016-9">{{training.dstart}}</time> - <time
                datetime="2019-9">{{training.dend}}</time></p>
            <img :src="training.img" /> 
					</div>
			</div>
		</div> -->
	</div>
</section>
<section class="section">
	<div class="container">
		<h1 class="title">Pendidikan</h1>
		<hr />
		<div v-for="education in educations" v-bind:key="education.id" class="card card-gap">
			<div class="card-content">
					<div class="content">
            <p class="title is-4">{{ education.name }}</p>
            <p class="subtitle is-6">{{education.require}} - <time datetime="2016-9">{{education.dstart}}</time> - <time
                datetime="2019-9">{{education.dend}}</time></p>
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
      educations: [
        {
          id: 1,
          name: "Yayasan Pendidikan Nurhasanah",
          require: "Sekolah Dasar (SD)",
          dstart: "2001",
          dend: "2006"
        },
        {
          id: 2,
          name: "Yayasan Pendidikan Ani Idrus",
          require: "Sekolah Menengah Pertama (SMP)",
          dstart: "2007",
          dend: "2010"
        },
        {
          id: 3,
          name: "Yayasan Adlin Murni",
          require: "Sekolah Menengah Atas (SMA)",
          dstart: "2010",
          dend: "2013"
        }
      ],
			trainings: [
				{
          id: 1,
          name: "Practical Photography for Absolute Beginners: 9 Courses in 1",
          require: "Udemy",
          img: "https://udemy-certificate.s3.amazonaws.com/image/UC-4036c7c4-76e8-49f9-94c0-e47275759527.jpg",
          dstart: "2021",
          dend: "2021"
        },
        {
          id: 2,
          name: "Complete Photography : 21 Courses in 1 [Beginner to Expert]",
          require: "Udemy",
          img: "https://udemy-certificate.s3.amazonaws.com/image/UC-050b7bff-733f-4bd1-bde2-4fd6bdd85fe4.jpg",
          dstart: "2021",
          dend: "2021"
        },
        {
          id: 3,
          name: "Portrait Photography for Absolute Beginners",
          require: "Udemy",
          img: "https://udemy-certificate.s3.amazonaws.com/image/UC-ceac1039-c6f0-41d2-a69a-7e375e47a4ba.jpg",
          dstart: "2010",
          dend: "2013"
        },
				{
          id: 4,
          name: "Ultimate Adobe Photoshop CC Masterclass Basics To Advanced",
          require: "Udemy",
          img: "https://udemy-certificate.s3.amazonaws.com/image/UC-991decf2-2db6-4de8-8a17-c501969fd0af.jpg",
          dstart: "2021",
          dend: "2021"
        }
			]
    }
  }
}
</script>