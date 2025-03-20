import { http, HttpResponse } from "msw";
import { data } from "./data";

export const handlers = [
  http.get("http://www.example.com/hotels", () => {
    return HttpResponse.json(data);
  }),
];
