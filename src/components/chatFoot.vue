<template lang="html">
    <div class="footer">
        <div class="emoji-box" v-show="showEmoji==true">
            <ul>
                <li v-for="item in emojiList" v-html="item.tohtml" @click="emojiInp(item.data)"></li>
            </ul>
        </div>
        <input type="text" v-model="msg"/>
        
        <a class="send-btn" @click="sendMsg">发送</a>
        <span class="emoji" @click="showEmoji=!showEmoji"></span>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:"",
                showEmoji:false,
                emojiList:[
                    {data:'😋',tohtml:'<span e-data="😋">😋</span>'},
                    {data:'😋',tohtml:'<span e-data="😋">😋</span>'},
                    {data:'😋',tohtml:'<span e-data="😋">😋</span>'},
                    {data:'😋',tohtml:'<span e-data="😋">😋</span>'},
                    {data:'😋',tohtml:'<span e-data="😋">😋</span>'}
                ]
            }
        },
        methods:{
            sendMsg(){
                this.showEmoji = false;
                this.$emit('sendMsg',this.msg);
                this.msg = '';
            },
            emojiInp(data){
                this.msg = this.msg+" "+data;
            }
        }
    }
</script>
<style lang="scss">
    .footer{position: fixed;bottom: 0px;left:0px;height:60px;width:100%;background-color: #fff;border-top:1px solid #E7EDEB;
        .emoji-box{position: fixed;bottom: 65px;left:0px;width:96%;margin-left:2%;height:100px;background-color: aliceblue;
            ul{margin:5px;}
            li{float:left;}
        }
        input{float:left;line-height: 30px;width:60%;padding-left:5px;margin:10px 0px 0px 20px;border:1px solid #ccc;border-radius: 5px;}
        .emoji{float:right;width:30px;height:30px;background-color: coral;border-radius: 50%;margin:10px 5px 0px 0px;}
        .send-btn{float:right;width: 15%;line-height: 35px;margin:10px 20px 0px 0px;color:#fff;background-color: #01A378;}
    }
    
</style>
