<template>
  <Wrap :page="page">
    <div class="home">
      <h1 class="page-heading" v-if="page.title">{{ page.title }}</h1>

      <slot name="default"></slot>

      <h2
        class="post-list-heading"
        v-if="page.posts && page.posts.length > 0"
      >{{ page.listTitle || 'Статьи' }}</h2>

      <ul class="post-list" v-if="page.posts && page.posts.length > 0">
        <li v-for="post in page.posts" :key="post.permalink">
          <span class="post-meta">{{ formatDate(post.createdAt) }}</span>
          <h3>
            <saber-link
              class="post-link link"
              :to="post.permalink"
            ><span :data-content="post.title">{{ post.title }}</span></saber-link>
          </h3>
        </li>
      </ul>

      <div
        class="pagination"
        v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)"
      >
        <router-link
          class="prev-link"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev"
        >← Предыдущая</router-link>
        <router-link
          class="next-link"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext"
        >Следующая →</router-link>
      </div>
      <p class="feed-subscribe" v-if="feedLink">
        <svg class="svg-icon orange">
          <use :xlink:href="getSvg('rss')"></use>
        </svg>
        <a :href="feedLink">Подписаться</a>
      </p>
    </div>
  </Wrap>
</template>

<script>
import formatDate from '../utils/formatDate';
import Wrap from '../components/Wrap.vue';
import getSvg from '../utils/getSvg';
export default {
  components: {
    Wrap: Wrap
  },
  props: ['page'],
  computed: {
    feedLink: function feedLink() {
      return this.$feed && this.$feed.permalink;
    }
  },
  methods: {
    formatDate: formatDate,
    getSvg: getSvg
  }
};
</script>
