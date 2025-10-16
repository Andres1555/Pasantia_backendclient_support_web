import express from "express";
import cors from "cors";

import routesusers from "./src/users/routes.js";
import routesreport from "./src/report/routes.js";
import routesreportcase from "./src/report_cases/routes.js";
//import routesauth from "./src/auth/routes.js";
import routesreport_users from "./src/report_users/routes.js";
import routesmachines from "./src/machines/routes.js";
import routesspec from "./src/specializations/routes.js";
import routesspec_users from "./src/specialization_users/routes.js";


const app = express();


app.use(cors());
app.use(express.json());

app.use("api/users",routesusers)
app.use("api/report",routesreport)
app.use("api/report_cases",routesreportcase)
//app.use("api/auth",routesauth)
app.use("api/report_users",routesreport_users)
app.use("api/machines",routesmachines)
app.use("api/specializations",routesspec)
app.use("api/specialization_users",routesspec_users)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});