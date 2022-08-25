const http = require("http");

const server = http.createServer((req, res) => {
  if (hora >= 6 && hora <= 12) {
    res.end(console.log("Buenas dias"));
  } else if (hora >= 13 && hora <= 19) {
    res.end(console.log("Buenas tardes"));
  } else {
    res.end(console.log("Buenas noches"));
  }
});

server.listen(8080, () => {
  console.log("servidor activo");
});
