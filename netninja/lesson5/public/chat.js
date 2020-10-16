//make connection
const socket = io.connect("http://localhost:4000");

//query DOM
const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

//emit events
btn.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener("keypress", () => {
    socket.emit("typing", handle.value);
})
//listen for events
socket.on("chat", (data) => {
    //output to DOM
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>"+ data.handle +": </strong>"+ data.message+"</p>";
    
});

//listen for keypress event
socket.on("typing", (data) => {
    feedback.innerHTML = "<p><em>"+ data+" istyping a message... </em></p>";
});