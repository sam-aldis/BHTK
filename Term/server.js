"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import process from "process";
import pty from "node-pty";
const PORT = 7070;
const WS_PORT = 7171;
const app = express();
const BASE_DIR = process.cwd();
app.use(cors());
const ptyProccess = pty.spawn("bash", [], {
  name: "xterm-color",
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});
ptyProccess.write('export PS1=""\r\n');
ptyProccess.write('export PS2=""\r\n');
var stdout;
const wss = new WebSocketServer({
  port: WS_PORT,
  path: "/",
  host: "localhost"
});
wss.on("connection", (socket, req) => {
  console.log(`connection requested`);
  socket.on("message", (data, bin) => __async(void 0, null, function* () {
    bin ? console.log("binary data") : console.log(data.toString());
    ptyProccess.onData((stdout2) => {
      socket.send(stdout2);
      stdout2 = "";
    });
    if (data.toString().indexOf("!") == 0) {
      let cmd = data.toString().substring(1, data.toString().length);
      try {
        ptyProccess.write(cmd + "\r");
      } catch (e) {
        stdout = "Command Not Found";
        socket.send(stdout);
      }
      cmd = "";
    }
  }));
});
app.get("/index.js", (req, res) => {
  res.sendFile(`${BASE_DIR}/index.js`);
});
app.get("/index.css", (req, res) => {
  res.sendFile(`${BASE_DIR}/index.css`);
});
app.get("/", (req, res) => {
  console.log(req);
  res.sendFile(`${BASE_DIR}/index.html`);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
