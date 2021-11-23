import { domain, requestConfig } from "src/apps/vaccine/helper/config";
import { VaccinePath } from "src/apps/vaccine/helper/enum";
import { fetchData, HttpMethod } from "src/helper/http";

export default class GetHospitalReserveService {
  public method: string;
  public path: string;
  constructor() {
    this.method = HttpMethod.Get;
    this.path = VaccinePath.HospitalReserve;
  }
  
  public async service(ctx) {
    const result = await fetchData(domain, requestConfig.hospitalReserve);
    ctx.body = result;
  }
}