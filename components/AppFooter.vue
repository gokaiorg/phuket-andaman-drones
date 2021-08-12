<template>

  <footer role="contentinfo"
          class="z-10 flex flex-col md:flex-row items-start w-full flex-none self-start bg-white py-4 px-8 md:items-center">

    <NavSocial/>
    <NavFooter/>

  </footer>

</template>

<script>

  import NavFooter from '~/components/NavFooter.vue'
  import NavSocial from '~/components/NavSocial.vue'

  export default {
    name: "AppFooter",
    components: {
      NavFooter,
      NavSocial
    }
  }
</script>
