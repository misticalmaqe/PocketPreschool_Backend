// const io = require("socket.io")(3000, {
//   cors: {
//     origin: ["http://localhost:8080"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);

//   socket.on("custom-event", (number, stringValue, obj) => {
//     console.log("Received custom event:", number, stringValue, obj);

//     // If you want to broadcast this event to all connected clients (including the sender)
//     io.emit("custom-event-response", { number, stringValue, obj });

//     // If you want to broadcast this event to all connected clients except the sender
//     // socket.broadcast.emit("custom-event-response", { number, stringValue, obj });
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });
