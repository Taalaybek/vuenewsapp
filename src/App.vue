<template>
  <v-app light>
  <!--The Side Menu component go here -->
  <SideMenu :drawer="drawer" :api_key="api_key" @selectsource="setResource"></SideMenu>

  <!-- The Top Menu component go here -->
  <v-layout>
    <v-app-bar fixed app light clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>News App</v-toolbar-title>
    </v-app-bar>
  </v-layout>

  <v-content>
    <v-container fluid>
    <!--The Main Content component go here-->  
    <MainContent :articles="articles"></MainContent>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import axios from 'axios'
import MainContent from './components/MainContent'
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    MainContent,
    SideMenu
  },

  data: () => ({
    drawer: false,
    api_key: '11139e780d404a77a9b25b923549fe98',
    articles: [],
    errors: []
  }),

  created () {
    axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='+this.api_key)
      .then(response => {
        this.articles = response.data.articles
      })
      .catch(error => {
        this.errors.push(error)
      })
  },

  methods: {
    setResource(source) {
      axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key)
        .then(response => {
          this.articles = response.data.articles
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
};
</script>
