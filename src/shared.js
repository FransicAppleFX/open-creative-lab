import {t} from './translations.js';
export const $ = s => document.querySelector(s);
export const $$ = s => [...document.querySelectorAll(s)];
export function el(tag, text, cls) {const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
export function readLocal(key,fallback) {try {const value=JSON.parse(localStorage.getItem(key));return value??fallback;}catch{return fallback;}}
export function saveLocal(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{toast('浏览器未允许保存；请导出备份。');return false;}}
export function toast(text){$('.toast')?.remove();const n=el('div',t(text),'toast');n.setAttribute('role','status');document.body.append(n);setTimeout(()=>n.remove(),4500);}
export function download(name,contents,type='application/json'){const url=URL.createObjectURL(new Blob([contents],{type}));const a=el('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
export function httpsURL(value){try{const u=new URL(value);return u.protocol==='https:'?u.href:null;}catch{return null;}}
export function external(href,text){const a=el('a',text);a.href=href;a.target='_blank';a.rel='noopener noreferrer';return a;}
export function fillSelect(select, values, current){for(const [value,label]of values){const option=el('option',label);option.value=value;select.append(option);}select.value=current;}
export function showError(node,message){node.textContent=message;node.hidden=false;}
export function validateTasks(items){if(!Array.isArray(items)||items.length>300)throw Error('最多可导入 300 项任务。');const ids=new Set();return items.map(t=>{if(!t||typeof t.title!=='string'||!t.title.trim()||t.title.length>100||!['todo','doing','done'].includes(t.status)||!['high','normal','low'].includes(t.priority)||typeof t.id!=='string'||!t.id||t.id.length>100||ids.has(t.id))throw Error('任务格式无效或 ID 重复。');ids.add(t.id);return {id:t.id,title:t.title.trim(),note:String(t.note??'').slice(0,300),status:t.status,priority:t.priority,category:String(t.category??'社区').slice(0,40)};});}
