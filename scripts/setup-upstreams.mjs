import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import path from 'node:path';
const root=process.cwd();
const lock=JSON.parse(await readFile('upstreams.json','utf8'));
function run(args,cwd=root,input){return new Promise((resolve,reject)=>{const child=spawn('git',['-c','credential.helper=',...args],{cwd,windowsHide:true,env:{...process.env,GIT_TERMINAL_PROMPT:'0'}});let out='',err='';child.stdout.on('data',d=>out+=d);child.stderr.on('data',d=>err+=d);child.on('error',reject);child.on('close',code=>code===0?resolve(out.trim()):reject(Error(`git ${args[0]} failed: ${err.slice(-1200)}`)));child.stdin.end(input);});}
await mkdir('third_party',{recursive:true});
for(const item of lock.items){
 const destination=path.join(root,'third_party',item.name);
 let exists=true;try{await access(path.join(destination,'.git'));}catch{exists=false;}
 if(!exists){console.log('Cloning source reference:',item.repo,item.ref);await run(['clone','--filter=blob:none','--no-checkout','--depth','1','--branch',item.ref,item.url+'.git',destination]);}
 await run(['sparse-checkout','init','--no-cone'],destination);
 await run(['sparse-checkout','set','--no-cone','--stdin'],destination,'/LICENSE*\n/README*\n/package.json\n/NOTICE*\n');
 await run(['checkout','--detach',item.ref],destination);
 item.commit=await run(['rev-parse','HEAD'],destination);
 let registered=false;try{registered=(await readFile('.gitmodules','utf8')).includes('[submodule "third_party/'+item.name+'"]');}catch{}
 if(!registered)await run(['submodule','add','--force',item.url+'.git','third_party/'+item.name]);
 else await run(['add','--','third_party/'+item.name]);
 await writeFile('upstreams.json',JSON.stringify(lock,null,2)+'\n');
 console.log('Pinned:',item.name,item.commit);
}
await writeFile('upstreams.json',JSON.stringify(lock,null,2)+'\n');
await run(['submodule','absorbgitdirs']);
console.log('All six source references are registered as real Git submodules.');
