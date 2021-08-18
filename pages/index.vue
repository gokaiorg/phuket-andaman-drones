<template>

  <div class="w-full">

      <FrontBanner/>
      <Discover/>
      <Drones/>
      <FormContact/>

  </div>

</template>

<script>

  import FrontBanner from '~/components/FrontBanner.vue'
  import Hero from '~/components/Hero.vue'
  import Discover from '~/components/Discover.vue'
  import Drones from '~/components/Drones.vue'
  import FormContact from '~/components/FormContact.vue'

  export default {
    transition: "page",
    components: {
      Hero,
      FrontBanner,
      Discover,
      Drones,
      FormContact
    },
    metaInfo: {},
    data() {
      return {
        page: [
          {
            url: 'https://phuketandamandrones.com',
            text: 'Home',
          },
        ],
      };
    },
    jsonld() {
      const items = this.page.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.text,
        },
      }));
      return {
        '@context': 'http://schema.org',
        '@type': 'Website',
        itemListElement: items,
      };
    },
    head() {
      return {
        title: this.$i18n.t('index.metaTitle'),
        meta: [
          {hid: 'title', name: 'title', content: this.$i18n.t('index.metaTitle')},
          {hid: 'description', name: 'description', content: this.$i18n.t('index.description')},
          {hid: 'canonical', rel: 'canonical', href: this.$i18n.t('index.url')},
          {hid: 'og-type', property: 'og:type', content: 'product'},
          {hid: 'og-title', property: 'og:title', content: this.$i18n.t('index.metaTitle')},
          {hid: 'og-description', property: 'og:description', content: this.$i18n.t('index.description')},
          {hid: 'og-url', property: 'og:url', content: this.$i18n.t('index.url')},
          {hid: 'og-site_name', property: 'og:site_name', content: this.$i18n.t('sitename')},
          {hid: 'og-image', property: 'og:image', content: this.$i18n.t('index.image')},
          {hid: 'twitter-title', name: 'twitter:title', content: this.$i18n.t('index.metaTitle')},
          {hid: 'twitter-description', name: 'twitter:description', content: this.$i18n.t('index.description')},
          {hid: 'twitter:image', name: 'twitter:image', content: this.$i18n.t('index.image')},
          {hid: 'name', itemprop: 'name', content: this.$i18n.t('index.metaTitle')},
          {hid: 'description', itemprop: 'description', content: this.$i18n.t('index.description')},
          {hid: 'image', itemprop: 'image', content: this.$i18n.t('index.image')},
        ]
      }
    }
  }
</script>
