<template>
  <div>
    Search..
    {{ keyword }}
    {{ keyword }}
    {{ keyword2 }}
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword", "keyword2"],
  methods: {},
};
</script>

<style lang="less" scoped></style>
