<template>

  <header role="banner" class="fixed flex flex-row items-center w-full z-10 bg-white shadow-lg">

    <Logo/>
    <NavMain/>

  </header>

</template>

<script>
  import Logo from '~/components/Logo.vue'
  import NavMain from '~/components/NavMain.vue'

  export default {
    name: "AppHeader",
    components: {
      Logo,
      NavMain
    }
  }
</script>
