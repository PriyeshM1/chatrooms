var Chat = function(socket){
    this.socket = socket;
};

Chat.prototype.sendMessage = function(room, text){
    var message = {
        room: roomtext: text
    };
    this.socket.emit('message', message);
};

Chat.prototype.changeRoom = function(room){
    this.socket.emit('join', {
        newRoom: room
    });
};