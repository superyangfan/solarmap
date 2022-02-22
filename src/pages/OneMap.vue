<template>
    <div class="onemap-page">
        <MapView />
    </div>
</template>

<script>
import MapView from './../components/common/Mapview';

export default {
    name: 'OneMap',
    components: {
        MapView,
    },
    method: {},
};
</script>

<style>
.onemap-page {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
