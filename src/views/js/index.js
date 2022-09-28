const socket = io();

const checkSocketStatus = () => {
    console.log("Estatus: ", socket.connected);
}

socket.on("connect", () => {
    console.log("Se conecto: ", socket.id);
});


socket.on("disconnect", () => {
    console.log("disconnect: ", socket.id)
    checkSocketStatus();
})

socket.on("connect_error", () => {
    console.log("/")
})

socket.io.on("reconnection_attempt", () => {
    console.log("connect try?");
})

socket.io.on("reconnect", () => {
    console.log("Reconnected");
});




