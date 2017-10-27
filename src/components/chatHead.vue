<template lang="html">
    <div class="head">
        <h3>来尬聊啊({{count}})</h3>
    </div>
</template>
<script>
    export default {
        props:{
            count:Number
        },
        data(){
            return{
            
            }
        },
        methods:{
        
        }
    }
</script>
<style lang="scss">
    .head{background-color: #34352C;text-align: center;padding: 10px 0px;
        h3{color: #fff;font-weight: 400;font-size: 16px;}
    }
</style>
