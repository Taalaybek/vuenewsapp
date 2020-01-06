<template>
    <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style" id="style-1">
        <v-list dense class="pt-3 black--text">
            <v-list-item-group>
                <v-list-item
                v-for="source in sources"
                :key="source.id"
                @click="selectSource(source.id)">
                <v-list-item-action>
                    <v-avatar size="32px">
                        <img class="img-circle elevation mb-1" v-bind:src="getImgUrl(source.id)" :alt="source.name">
                    </v-avatar>
                </v-list-item-action>
                <v-list-item-content>
                   <v-list-item-title>{{ source.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SideMenu',
    props: {
        api_key: String,
        drawer: Boolean
    },
    data: () => ({
        sources: [],
        errors: []
    }),

    created () {
        axios.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key)
            .then(response => {
                this.sources = response.data.sources
            })
            .catch(error => {
                this.errors.push(error)
            })
    },

    methods: {
        getImgUrl(pic) {
            return require('@/assets/images/'+pic+'.png')
        },
        selectSource(source) {
            this.$emit('selectsource', source)
        }
    }
}
</script>
<style scoped>
    #style-1::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
    }
    #style-1::-webkit-scrollbar-thumb {
        background-color: #F90; 
        background-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
    }
    #style-1::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    .drawer-style {
        background-color: #2196F3 !important;
        border-color: #2196F3 !important;
    }
</style>>

