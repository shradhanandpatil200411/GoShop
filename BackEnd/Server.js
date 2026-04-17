const app = require("./Src/app");
const connectDB = require("./Src/DB/DB");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./Src/Service/Ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONT_END_URL,
    credentials: true,
  },
});

let chatHistory = [];

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("Disconnect");
  });

  socket.on("ai-message", async (data) => {
    try {
      chatHistory.push({
        role: "user",
        parts: [{ text: data }],
      });
      const response = await generateResponse(chatHistory);
      socket.emit("ai-response", { response });
      chatHistory.push({
        role: "model",
        parts: [{ text: response }],
      });
    } catch (error) {
      console.log(error);
      socket.emit("ai-response", {
        response: "Sorry temporary not available 🤖",
      });
    }
  });
});
connectDB();
httpServer.listen(process.env.PORT, () => {
  console.log(`server is start on ${process.env.PORT} port`);
});
