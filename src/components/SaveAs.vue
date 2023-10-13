<script setup lang="ts">
import { format, PhotoGap } from '../assets/format'
import { ref, reactive, computed  } from 'vue'
const props = defineProps<{
    targetKey: string
}>()

const aspectRatio = 1.5
const windowPadding = 64
const scrollbar = 18
const width = window.innerWidth - windowPadding - scrollbar;
const targetFormat = computed(() => props.targetKey? format[props.targetKey]: {})

const photoPadding = PhotoGap
const configKonva = reactive ({
    width: width,
    height: width/aspectRatio,
});
const configBgRect = reactive ({
    x: 0,
    y: 0,
    width: width,
    height: width/aspectRatio,
    stroke: "#ddd",
    strokeWidth: 1
});
const configRect = reactive ({
    // x: 0,
    // y: 0,
    width: 280/2,
    height: 350/2,
    stroke: "#ddd",
    strokeWidth: 1
});

const stageRef = ref()
const downloadURI = () => {
    const dataURL = stageRef.value.getStage().toDataURL();

    const link = document.createElement('a');
    link.download = 'stage.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


</script>

<template>
    <section>
        <h2>
            預覽
        </h2>
        <div v-if="targetFormat">
            {{ targetFormat.w }}
            {{ targetFormat.h }}
        </div>
        <v-stage ref="stageRef" :config="configKonva">
            <v-layer>
                <v-rect :config="configBgRect" />
                <v-rect 
                    v-for="item in 4"
                    :key="item"
                    :config="{...configRect, x: ((item-1)*(280/2 + photoPadding) + photoPadding), y: photoPadding}" />
                <v-rect 
                    v-for="item in 4"
                    :key="item"
                    :config="{...configRect, x: ((item-1)*(280/2 + photoPadding) + photoPadding), y: ((2-1)*(350/2 + 20) + photoPadding) }" />
            </v-layer>
        </v-stage>
        <button @click="downloadURI">
            另存
        </button>
    </section>
</template>

<style>
</style>
