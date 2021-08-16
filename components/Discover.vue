<template>

  <section :id="`${$t('discover.name')}`" class="bg-white py-10 pt-0 mt-16">

    <div class="container max-w-5xl mx-auto m-8">
      <h2
        data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out"
        class="w-full mb-10 text-5xl font-bold leading-tight text-center text-gray-800">{{ $t('discover.title') }}</h2>

      <div class="flex flex-col md:flex-row">

        <div class="flex flex-wrap w-full md:w-4/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-cover h-40 w-full p-3"
               style="background-image: url('discover-1.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out" class="w-full p-3">
            <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('discover.tlist01') }}</h3>
            <p class="text-gray-600 mb-8">{{ $t('discover.desc01') }}<br><br>

              <!--              <nuxt-link-->
              <!--                to="/contact"-->
              <!--                class="btn inline-block bg-white text-gray-800 bg-blue-200 font-bold rounded-full py-4 px-8 shadow-lg"-->
              <!--              >-->
              <!--                {{ $t('discover.seemore') }}-->
              <!--              </nuxt-link>-->
            </p>

          </div>
        </div>

        <div class="flex flex-wrap w-full md:w-4/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-cover h-40 w-full p-3"
               style="background-image: url('discover-1.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out" class="w-full p-3">
            <div class="align-middle">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('discover.tlist02') }}</h3>
              <p class="text-gray-600 mb-8">{{ $t('discover.desc02') }}<br><br>
                <!--                <nuxt-link-->
                <!--                  to="/contact"-->
                <!--                  class="btn inline-block bg-white text-gray-800 bg-blue-200 font-bold rounded-full py-4 px-8 shadow-lg"-->
                <!--                >-->
                <!--                  {{ $t('discover.seemore') }}-->
                <!--                </nuxt-link>-->
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap w-full md:w-4/12 md:mx-4">
          <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" class="bg-cover h-40 w-full p-3"
               style="background-image: url('discover-1.jpg')">
          </div>
          <div data-aos="fade-up" data-aos-delay="1200" data-aos-easing="ease-in-out" class="w-full p-3">
            <div class="align-middle">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-2">{{ $t('discover.tlist03') }}</h3>
              <p class="text-gray-600 mb-8">{{ $t('discover.desc03') }}<br><br>
                <!--                <nuxt-link-->
                <!--                  to="/contact"-->
                <!--                  class="btn inline-block bg-white text-gray-800 bg-blue-200 font-bold rounded-full py-4 px-8 shadow-lg"-->
                <!--                >-->
                <!--                  {{ $t('discover.seemore') }}-->
                <!--                </nuxt-link>-->
              </p>
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
