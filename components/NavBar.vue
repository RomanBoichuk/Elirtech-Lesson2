<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
      style="justify-content:center"
    >
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
        <nuxt-link to="/">
          FOODS
        </nuxt-link>
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2"
      >
        <nuxt-link to="/clothing">
          clothing
        </nuxt-link>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      'FOODS',
      'clothing'
    ]
  })
};
</script>
