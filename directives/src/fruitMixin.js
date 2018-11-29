export const fruitMixin = {
  data() {
   return { 
      
      fruits: ['apple', 'Banana', 'Melon', 'Mango'],
      filterText: ''
}
},

computed: {
     filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
});
}
},
 created() {
     console.log('Created');
 }
}