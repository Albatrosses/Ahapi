import { map } from "lodash";
import { domain, requestConfig } from "src/apps/vaccine/helper/config";
import { VaccinePath } from "src/apps/vaccine/helper/enum";
import { fetchData, HttpMethod } from "src/helper/http";

export default class GetHospitalListService {
  public method: string;
  public path: string;
  constructor() {
    this.method = HttpMethod.Get;
    this.path = VaccinePath.HospitalList;
  }
  
  public async service(ctx) {
    const result = await fetchData(domain, requestConfig.hospitalList);
    const hospitalList = map(result.list, hospital => ({
      hospitalId: hospital.id,
      hospitalName: hospital.cname
    }))
    ctx.body = hospitalList;
  }
}