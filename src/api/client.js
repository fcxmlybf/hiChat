import io from 'socket.io-client';
const CHAT = {
    socket:null,
    onlineCount:0,
    username:'',
    msgArr:[],
    init:function(username){
        this.username = username;
        let self = this;
        this.socket = io.connect('http://localhost:9080');
        // console.log(CHAT.socket);
        // console.log(this.socket);
        this.socket.emit('login', {'username':username});

        // this.socket.on("login",function(obj){
        //     console.log(obj);
        // });
        this.socket.on('airing',function(name){
            self.msgArr.push({'msg':'进入了聊天室','username':name,'setclass':0});
        });
        this.socket.on('userNum',function(num){
            //console.log(num);
            self.onlineCount = num;
        });
        this.socket.on('message',function(obj){
            self.msgArr.push(obj);
        });
        this.socket.on('disconnect', function(name) {
            self.msgArr.push({'msg':'退出了聊天室','username':name,'setclass':0});
        });
    },
    submit:function(msg){
        let self = this;
        console.log(self.username+' : '+msg);
        this.socket.emit('message',{'msg':msg,'username':self.username,'setclass':1});
    },
    // closeWin:function(name){
    //     //alert(name);
    //     this.socket.emit('disconnect',{'name':name});
    // }
};



export default CHAT;
