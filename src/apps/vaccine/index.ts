import * as Koa from 'koa';
import Router = require("koa-router");
import { AppPath } from "src/helper/enum";
import HospitalListController from "./controller/hospitalList/HospitalListController";

export default class VaccineController {
  private koa: Koa;
  constructor(koa: Koa) {
    this.koa = koa;
  }
  
  public register() {
    const router = new Router({
      prefix: AppPath.Vaccine
    });
    const routes = [new HospitalListController(router)];
    routes.forEach(route => route.register());
    this.koa.use(router.routes());
    this.koa.use(router.allowedMethods());
  }
}