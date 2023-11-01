<script>
import Cards from "./components/Cards.vue";
import forest from "./assets/forest.jpg"
export default{
    components: {Cards},
    data(){
        return {

        }
    },
}

</script>

<template>
<div class="card"> 
<Cards>
<template #header>
  <!-- imgcame -->
  <img src="https://keepwalestidy.cymru/wp-content/uploads/2021/10/arnaud-mesureur-7EqQ1s3wIAI-unsplash-555x480.jpg" alt="NoImg"/>
</template>

<template #title>
<h3>Card Title</h3>
</template>

<template #body>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
</template>

<template #footer>
<button>Don't click</button>
</template>

</Cards>
</div>
</template>

<style scoped></style>
