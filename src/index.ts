import { WakaTimeApi } from "./controllers/wakatime.controller";

const wt = new WakaTimeApi(process.env.KEY);

wt.getMe().then((res) => {
  console.log("52", res);
});
