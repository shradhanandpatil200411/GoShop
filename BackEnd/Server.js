const app = require("./Src/app");
const connectDB = require("./Src/DB/DB");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./Src/Service/Ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Your Frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("Disconnect");
  });

  socket.on("ai-message", async (data) => {
    const response = await generateResponse(data.prompt);
    socket.emit("ai-response", { response });
  });
});

connectDB();
httpServer.listen(process.env.PORT, () => {
  console.log(`server is start on ${process.env.PORT} port`);
});
