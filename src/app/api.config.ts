import { HttpHeaders } from "@angular/common/http";

const railUrl: string = "https://api.wmata.com/Rail.svc/json";
const predictionUrl: string = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction"

const httpOptions = {
  headers: new HttpHeaders({
    "api_key": "aab5ed5fd64347e5ac8cd80c015b1b42",
  })
};

export { railUrl, predictionUrl, httpOptions };
