<template>

  <div class="small-box" :class="bgColor">
    <div class="inner">
      <h3>{{title}}</h3>

      <p>{{description}}</p>
    </div>
    <div class="icon">
      <i class="ion" :class="icon"></i>
    </div>
    <router-link v-bind:to="moreUrl" style="position: relative;
    text-align: center;
    padding: 3px 0;
    color: #fff;
    color: rgba(255,255,255,0.8);
    display: block;
    z-index: 10;
    background: rgba(0,0,0,0.1);
    text-decoration: none;">
      <a class="small-box-footer" style="color: #fff;" @click="moreEvent">{{moreText}} <i class="fa fa-arrow-circle-right"></i></a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SmallBox',
  props: ['color', 'icon', 'title', 'description', 'moreText', 'moreUrl'],
  computed: {
    bgColor () {
      return `bg-${this.color}`
    }
  },
  methods: {
    moreEvent () {
      this.$emit('more-click')
    }
  }
}
</script>
