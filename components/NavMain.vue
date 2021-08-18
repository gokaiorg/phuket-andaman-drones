<template>

  <nav role="navigation">
    <div
      :class="open ? 'block': 'hidden'"
      class="
        absolute
        top-100
        left-0
        md:relative
        w-full
        flex-grow
        lg:flex
        lg:items-center
        lg:w-auto
        bg-white"
      id="nav-content">
      <ul class="list-reset mt-8 md:mt-0 lg:flex justify-end flex-1 items-center">
        <li data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease" data-aos-offset="0" class="ml-4 md:ml-0 mr-10">
          <a
            :href="`${$t('discover.anchor')}`">
            {{ $t('discover.title') }}
          </a>
        </li>
        <li data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease" data-aos-offset="0" class="ml-4 md:ml-0 mr-10">
          <a
            :href="`${$t('drones.anchor')}`">
            {{ $t('drones.title') }}
          </a>
        </li>
        <li data-aos="fade-left" data-aos-delay="1000" data-aos-easing="ease" data-aos-offset="0" class="ml-4 md:ml-0 mr-10">
          <a
            :href="`${$t('contact.anchor')}`"
          >
            {{ $t('contact.title') }}
          </a>
        </li>
        <li data-aos="fade-left" data-aos-delay="1200" data-aos-easing="ease" data-aos-offset="0" >

          <nuxt-link
            v-for="locale in $i18n.locales"
            v-if="locale.code !== $i18n.locale"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="btn-white"
          >
             <span
               class="text-gray-400"
               v-for="locale in $i18n.locales"
               v-if="locale.code === $i18n.locale"
             >
            {{ locale.name }} -
          </span>
            {{ locale.name }}
          </nuxt-link>
        </li>

      </ul>

    </div>
    <div class="block lg:hidden">
      <button
        @click="toggle"
        id="nav-toggle"
        class="p-4 outline-none bg-white">
        <svg class="text-black h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
  </nav>

</template>

<script>

  export default {
    name: "NavMain",
    methods: {
      toggle() {
        this.open = !this.open
      },
      changeLocale(locale) {
        this.$i18n.setLocaleCookie(locale)
        this.$router.push(this.switchLocalePath(locale))
      }
    },
    data() {
      return {
        seen: true,
        open: false,
      }
    }
  }
</script>
