import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

export default function configs(app) {
  (() => ({
    convertDataType() {
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
    },
    logger() {
      app.use(
        morgan(":method :url :status :res[content-length] - :response-time ms")
      );
    },
    cors() {
      app.use(cors());
    },

    run() {
      this.convertDataType();
      this.logger();
      this.cors();
    },
  }))().run();
}
