<template lang="html">
    <div class="chat-body">
        <div class="body-scroll" ref="bodyWrapper">
            <ul>
                <li class="msg-box" v-for="item in msgArr">
    
                    <div :class="{'msg':item.setclass==1,'air':item.setclass==0,'msgme':item.username==selfName&&item.setclass==1}">
                        <span class="name">{{item.username}}</span>
                        <span class="msg">
                            {{item.msg}}
                        </span>
                    </div>
                    
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
    import Vue from 'vue'
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
        created(){
            this.$nextTick(()=>{
                this._initScroll();
            });
            
//            Vue.nextTick(()=>{
//                this.bodyScroll.initscroll();
//            });
        },
        methods:{
            _initScroll(){
                this.bodyWrapper = new BScroll(this.$refs.bodyWrapper,{
                    click:true,
                });
            }
        }
    }
</script>
<style lang="scss">
    .chat-body{
        position: fixed;top:35px;left:0px;bottom: 60px;width:100%;background-color: #fff;z-index: -1;
        .body-scroll{overflow: scroll;height:100%;}
        ul,li{list-style: none;margin:0px;padding:0px;}
        li{text-align: left;margin:10px 10px;
            .air{background-color: #e0e2e2;text-align: center;margin: 10px 30px;padding: 5px 0px;border-radius: 10px;
                span{font-size: 12px;color:#fff;}
            }
            .msg{
                span.name{font-size: 14px;}
                span.msg{display:inline-block;padding:10px 10px;background-color:#DFEAE6;color:#333;border-radius: 10px;font-size: 14px;}
            }
            .msgme{text-align: right;
                span.name{float:right;}
                span.msg{margin:0px 5px;}
            }
            
            
        }
    }
</style>
