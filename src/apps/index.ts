import * as Koa from 'koa';
import Router = require("koa-router");
import { HttpStatusCode, HttpStatusText } from "src/helper/http";
import VaccineController from "./vaccine";

export default class AppController {
  private router: Router;
  constructor(koa: Koa) {
    this.router = new Router();
    this.register(koa);
    this.access();
  }
  
  private register(koa: Koa) {
    const apps = [new VaccineController(koa)];
    apps.forEach(app => app.register());
    koa.use(this.router.routes());
    koa.use(this.router.allowedMethods());
  }

  private access() {
    this.router.all("*", ctx => {
      ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin);
      ctx.set("Access-Control-Allow-Credentials", "true");
      ctx.set("Access-Control-Allow-Headers", "authorization");
      ctx.status = HttpStatusCode.NotFound;
      ctx.body = HttpStatusText.NotFound;
    });
  }
}