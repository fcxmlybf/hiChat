<template lang="html">
    <div class="chat">
        <chat-head :count="CHAT.onlineCount"></chat-head>
        <chat-body :msgArr="CHAT.msgArr" :selfName="CHAT.username"></chat-body>
        <chat-foot @sendMsg="getMsg"></chat-foot>
    </div>
</template>
<script>
    import chatHead from './chatHead.vue'
    import chatBody from './chatBody.vue'
    import chatFoot from './chatFoot.vue'
    import CHAT from '../api/client'
    export default {
        data(){
            return{
                CHAT:CHAT,
            }
        },
        components:{
            chatHead,
            chatBody,
            chatFoot
        },
//        created(){
//            let name = this.CHAT.username;
//            this.CHAT.closeWin(name);
//        },
        methods:{
            getMsg(msg){
                this.CHAT.submit(msg);
            }
        }
    }
//    window.onbeforeunload = function(){
//        let name = CHAT.username;
//        CHAT.closeWin(name);
//    }
</script>
<style lang="scss">
    .chat{position: fixed;top:0px;bottom: 0px;left:0px;width:100%;background-color:#ccc;}
</style>
