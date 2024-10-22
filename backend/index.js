//packages haru ho yo 
import express, { urlencoded } from "express";//urlencoded le url ma aako data parse garxa
import { config } from "dotenv";//loads environment variables to process.env by config call
import morgan from "morgan";//morgan is a express js based logging tool
import cors from "cors";//cors is implemented to verify if the origin making the request is valid to make such request(CSRF prevention & SOP's limitations resolved)

//all of these are file imports
import userRoute from "./src/routes/userRoute.js";
import issueRoute from "./src/routes/issueRoute.js";
import protect from "./src/middlewares/authorize.js";

config();
const app = express();

//using cors and allowing requests from every origin (not recommended *vulnerable to CSRF and XSS attacks*)
app.use(
  cors({
    origin: "*",
  }),
);

//middlwares from express
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//testing if the server is running
app.get("/", (req, res) => {
  res.status(200).json({
    message: "message from server",
  });
});

//using the routes from the directory routes
app.use("/api/user", userRoute);
app.use("/api/issue", protect, issueRoute);

//initializing a server
app.listen(process.env.PORT, () => {
  console.log(
    `  server listening on port http://localhost:${process.env.PORT}`,
  );
});
