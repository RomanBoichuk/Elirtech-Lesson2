<template>
  <div>
    <h1>Продукти</h1>
    <div class="row">
      <div v-for="item in foods" :key="item.id" class="product__item">
        <h3 class="product__item-name">
          {{ item.name }}
        </h3>
        <p class="product__item-name">
          {{ item.price }}грн.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Component from 'nuxt-class-component';
import { Component, namespace, Vue } from 'nuxt-property-decorator';
const { State, Mutation } = namespace('foods');

export default @Component({
  components: {
  }
})

class IndexPage extends Vue {
  products = [
    {
      id: 1,
      name: 'Капуста',
      price: 50
    },
    {
      id: 2,
      name: 'Морква',
      price: 35
    },
    {
      id: 3,
      name: 'Бараболька',
      price: 13
    }
  ]

  @State foods;
  @Mutation setProducts;

  mounted () {
    this.setProducts(this.products);
  }
}
</script>

<style scoped>

.row{
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.product__item{
    border: 1px solid black;
    padding: 20px 10px;
    text-align: center;
}
.product__item-name{
    font-size: 30px;
    margin-bottom: 10px;
}
</style>
