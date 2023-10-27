<script>
export default {
  props: ["title"],
  emits: ["remove"],
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="$emit('remove')">Del</button>
  </div>
</template>
