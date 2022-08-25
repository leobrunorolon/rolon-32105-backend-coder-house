const moment = require("moment");

const hoy = moment();
const nacimiento = moment("02/01/1990", "DD/MM/YYYY");
const difA = hoy.diff(nacimiento, "years");
difA;
const difD = hoy.diff(nacimiento, "days");
difD;
