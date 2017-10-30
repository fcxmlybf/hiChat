<template lang="html">
    <div class="footer">
        <div class="emoji-box" v-show="showEmoji==true"><div class="box">
                <ul>
                    <li v-for="item in emojiList" @click="emojiInp(item.data,item.eClass)">
                        <span class="emoji" :class="item.eClass" :e-data="item.data"></span>
                    </li>
                </ul>
            </div>
        </div>
        <input type="text" v-model="msg" @focus="showEmoji=false"/>
        
        <a class="send-btn" @click="sendMsg">发送</a>
        <span class="emoji-icon" @click="showEmoji=!showEmoji"></span>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:"",
                showEmoji:false,
                emojiList:[
                    {data:'😠',eClass:'emoji1f620'},
                    {data:'😩',eClass:'emoji1f629'},
                    {data:'😲',eClass:'emoji1f632'},
                    {data:'😠',eClass:'emoji1f620'},
                    {data:'😩',eClass:'emoji1f629'}
                ]
            }
        },
        methods:{
            sendMsg(){
                this.showEmoji = false;
                this.$emit('sendMsg',this.msg);
                this.msg = '';
            },
            emojiInp(data,eclass){
                //let eHtml = `<span class="emoji" :class="eclass"></span>`;
                this.msg = this.msg+" "+data;
            }
        }
    }
</script>
<style lang="scss">
    .footer{position: fixed;bottom: 0px;left:0px;height:60px;width:100%;background-color: #fff;border-top:1px solid #E7EDEB;
        .emoji-box{position: fixed;bottom: 67px;left:0px;width:96%;margin-left:2%;height:100px;background-color: #f5f6f7;border-radius: 8px;
            box-shadow: 1px -2px 7px rgba(0, 0, 0, 0.17);
            .box{position:relative;height: 100%;float: left;width: 100%;
                &:after{content: '';position: absolute;bottom: -6px;right:80px;width:0px;height:0px;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-top: 6px solid #f5f6f7;
                }
            }
            ul{margin:5px;}
            li{float:left;padding: 5px;
                .emoji {background: url(../../static/emoji.png) top left no-repeat;
                    width: 20px;height: 20px;display: inline-block;vertical-align: top;zoom: 1;
                }
                .emoji1f620 {background-position: -0px -12280px;}
                .emoji1f629 {background-position: -0px -12460px;}
                .emoji1f632 {background-position: -0px -12640px;}
            }
        }
        input{float:left;line-height: 30px;width:60%;padding-left:5px;margin:10px 0px 0px 20px;border:1px solid #e7edeb;border-radius: 5px;}
        .emoji-icon{float:right;width:30px;height:30px;background-color: coral;border-radius: 50%;margin:10px 5px 0px 0px;}
        .send-btn{float:right;width: 15%;line-height: 35px;margin:10px 20px 0px 0px;border-radius: 5px;color:#fff;background-color: #01A378;}
    }
    
</style>
