<template>
<div>
                <h1>Filters n Mixins</h1>
                
<input v-model="filterText">
<ul>
<li v-for="fruit in filteredFruits">{{ fruit }}</li>
</ul>
</div>

</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {

mixins: [fruitMixin],
created() {
     console.log('Inside List Created');
 }

    }
</script>

<style>

</style>
