import {cp, mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import {t} from '../src/translations.js';
await mkdir('dist', {recursive:true});
await cp('src', 'dist', {recursive:true});
const records=new Map();
function translate(text){const clean=text.trim();if(!clean)return text;const row=Object.fromEntries(['zh','en','ja','ko'].map(lang=>[lang,t(clean,lang)]));if(/[\u3400-\u9fff]/u.test(clean))records.set(clean,row);return text.replace(clean,row.en);}
for(const name of await readdir('dist')){
 if(!name.endsWith('.html'))continue;
 let html=await readFile('dist/'+name,'utf8');
 // Preserve canonical option values independently from their displayed language.
 html=html.replace(/<option>([^<]+)<\/option>/g,(_,label)=>`<option value="${label}">${label}</option>`);
 html=html.replace(/>([^<>]+)</g,(_,text)=>'>'+translate(text)+'<');
 html=html.replace(/\b(placeholder|aria-label|content)="([^"]+)"/g,(_,attr,value)=>`${attr}="${translate(value)}"`);
 html=html.replace('lang="zh-CN"','lang="en-US"');
 html=html.replace('value="文档"','value="Documentation"');
 const selector='<label class="language-control" data-no-i18n><span class="screen-reader">Interface language</span><select data-language-selector aria-label="Interface language"><option value="en">English</option><option value="zh">中文</option><option value="ja">日本語</option><option value="ko">한국어</option></select></label>';
 html=html.replace('</header>',selector+'</header>').replace('</body>','<script type="module" src="i18n.js"></script></body>');
 await writeFile('dist/'+name,html);
}
await writeFile('dist/data/static-i18n.json',JSON.stringify([...records.values()],null,2));
console.log('Built 4 templates and the gallery in dist/.');
