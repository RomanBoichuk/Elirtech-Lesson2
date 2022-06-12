<template>
  <div>
    <h1>{{ test }}</h1>
    <Products />
  </div>
</template>

<script>
// import Component from 'nuxt-class-component';
import { Component, Vue } from 'nuxt-property-decorator';
import Products from '@/components/Products.vue';

export default @Component({
  name: 'IndexPage',
  components: {
    Products
  }
})

class IndexPage extends Vue {
  test = 'Сторінка продуктів';
}
</script>
