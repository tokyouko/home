<template>
    <div class="container">
        <section>
            hello , welcome to my little house
            <button @click="enter"> 进入 </button>
        </section>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
const enter = () => {
    router.push('/main')
}
</script> 
    
<style>

</style>
    