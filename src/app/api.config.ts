import { HttpHeaders } from "@angular/common/http";

const baseUrl: string = "https://api.wmata.com/Rail.svc/json";

const httpOptions = {
  headers: new HttpHeaders({
    "api_key": "aab5ed5fd64347e5ac8cd80c015b1b42",
  })
};

export { baseUrl, httpOptions };
