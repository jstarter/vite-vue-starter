<route lang="json">
{
    "meta": {
        "title": "Hello"
    }
}
</route>
<script setup lang="ts">

</script>

<template>
    <div class="vapp">
        <HelloWorld :msg="new Date().toLocaleString()"></HelloWorld>
    </div>
</template>

<style scoped lang="scss">

</style>