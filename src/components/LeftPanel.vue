
<script setup lang="ts">
    import { ref } from 'vue' 
    const count = ref("RPA")
</script>


<template>
    <div class="sc-header"><img src="/vite.svg" class="logo" /><div class="sc-title">数据查询中心</div></div>
     <div class="sc-menu">
        <ul  class="sc-nav">
            <li><a href="#">条码追溯（KsMes）</a></li>
            <li><a href="#">条码追溯（SMOM）</a></li>
            <li><a href="#">RPA预付流程</a></li>
            <li><a href="#">RPA到付流程</a></li>
            <li><a href="#">{{count}}工艺路线导入</a></li>
        </ul>
     </div>   
</template>


<style scoped>
    .sc-header{
        margin: 0;
        width: 100%;
        display: flex; 
        flex-wrap: nowrap;  
        justify-content:center;
        padding: 1.5em 0;       
        border-bottom: 1px solid  #d6d4d4;
        overflow: hidden;       
    } 
    .sc-header img{
        width: 1.5em;
        height: 1.5em;         
        margin-right: 0.5em;       
    }
    .sc-header .title{
       font-size: medium;
       font-weight: bold;
    }

  
    .sc-menu ul {
    list-style: none;
    padding-left: 0;
    margin: 0;     
    }
    .sc-menu ul li {
    list-style-type: none;
    padding-left: 0.8em; 
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    }
    .sc-menu ul li:hover{background-color: #cad8a9;}

    .sc-menu ul li a{color: #323233;}
    .sc-menu ul li a:hover{color: #ff0202;}
    .sc-menu ul li a:active{color: #323233;}
    .sc-menu ul li a:before{color: #323233;}
     
     
     



</style>