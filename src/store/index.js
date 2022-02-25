import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    _defaultView: '4444', //默认地图view
    _defaultMapTreeVisible: 'flase', //地图目录树显示切换
}

const getters = {
    _getDefaultMapView() {
        return state._defaultView;
    },
    _getDefaultMapTreeVisible() {
        return state._defaultMapTreeVisible;
    }
}

const mutations = {
    _setDefaultMapView(state, value) {
        state._defaultView = value;
    },
    _setDefaultMapTreeVisible(state, value) {
        state._defaultMapTreeVisible = value;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
}

);

export default store;