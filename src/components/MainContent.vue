<template>
  <v-layout row wrap align-center>
      <v-flex>
        <div v-for="article in articles" :key=article.title>
            <v-card class="my-4 mx-auto" max-width="550" outlined data-aos="fade" data-aos-easing="ease">
                <v-img height="200px" class="align-end" :src="article.urlToImage">
                    <v-card-title class="white--text">{{ article.title }}</v-card-title>
                </v-img>
                <v-flex d-flex class="justify-space-between">
                    <v-card-subtitle class="grey--text pb-0">{{ 'Author ' + article.author }}</v-card-subtitle>
                    <v-card-subtitle class="grey--text pb-0"><span class="grey--text">Published</span> {{ formatter(article.publishedAt) }}</v-card-subtitle>
                </v-flex>
                <v-card-text class="text--primary">
                    {{ article.description }}
                </v-card-text>
                <v-card-actions>
                    <v-chip small color="secondary" class="white--text">
                        {{ article.source.name }}
                    </v-chip>

                    <!-- icons -->
                    <v-spacer></v-spacer>
                    <v-btn icon class="red--text">
                    <v-icon small>{{ 'fa-reddit' }}</v-icon>
                    </v-btn>
                    <v-btn icon class="light-blue--text">
                        <v-icon small>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                        <v-icon small>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon class="red--text">
                        <v-icon small>mdi-vk</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                        <v-icon small>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <!-- end icons -->

                    <v-btn small replace color="info" :href="article.url" target="_blank">Read More</v-btn>
                </v-card-actions>
            </v-card>
        </div>
      </v-flex>
  </v-layout>
</template>
<style lang="scss">
    @import '~vuetify/src/styles/main.sass';
</style>
<script>
const moment = require('moment')
export default {
    name: 'MainContent',

    data: () => ({

    }),
    props: {
        articles: {
            type: Array
        }
    },
    methods: {
        formatter: (time) => {
            return moment(time).fromNow()
        }
    }
}
</script>