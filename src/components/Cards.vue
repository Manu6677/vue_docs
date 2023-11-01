<script> </script>

<template> 
<div class="container"> 
<div class="inside-container">

<header class="img">
<slot name="header"/>
</header>

<main class="card-title">
<slot name="title"/>
</main>

<body class="body"> 
<slot name="body"/>
</body>

<footer class="footer"> 
<slot name="footer" class="btn"/>
</footer>

</div>
</div>
</template>

<style scoped> 
.container{
    margin-top: 160px;
    margin-left: 480px;
    justify-content: center;
    border: 1px solid black;
    border-radius: 20px;
    height: 400px;
    width: 450px;
    background-color:#C8C8C8;
}

.inside-container{
    margin-left: 30px;
   margin-top: 20px;
}

.card-title{
    margin-top: 10px
}

.body{
    height: 90px;
}

.img{
    width: 400px;   
   height: 180px;
   object-fit: contain;
   overflow: hidden;
   border-radius: 20px;
}

</style>