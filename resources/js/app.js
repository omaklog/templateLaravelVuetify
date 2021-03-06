import _ from "lodash"
import Vue from "vue"
import vuetify from "@/plugins/Vuetify"

Vue.component("App", require("./components/App.vue").default);

if(document.querySelector("#app") !== null){
    const app =new Vue({
        el:"#app",
        vuetify
    });
}
