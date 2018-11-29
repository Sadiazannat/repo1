<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text</strong>'"></p>
            </div>
        </div>
<hr>
    <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed = "'red'">color this</p>
                <p v-local-highlights:background.delayed.blink = "{mainColor: 'red', secondColor: 'black', delay: 500}">color this, too</p>
               
            </div>
        </div>
    

<hr> 

<div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters n Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
<hr>
<button @click="fruits.push('Berries')">Add new Item</button>
<hr>
<input v-model="filterText">
<ul>
<li v-for="fruit in filteredFruits">{{ fruit }}</li>
</ul>
<hr>
<app-list></app-list>
</div>
</div>
</div>
</template>

<script>
      import List from './List.vue';
      import { fruitMixin } from './fruitMixin';

    export default {
        directives:{
            'local-highlights': {
                 bind(el, binding, vnode) {
  var delay = 0;
       if (binding.modifiers['delayed']){
           delay = 4000;
       }
       if (binding.modifiers['blink']) {
           let mainColor = binding.value.mainColor;
           let secondColor = binding.value.secondColor;
           let currentColor = mainColor;
     
       setTimeout( () => { 
         setInterval( () => { 
                  currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                 if (binding.arg == 'background') {
          el.style.backgroundColor = currentColor;  
       } else{
           el.style.color = currentColor;
       }
          },binding.value.delay);
      
        },delay);
       } else{  
     setTimeout( () => { 
       if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value.mainColor;  
       } else{
           el.style.color = binding.value.mainColor;
       }
        },delay);  
   
       }
       


                } 
            }
        },

mixins: [fruitMixin],
data() {
   return { 
      text: 'sadia',
      
     
}
},
filters: {
      toUppercase(value) {
           return value.toUpperCase();
}
},
computed: {
     filteredFruits() {
          return this.fruits.filter((element) => {
            return element.match(this.filterText);
});
}
},
components: {
      appList: List
}
    }
</script>

<style>

</style>
