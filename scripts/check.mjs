import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {validateTasks,httpsURL} from '../src/shared.js';
async function walk(dir){const result=[];for(const e of await readdir(dir,{withFileTypes:true})){const name=path.join(dir,e.name);if(e.isDirectory())result.push(...await walk(name));else result.push(name);}return result;}
const files=await walk('src');
for(const file of files.filter(f=>f.endsWith('.js'))){const checked=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});assert.equal(checked.status,0,checked.stderr);}
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await readFile(file,'utf8');assert.match(html,/<html lang="zh-CN">/);assert.match(html,/name="viewport"/);assert.match(html,/<main id="main"/);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Duplicate id: '+file);for(const match of html.matchAll(/\b(?:href|src)="([^"#]+)"/g)){const link=match[1];if(/^(https?:|data:|mailto:)/.test(link))continue;const target=path.resolve(path.dirname(file),link.split(/[?#]/)[0]);assert.ok(target.startsWith(path.resolve('src')+path.sep));await stat(target);}}
const snapshot=JSON.parse(await readFile('src/data/repos.json','utf8'));assert.equal(snapshot.items.length,6);for(const r of snapshot.items){for(const key of ['stars','forks','issues'])assert.ok(Number.isInteger(r[key])&&r[key]>=0);assert.equal(r.url,'https://github.com/'+r.repo);}
const resources=JSON.parse(await readFile('src/data/resources.json','utf8'));assert.equal(resources.length,12);assert.equal(new Set(resources.map(r=>r.id)).size,resources.length);resources.forEach(r=>assert.ok(httpsURL(r.url)));
assert.equal(httpsURL('javascript:alert(1)'),null);assert.equal(httpsURL('http://example.com'),null);assert.equal(httpsURL('https://example.com'),'https://example.com/');
const task={id:'test',title:' valid ',category:'docs',note:'test',status:'todo',priority:'normal'};assert.equal(validateTasks([task])[0].title,'valid');assert.throws(()=>validateTasks([task,task]));assert.throws(()=>validateTasks([{...task,status:'invalid'}]));assert.throws(()=>validateTasks([{...task,title:' '} ]));assert.throws(()=>validateTasks(Array(301).fill(task)));
console.log(`PASS: ${files.length} source files, 6 repository records, 12 resource links, local references, JS syntax, task imports and URL restrictions.`);
