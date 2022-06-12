export const state = () => ({
  foods: []
});

export const mutations = {
  setProducts (state, products) {
    console.log(22222);
    state.foods = products;
  }
};

export const actions = {
//   setProducts ({ comit }, products) {
//     comit('setProducts', products);
//   }
};
