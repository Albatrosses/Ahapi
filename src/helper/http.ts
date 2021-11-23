import axios, { AxiosRequestConfig } from "axios";

export enum HttpMethod {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete",
  Option = "option",
  Patch = "patch"
}

export enum HttpStatusCode {
  Success = 200,
  NotFound = 404
}

export enum HttpStatusText {
  Success = "Success",
  NotFound = "Path Not Found"
}

export const fetchData = async (
  url: string,
  options?: AxiosRequestConfig
): Promise<any> => {
  try {
    const result = await axios({
      url,
      ...options,
    });

    return result.data;
  } catch (e) {
    throw e;
  }
};
