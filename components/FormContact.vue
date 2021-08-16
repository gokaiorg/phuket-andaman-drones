<template>
  <section id="contact" class="m-auto md:my-24 p-10 bg-gray-800 text-white sm:w-9/12">
    <h2 data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out" class="w-full mb-10 text-5xl font-bold leading-tight text-center text-white aos-init aos-animate">
      {{ $t('contact.title') }}
    </h2>
    <div class="w-full w-full px-4">
      <div class="text-black">
        <h3 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease" class="py-4 text-white text-xl text-center">{{ $t('contact.intro') }}</h3>
        <form action="https://formspree.io/jeremydouchamps@gmail.com" method="POST" target="_blank">
          <div data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease" class="flex flex-col md:flex-row mb-8">
            <label for="contact-name" class="inline-block align-top min-w-label w-2/12 text-bold text-white">{{ $t('contact.name') }}</label>
            <input id="contact-name" type="text" name="name"
                   class="w-full outline-none p-5 focus:outline-none">
          </div>
          <div data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease" class="flex flex-col md:flex-row mb-8">
            <label for="contact-mail" class="inline-block align-top min-w-label w-2/12 text-bold text-white">{{ $t('contact.mail') }}</label>
            <input id="contact-mail" type="email" name="_replyto"
                   class="w-full outline-none p-5 focus:outline-none">
          </div>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease" class="flex flex-col md:flex-row mb-8">
            <label for="contact-message" class="inline-block align-top min-w-label w-2/12 text-bold text-white">Message</label>
            <textarea id="contact-message" type="text" name="message"
                      class="w-full outline-none p-5 focus:outline-none">
              </textarea>
          </div>
          <input
            data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease"
            class="btn ml-auto"
            type="submit"
            :value="`${$t('contact.submit')}`">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FormContact"
  }
</script>
