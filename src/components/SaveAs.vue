<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
    targetSize: object
}>()

const previewFile = ref();

const uploadFile = () => {
}


</script>

<template>
    <section>
        <h2>
            預覽
        </h2>
        <div>
            <div v-if="targetSize.w && targetSize.h">
                {{ targetSize.w }}
                {{ targetSize.h }}
            </div>
            <div class="img_box">
                <img :src="previewFile" alt="" />
            </div>
        </div>
        <div>
            <button @click="uploadFile">
                送出
            </button>
        </div>
    </section>
</template>

<style scoped>
.img_box,
.img_box img{
    width: 100%;
}
</style>
