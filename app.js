import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";


const app = express();
export default app;

dotenv.config({
  path: "./config/config.env",
});



//Using middlewares

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

      cookie: {
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? false : "none",
      },
  })
);

app.use(cookieParser());
app.use(express.json());  
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());
app.enable("trust proxy");



connectPassport();

import userRoute from "./routes/User.js";
import orderRoute from "./routes/Order.js";
import productRoute from './routes/Product.js';
import courseRoute from './routes/Course.js';
import jobRoute from './routes/Job.js';


app.use("/acc/v1", userRoute);
app.use("/acc/v1", orderRoute);
app.use("/acc/v1", productRoute);
app.use("/acc/v1", courseRoute);
app.use("/acc/v1", jobRoute);



app.use(errorMiddleware);