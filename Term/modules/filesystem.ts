import fs, { IDirectoryEntry } from 'indexeddb-fs';

enum Item {
    None,
    File,
    Directory
}
type ItemExists = {
    exists : boolean,
    type: Item
}
export class VFileSystem {
    constructor(public homeDir: string, public cwd: string, public user: string) {
        this.dirExists(homeDir).then((ret)=> {
            if(!ret){
                this.mkdir(`/root/${homeDir}`);
            }
        }).then(()=>{this.pwd = this.cwd});
    }
    async mkdir(dir : string) {
        if(!await this.dirExists(dir)) {
            await fs.createDirectory(dir);
        }
    }
    async exists(ford: string) : Promise<ItemExists> {
        var ret = {exists: false, type:Item.None}
        let isDir = await this.dirExists(ford);
        if(!isDir) {
            let isFile = await this.fileExists(ford);
            ret = {exists: true, type: Item.File}
        } else {
            ret = {exists: true, type: Item.Directory}
        }
        return ret;
    }
    async dirExists(dir: string) : Promise<Boolean> {
        return await fs.isDirectory(dir);
    }
    async fileExists(file: string) : Promise<Boolean> {
        return await fs.isFile(file)
    }
    get pwd() {
        return this.cwd;
    }
    set pwd(wd : string) {
        this.cwd = wd;
    }
    async ls(dir?:string){
        let ret = []
        let lsdir = dir !== undefined ? dir: this.pwd;
        ret.push((await fs.readDirectory(lsdir)).directories);
        ret.push((await fs.readDirectory(lsdir)).files);
        return ret;
    }
    async touch(filename : string) {
        return await fs.writeFile(`${this.pwd}/${filename}`, '');
    }
    async write(filename: string, data: string) {
        return await fs.writeFile(`${this.pwd}/${filename}`, data);
    }
    async read(filename: string) {
        return await fs.readFile(`${this.pwd}/${filename}`);
    }
    async rm(path : string) {
        if(path.indexOf("/") == 0) {
            return await fs.remove(path);
        } else {
            return await fs.remove(`${this.pwd}/${path}`);
        }
    }
}