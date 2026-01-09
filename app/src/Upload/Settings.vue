<template lang="pug">
  div(v-if="config")
    .panel.panel-default(:class="{'panel-info': !disabled}")
      .panel-heading
        strong {{ $root.lang.information }}
      .panel-body
        .form-group(v-if="config.retentions && config.showRetention")
          label(for='retention') {{ $root.lang.retention }}
          |
          select#retention.form-control(:value='retention', :disabled='disabled',

          @change="$store.commit('upload/RETENTION', $event.target.value)")
            option(
              v-for='(label, seconds) in config.retentions'
              :value="seconds"
              :selected="seconds === retention"
            ) {{ $root.lang.retentions[seconds] || label }}
        div(v-if="config.showBucketPassword")
          label(for='password') {{ $root.lang.password }}
          .input-group(:class="{'has-error': config.requireBucketPassword && !password}")
            input#password.form-control(
              type='text'
              :value='password'
              @input="$store.commit('upload/PASSWORD', $event.target.value)"
              :disabled='disabled'
              :placeholder="config.requireBucketPassword ? $root.lang.required : $root.lang.optional"
              required="config.requireBucketPassword"
            )
            span.input-group-addon(
              style='cursor: pointer'
              :title='$root.lang.generateRandomPassword'
              @click='generatePassword()'
              tabindex="0"
              role="button"
              @keydown.enter.prevent='generatePassword()'
              @keydown.space.prevent='generatePassword()'
            )
              icon(name="key")
        div
          label(for='name') {{ $root.lang.name }}
          .input-group
            input#name.form-control(
              type='text'
              :value='name'
              @input="$store.commit('upload/NAME', $event.target.value)"
              :disabled='disabled'
              :placeholder="$root.lang.required"
              required=true
            )
            span.input-group-addon(
              :title='$root.lang.generateRandomPassword'
            )
              icon(name="portrait")
        div
          label(for='email') {{ $root.lang.email }}
          .input-group
            input#email.form-control(
              type='email'
              :value='email'
              @input="$store.commit('upload/EMAIL', $event.target.value)"
              :disabled='disabled'
              :placeholder="$root.lang.required"
              required=true
            )
            span.input-group-addon(
              :title='$root.lang.generateRandomPassword'
            )
              icon(name="envelope")
        div
          label(for='topic') {{ $root.lang.topic }}
          .input-group
            select#topic.form-control(
              :value='topic'
              @change="$store.commit('upload/TOPIC', $event.target.value)"
              :disabled='disabled'
              required=true
            )
              option(value='') {{ $root.lang.required }}
              option(:value='$root.lang.topicApplication') {{ $root.lang.topicApplication }}
              option(:value='$root.lang.topicDriverLicense') {{ $root.lang.topicDriverLicense }}
              option(:value='$root.lang.topicConcertHall') {{ $root.lang.topicConcertHall }}
              option(:value='$root.lang.topicSouvenirMovie') {{ $root.lang.topicSouvenirMovie }}
              option(:value='$root.lang.topicSocialMedia') {{ $root.lang.topicSocialMedia }}
              option(:value='$root.lang.topicMiscellaneous') {{ $root.lang.topicMiscellaneous }}
            span.input-group-addon(
              :title='$root.lang.generateRandomPassword'
            )
              icon(name="star")
        div
          label(for='message') {{ $root.lang.message }}
          .input-group
            input#message.form-control(
              type='text'
              :value='message'
              @input="$store.commit('upload/MESSAGE', $event.target.value)"
              :disabled='disabled'
              :placeholder="$root.lang.required"
              required=true
            )
            span.input-group-addon(
              :title='$root.lang.generateRandomPassword'
            )
              icon(name="quote-left")
</template>

<script type="text/babel">
import { mapState } from "vuex";
import "vue-awesome/icons/key";
import "vue-awesome/icons/star";
import "vue-awesome/icons/portrait";
import "vue-awesome/icons/envelope";
import "vue-awesome/icons/quote-left";

const passGen = {
  _pattern: /[A-Z0-9_\-+!]/,
  _getRandomByte: function() {
    const result = new Uint8Array(1);
    let fixedcrypto = window.msCrypto;
    if (!fixedcrypto) {
      fixedcrypto = window.crypto;
    }
    fixedcrypto.getRandomValues(result);
    return result[0];
  },
  generate: function(length) {
    let fixedcrypto2 = window.msCrypto;
    if (!fixedcrypto2) {
      fixedcrypto2 = window.crypto;
    }
    if (!fixedcrypto2 || !fixedcrypto2.getRandomValues) return "";
    return Array.apply(null, { length: length })
      .map(function() {
        let result;
        while (true) {
          result = String.fromCharCode(this._getRandomByte());
          if (this._pattern.test(result)) return result;
        }
      }, this)
      .join("");
  }
};

export default {
  name: "Settings",

  computed: mapState({
    config: "config",
    disabled: "disabled",
    retention: state => state.upload.retention,
    password: state => state.upload.password,
    name: state => state.upload.name,
    email: state => state.upload.email,
    topic: state => state.upload.topic,
    message: state => state.upload.message
  }),

  methods: {
    generatePassword() {
      if (this.disabled) return;
      this.$store.commit("upload/PASSWORD", passGen.generate(10));
    }
  }
};
</script>
