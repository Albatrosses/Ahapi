import { HPVCategory } from "./enum";

export const domain = "https://cloud.cn2030.com/sc/wx/HandlerSubscribe.ashx";

const headers = {
  "Accept-Encoding": "gzip, deflate, br",
  "Referer": "https://servicewechat.com/wx2c7f0f3c30d99445/91/page-frame.html",
  "Cookie": "ASP.NET_SessionId=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzY3MDEzOTQuNTYyMjE5MSwiZXhwIjoxNjM2NzA0OTk0LjU2MjIxOTEsInN1YiI6IllOVy5WSVAiLCJqdGkiOiIyMDIxMTExMjAzMTYzNCIsIlVzZXJpZCI6MTM3MTYyNiwiQ2F0IjoyLCJLZXkiOiIxYmM0NTU2ODE0NDZmMDMyIiwiT3BlbmlkIjoib3FyNW81SlQ4bjB6QnpMYV9kcDlqbEwydUNKRSIsIklzYmxhY2siOmZhbHNlLCJVbmlvbmlkIjoib1UyNlh0ektnTF9jNmpnNkc2MkJzMU5lQl9TayIsIklwIjoiMTExLjE4LjE5NC4yNiIsIkd1aWQiOm51bGwsIk14aWQiOm51bGwsImlnbm9yZSI6ZmFsc2UsIngiOjB9.IqN64Nz26KeYKTDDAAT4PnVLDd4XPwMP9ko96rb-UIg",
  "Content-type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
  "Host": "cloud.cn2030.com",
  "Connection": "Keep-Alive"
};

export const requestConfig = {
  hospitalList: {
    params: {
      act: "CustomerList",
      city: JSON.stringify(["陕西省","西安市","莲湖区"]),
      lat: 34.34127,
      lng: 108.93984,
      cityCode: 610100,
      product: HPVCategory.Four
    },
    headers,
  },
  hospitalReserve: {
    params: {
      act: "GetCustSubscribeDateAll",
      pid: HPVCategory.Four,
      id: 5407,
      month: 202111
    },
    headers,
  }
}