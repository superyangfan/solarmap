<template>
    <div class="maptools-view">
        <span class="maptools-item" @click="handleMaptoolsItemClick" id="region">行政区导航</span>
        <span class="maptools-item" @click="handleMaptoolsItemClick" id="maptree">目录树管理</span>
        <span class="maptools-item" @click="handleMaptoolsItemClick" id="distance">距离测量</span>
        <span class="maptools-item" @click="handleMaptoolsItemClick" id="area">面积测量</span>
        <span class="maptools-item" @click="handleMaptoolsItemClick" id="clear">清屏</span>
    </div>
</template>

<script>
export default {
    name: 'MapTools',
    methods: {
        handleMaptoolsItemClick(e) {
            console.log(e.target.id);
            switch (e.target.id) {
                case 'region':
                    break;
                case 'maptree':
                    this.open();
                    break;
                case 'distance':
                    break;
                case 'area':
                    break;
                case 'clear':
                    break;
                default:
                    break;
            }
        },
        open() {
            {
                const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
                this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maptools-view {
    position: absolute;
    padding: 0 15px;
    height: 30px;
    top: 20px;
    right: 15px;
    background-color: white;
}
.maptools-item {
    line-height: 30px;
    margin-left: 15px;
    color: black;
    cursor: pointer;
}
.maptools-view:first-child {
    margin-left: 0;
}
</style>