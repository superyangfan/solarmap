<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemapToggle"></div>
        <div id="scaleBar"></div>
        <div id="zoom"></div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.22/init.js', // 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
    css: 'https://js.arcgis.com/4.22/esri/themes/light/main.css',
};

export default {
    name: 'Mapview',
    components: {},
    mounted: function () {
        console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom',
                ],
                options,
            );

            // create a basemap from a dynamic mapserver
            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });
            const map = new Map({
                basemap,
            });

            const mapView = new MapView({
                container: 'mapview',
                map: map,
                zoom: 10,
                center: [116.394637, 39.885149],
            });
            // 实例化地图切换控件
            const basemapToggle = new BasemapToggle({
                view: mapView,
                nextBasemap: 'satellite',
                container: 'basemapToggle',
            });
            mapView.ui.add(basemapToggle, {
                position: 'bottom-right',
            });
            //实例化比例尺
            const scaleBar = new ScaleBar({
                view: mapView,
                unit: 'metric',
                container: 'scaleBar',
            });
            mapView.ui.add(scaleBar);
            //实例化放大缩小组件
            const zoom = new Zoom({
                view: mapView,
                container: 'zoom',
            });
            mapView.ui.add(zoom);
            mapView.ui.components = [];
            //this.$store.commit('', view);
            console.log(mapView);
        },
    },
};
</script>

<style>
.mapview-pannel,
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemapToggle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}
#scaleBar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}
#zoom {
    position: absolute;
    right: 15px;
    bottom: 110px;
}
</style>
