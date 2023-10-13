<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SizeSelect from './components/SizeSelect.vue'
import UploadFile from './components/UploadFile.vue'
import CropFile from './components/CropFile.vue'
import SaveAs from './components/SaveAs.vue'

import { ref } from 'vue'
const targetKey = ref('')
const photeFile = ref('')
const updateSize = (key:string) => {
    targetKey.value = key
}
const updateImage = (file:string) => {
    photeFile.value = file
}
const submitFile = () => {
    // const formData = new FormData();
    // formData.append('file', img.value);
    // const headers = { 'Content-Type': 'multipart/form-data' };
    // axios.post('https://httpbin.org/post', formData, { headers }).then((res) => {
    //     res.data.files; // binary representation of the file
    //     res.status; // HTTP status
    // });
}
</script>

<template>
    <!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header> -->
    <main class="wrapper">
        <HelloWorld msg="DIY證件照" />

        <SizeSelect @update="updateSize" />

        <UploadFile @upload="updateImage" />

        <CropFile :targetKey="targetKey" :photoFile="photeFile"/>

        <!-- <SaveAs :targetKey="targetKey" :photoFile="photeFile"/> -->
    </main>

</template>

<style scoped>
/* header {
    line-height: 1.5;
    max-height: 100vh;
} */

/* .logo {
    display: block;
    margin: 0 auto 2rem;
} */

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    /* .logo {
        margin: 0 2rem 0 0;
    } */

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

</style>
