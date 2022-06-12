<template>
  <div>
    <h1>Список одягу</h1>
    <Clothings />
  </div>
</template>

<script>
import Clothings from '~/components/Clothings.vue';
export default {
  name: 'ClothingPage',
  components: { Clothings }
};
</script>
