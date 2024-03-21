---
aside: false
layout: home
---
<script setup>
  import Article from './../components/blog/Article.vue';
</script>

<Article :articles="{
  items: [{
    info: {
      title:'Reuse reservation module to build chatbot',
      description: ['Reuse a pre-defined module to build a table reservation chatbot and manage resources in Google Calendar and Google Admin, allowing for quick integration of reservation functionality into your chatbot.'],
      image: './../images/blog/banner/tutorial_reservation_chatbot.png',
      author: 'Sunny May',
      date: '4/27/2023'
    },
    path:'./reuse-reservation-module.html'
}]
}" />
