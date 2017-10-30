<template lang="html">
    <div class="chat-body">
        <div class="body-scroll" ref="bodyWrapper">
            <ul>
                <li class="msg-box" v-for="item in msgArr">
    
                    <div :class="{'msg':item.setclass==1,'air':item.setclass==0,'msgme':item.username==selfName&&item.setclass==1}">
                        <span class="name">{{item.username}}</span>
                        <span class="msg" v-html="item.msg">

                        </span>
                    </div>
                    
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props:{
            msgArr:Array,
            selfName:String,
            bodyScroll:'',
        },
        data(){
            return{
            
            }
        },
        watch:{
            msgArr:function(e){
                this.$nextTick(()=>{
                    this._initScroll();
                });
                e[e.length-1].msg = this.emojiChange(e[e.length-1].msg);
            }
        },
        created(){
            this.$nextTick(()=>{
                this._initScroll();
            });
        },
        methods:{
            _initScroll(){
                this.bodyWrapper = new BScroll(this.$refs.bodyWrapper,{
                    click:true,
                });
            },
            emojiChange(msg){
                let rg;
                let eArray = [];
                let ranges = [
                    '\ud83c[\udf00-\udfff]',
                    '\ud83d[\udc00-\ude4f]',
                    '\ud83d[\ude80-\udeff]'
                ];
                rg = new RegExp(ranges.join('|'), 'g');
                eArray = msg.match(rg);
                if(eArray){
                    for(let i=0;i<eArray.length;i++){
                        let clsn = this.clsn(eArray[i]);
                        msg = msg.replace(eArray[i],`<span class="emoji `+clsn+`"></span> `)
                    }
                }
                return msg;
            },
            clsn(data){
                switch (data){
                    case '😠':return 'emoji1f620';break;
                    case '😩':return 'emoji1f629';break;
                    case '😲':return 'emoji1f632';break;
                }
            }
        }
    }
</script>
<style lang="scss">
    .chat-body{
        position: fixed;top:35px;left:0px;bottom: 60px;width:100%;background-color: #fff;z-index: -1;
        .body-scroll{overflow: hidden;height:545px;}
        li{text-align: left;margin:10px 10px;
            .air{background-color: #e0e2e2;text-align: center;margin: 10px 30px;padding: 5px 0px;border-radius: 25px;
                span{font-size: 12px;color:#fff;}
            }
            .msg{
                span.name{font-size: 12px;vertical-align: super;}
                span.msg{display:inline-block;padding:10px 10px;margin-left:10px;background-color:#DFEAE6;color:#333;border-radius: 10px;font-size: 14px;
                    position:relative;
                    &:before{content: '';position: absolute;top: 10px;left:-6px;width:0px;height:0px;
                        border-top: 6px solid transparent;
                        border-bottom: 6px solid transparent;
                        border-right: 6px solid #DFEAE6;}
                    &:after{content:none;}
                }
            }
            .msgme{text-align: right;
                span.name{float:right;margin-top: 4px;}
                span.msg{margin:0px 15px;
                    position:relative;
                    &:after{content: '';position: absolute;top: 10px;right:-6px;width:0px;height:0px;
                        border-top: 6px solid transparent;
                        border-bottom: 6px solid transparent;
                        border-left: 6px solid #DFEAE6;}
                    &:before{content:none;}
                }
            }
            
            .emoji {background: url(../../static/emoji.png) top left no-repeat;
                width: 20px;height: 20px;display: inline-block;vertical-align: bottom;zoom: 1;
            }
            .emoji1f620 {background-position: -0px -12280px;}
            .emoji1f629 {background-position: -0px -12460px;}
            .emoji1f632 {background-position: -0px -12640px;}
            
        }
    }
</style>
