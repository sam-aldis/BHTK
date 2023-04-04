import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import os from 'os';
import process from 'process'
import {$} from 'execa';
import pty, {spawn} from 'node-pty'
// Server Setup
const PORT = 7070;
const WS_PORT = 7171;
const app = express();
const BASE_DIR = process.cwd();
// middleware
app.use(cors());

// nodepty
const ptyProccess = pty.spawn('bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env as {},
})
ptyProccess.write('export PS1=""\r\n');
ptyProccess.write('export PS2=""\r\n');

// WebSockets
var stdout : String;
const wss = new WebSocketServer({
    port: WS_PORT,
    path: "/",
    host: "localhost",
});
wss.on('connection', (socket, req) => {
    console.log(`connection requested`);
    socket.on('message', async (data,bin)=> {
        bin? console.log("binary data") : console.log(data.toString());
        ptyProccess.onData((stdout) => {
            socket.send(stdout);
            stdout = "";
            //process.stdout.write(data);
        });
        if(data.toString().indexOf("!") == 0) {
            let cmd = data.toString().substring(1,data.toString().length);
            try {
                ptyProccess.write(cmd + '\r');
                //var {stdout} = await $`${cmd}`
                //socket.send(stdout);
            } catch {
                stdout = "Command Not Found";
                socket.send(stdout);
            }
            cmd = "";
        }
    });
})

// Server Routes

app.get('/index.js', (req,res)=>{
    res.sendFile(`${BASE_DIR}/index.js`);
})
app.get('/index.css', (req,res)=>{
    res.sendFile(`${BASE_DIR}/index.css`);
})

app.get('/', (req,res)=>{
    console.log(req);
    res.sendFile(`${BASE_DIR}/index.html`);
});

// Start Server

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})