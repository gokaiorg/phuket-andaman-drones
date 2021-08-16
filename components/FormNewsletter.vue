<template>

  <section id="newsletter" class="mb-16 pb-16" data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out">
    <div id="mc_embed_signup">

      <form role="form"
        action="https://phuketandamandrones.us4.list-manage.com/subscribe/post?u=76943d13e5caaa74124d20d5c&amp;id=58477d2ab6"
        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
        novalidate>
        <div id="mc_embed_signup_scroll" class="flex flex-col md:flex-row items-center text-2xl">
          <input :placeholder="`${ $t('newsletter.placeholder') }`" type="email" value="" name="EMAIL"
                 class="required email w-full outline-none p-5 mb-4 md:mb-0 focus:outline-none" id="mce-EMAIL">
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                                                                    name="b_76943d13e5caaa74124d20d5c_58477d2ab6"
                                                                                    tabindex="-1" value=""></div>
          <div class="clear"><input type="submit" :value="`${ $t('newsletter.button') }`" name="subscribe"
                                    id="mc-embedded-subscribe" class="btn hover:bg-blue-700"></div>
        </div>
      </form>

    </div>

  </section>

</template>

<script>
  export default {
    name: "FormNewsletter"
  }
</script>
