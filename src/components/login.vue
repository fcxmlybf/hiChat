<template lang="html">
    <div class="login">
        <div class="form-div">
            <label>昵称：</label>
            <input v-model="nickName"/>
        </div>
        <a class="sub-btn" @click="sub">
            登录
        </a>
    </div>
</template>
<script>
    import CHAT from '../api/client'
    export default {
        data(){
            return{
                nickName:'',
            }
        },
        methods:{
            sub(){
                if(!this.nickName){
                    alert("请输入昵称！");
                    return;
                }
//                if(localStorage){
//                    localStorage.setItem('nickname',this.nickName);
//                }
                CHAT.init(this.nickName);
                this.$router.push('/chat');
            }
        }
    }
</script>
<style lang="scss">
    .login{
        position: fixed;top:0px;left:0px;bottom: 0px;width:100%;background-color: #fff;
        .form-div{margin-top:10%;
            input{border:1px solid #ccc;line-height: 30px;border-radius: 5px;padding-left:10px;}
        }
        .sub-btn{margin-top:20px;display:inline-block;width: 80%;padding: 10px 0px;text-align: center;color: #fff;background-color: #01A378;
            border-radius: 5px;}
    }
</style>
