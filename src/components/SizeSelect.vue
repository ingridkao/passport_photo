<script setup lang="ts">
import { format } from '../assets/format'
defineEmits(["update"])
</script>

<template>
    <section>
        <h2>
            列印格式
        </h2>
        <div>
            <button 
                v-for="item in format" 
                :key="item.key"
                @click="$emit('update', item)"
            >
                <h5>{{ item.name }}</h5>
                <h6>({{ item.w }} X {{ item.h }} cm)</h6>
                <p>{{ item.desc }}</p>
            </button>
        </div>
    </section>
</template>

<style scoped>
</style>
