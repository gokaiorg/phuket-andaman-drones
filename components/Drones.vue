<template>

  <section :id="`${$t('drones.name')}`" class="bg-white pb-0 pt-8 md:pt-16 mt-16">

    <div class="container max-w-5xl mx-auto m-8">
      <h2
        data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out"
        class="w-full mb-10 text-5xl font-bold leading-tight text-center text-gray-800">
        {{ $t('drones.title') }}
      </h2>

      <div class="flex flex-col md:flex-row">

        <div class="flex flex-col w-full md:w-3/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-contain bg-no-repeat bg-center h-40 w-full p-3"
               style="background-image: url('agras-t20.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out" class="w-full p-3">
            <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('drones.tlist01') }}</h3>
            <p class="text-gray-600 mb-8">{{ $t('drones.desc01') }}
            </p>
            <a href="https://www.youtube.com/watch?v=hGyLjO7KWeU" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-3/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-contain bg-no-repeat bg-center h-40 w-full p-3"
               style="background-image: url('air-2s.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out" class="w-full p-3">
            <div class="align-middle">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('drones.tlist02') }}</h3>
              <p class="text-gray-600 mb-8">{{ $t('drones.desc02') }}
              </p>
              <a href="https://www.youtube.com/watch?v=ECwEwI9Pzto" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-3/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-contain bg-no-repeat bg-center h-40 w-full p-3"
               style="background-image: url('matrice-300-rkt.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease-in-out" class="w-full p-3">
            <div class="align-middle">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('drones.tlist03') }}</h3>
              <p class="text-gray-600 mb-8">{{ $t('drones.desc03') }}
              </p>
              <a href="https://www.youtube.com/watch?v=52q03RCFXFM" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-3/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-contain bg-no-repeat bg-center h-40 w-full p-3"
               style="background-image: url('phantom-4-rtk.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease-in-out" class="w-full p-3">
            <div class="align-middle">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('drones.tlist04') }}</h3>
              <p class="text-gray-600 mb-8">{{ $t('drones.desc04') }}
              </p>
              <a href="https://www.youtube.com/watch?v=tAuF5aZi1ic" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>

</template>

<script>
  export default {
    name: "Discover",

    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
  }
</script>
