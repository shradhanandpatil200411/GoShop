const app = require("./Src/app");
const connectDB = require("./Src/DB/DB");

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`server is start on ${process.env.PORT} port`);
});
