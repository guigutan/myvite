
<script setup lang="ts">
    import { ref } from 'vue' 
    const projectName = ref("条码追溯（老）")
</script>


<template>
   <div class="sc-top">{{ projectName }}</div>
   <div class="sc-content">
        <div class="sc-left">
             <table class="sc-stable">               
                <tbody>
                    <tr>
                        <td>SN二维码：</td>
                        <td><input type="text" name="snstr" id="snstr" ></td>
                    </tr>
                    <tr>
                        <td>HU蓝标：</td>
                        <td><input type="text" name="hustr" id="hustr"></td>
                    </tr>
                    <tr>
                        <td>物料号：</td>
                        <td><input type="text" name="itemstr" id="itemstr"></td>
                    </tr>
                    <tr>
                        <td>日期：</td>
                        <td><input type="date" name="date1" id="date1"> 到 <input type="date" name="date2" id="date2"></td>
                    </tr>
                    <tr>
                        <td><button type="button" name="button1"  class="sc-button">清除</button></td>
                        <td><button type="button" name="button2"  class="sc-button">查询</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="sc-right">right</div>
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
    .sc-stable tr td{
        padding: 3px;
    }
    .sc-stable tr td input{
        height: 20px;
        padding:0 5px;
    }
    .sc-button{
        margin-top: 2em;
    }



</style>







