<template>
  <div>
    <h1>Одяг</h1>
    <div class="row">
      <div v-for="item in products" :key="item.id" class="product__item">
        <h3 class="product__item-name">
          <a href="#" @click.prevent="openItem(item.id)">{{ item.name }}</a>
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
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  components: {
  }
})

class IndexPage extends Vue {
  products = [
    {
      id: 1,
      name: 'Штани',
      price: 50
    },
    {
      id: 2,
      name: 'Сорочка',
      price: 35
    },
    {
      id: 3,
      name: 'Плаття',
      price: 13
    }
  ]

  methods () {
  }

  openItem (id) {
    this.$router.push('/clothing/' + id);
    console.log(111);
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
