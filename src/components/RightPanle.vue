
<script setup lang="ts">
    import { ref } from 'vue' 
    const count = ref("条码追溯（老）")
</script>


<template>
   <div class="sc-top">{{ count }}</div>
   <div class="sc-content">
        <div class="sc-left">

            <div>SN二维码：<input type="text" name="snstr" id="snstr"></div>
            <div>HU蓝标：<input type="text" name="hustr" id="hustr"></div>
            <div>物料号： <input type="text" name="itemstr" id="itemstr"></div>
            <div>日期：<input type="date" name="date1" id="date1">到<input type="date" name="date2" id="date2"></div>
            <div><input type="button" value="查询"></div>

        </div>
        <div class="sc-right">22</div>
   </div>
</template>


<style scoped>
    .sc-top {
        position: fixed;
        top: 0; 
        left: 10%; 
        width: calc(90% - 17px);
        height:2.5em; 
        line-height:2.5em; 
        background-color: rgb(255, 255, 255);  
        border-bottom: 1px solid  #f5f3f3;
        border-left: 1px solid  #d6d4d4;
        z-index: 999;

        padding-left: 2em;
    }
    .sc-content {    
        margin-top: 2.5em;
        padding: 1em;
        overflow: auto;

        display: flex;
    }




</style>







