<template>
  <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center mx-auto">
    <h1 data-aos="slide-up" data-aos-easing="ease" class="my-4 text-5xl font-bold leading-tight">
      {{ $t('hero.title') }}
    </h1>
    <p data-aos="slide-up" data-aos-easing="ease" class="leading-normal w-full text-center text-2xl mb-8">
      {{ $t('hero.subtitle') }}
    </p>
    <nuxt-link
      :to="localePath('order')"
      class="mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
    >
      {{ $t('hero.button') }}
    </nuxt-link>
    <img
      src="static/banner-landing.jpg"
      alt="Residence France"
    />
  </div>
</template>

<script>
  export default {
    name: "hero"
  }
</script>

<style scoped>

</style>
