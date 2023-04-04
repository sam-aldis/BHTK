import xterm, {Terminal, LogLevel, ITerminalAddon, ITerminalOptions} from 'xterm';
import 'xterm/css/xterm.css'
import { VFileSystem } from './modules/filesystem';



const opts : ITerminalOptions = {
    cursorBlink: true,
    cursorStyle: 'block',
    logLevel: 'error'
}
const ws = new WebSocket('ws://localhost:7171/');
const term = new Terminal(opts);

const termElement = document.getElementById("xterm");
// Consts 

const PROMPT = "~BHTK ~> "

// Vars
var lineBuffer : string = "";
var stdout : string = "";

// Virtual FS
const vfs = new VFileSystem('/bhtk','/bhtk','unfazed');
// Commands

const commands = {
    "clear" : ()=>{
        term.clear();
        lineBuffer = "";
        term.write(PROMPT);
    },
    "reload": ()=>{
        window.location.reload();
    },
    "ls": async ()=> {
        await vfs.ls()
    }
}
term.open(termElement as HTMLElement);
term.write(PROMPT);
term.onKey((data, err)=>{
    console.log(lineBuffer);
    if(data.domEvent.keyCode !== 13) {
        if(data.domEvent.keyCode === 8) {
            term.write(' \b\b');
            if(lineBuffer.length > 0){
                lineBuffer = lineBuffer.substring(0,lineBuffer.length - 1);
            }
        } else{
            term.write(data.key);
            lineBuffer += data.key;
        }
    } else {
        term.writeln("");
        if(lineBuffer in commands) {
            console.log(`${lineBuffer} is in commands`);
            console.log(eval(`commands.${lineBuffer}()`));
        } 
        else if (lineBuffer.toString().indexOf("~") == 0) {
            term.writeln(eval(lineBuffer.toString().substring(1,lineBuffer.length)));
        }
        else if(lineBuffer.toString().indexOf("!") == 0) {
            ws.send(lineBuffer);
        } else {
            term.writeln(`${lineBuffer} not found, please type .help for more info`)
            term.write(PROMPT)
        }
        lineBuffer = "";
    }
});
ws.onmessage= (ev) =>{ 
    stdout = ev.data;
    console.log(ev.data.toString());
    term.write(stdout);
    console.log(`stdout == ${stdout}`);
    stdout = "";
}