import Router = require("koa-router");
import GetHospitalListService from "./service/GetHospitalListService";
import GetHospitalReserveService from "./service/GetHospitalReserveService";

export default class HospitalListController {
  private router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  
  public register() {
    const services = [new GetHospitalListService(), new GetHospitalReserveService()];
    services.forEach(service => this.router[service.method](service.path, service.service));
  }
}