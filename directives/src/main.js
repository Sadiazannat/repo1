import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value){
    return value.toLowerCase();
    
    });

Vue.directive('highlight',{
    bind(el,binding,vnode) {
       //el.style.backgroundColor = 'green'; 
       //el.style.backgroundColor = binding.value; 
       var delay = 0;
       if (binding.modifiers['delayed']){
           delay = 4000;
       }
       
       setTimeout( () => { 
       if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value;  
       } else{
           el.style.color = binding.value;
       }
        },delay);
       
    }
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
