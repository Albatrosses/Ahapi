import * as serverless from "aws-serverless-koa";
import app from "src/index";

export const handler = serverless(app.koa);