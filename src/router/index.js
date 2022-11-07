import userRouter from "./user.router.js";
import chatbotRouter from "./chatbot.router.js";

export default function initRoute(app) {
  app.use("/api/users/", userRouter);
  app.use("/api/chatbot/", chatbotRouter);
}
