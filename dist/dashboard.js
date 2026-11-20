import {t,currentLanguage,locales} from './translations.js';
import {$,el,download,external,readLocal,saveLocal,toast} from './shared.js';
let snapshot,items=[];
const fmt=n=>new Intl.NumberFormat(locales[currentLanguage()],{notation:'compact',maximumFractionDigits:1}).format(n);
const number=n=>Number(n).toLocaleString(locales[currentLanguage()]);
function filtered(){const query=$('#repo-search').value.trim().toLowerCase(),category=$('#repo-category').value,sort=$('#repo-sort').value;return items.filter(r=>(category==='all'||r.category===category)&&`${r.repo} ${r.description} ${t(r.description)} ${t(r.category)}`.toLowerCase().includes(query)).sort((a,b)=>sort==='name'?a.repo.localeCompare(b.repo):b[sort]-a[sort]);}
function render(){
 const data=filtered();$('#result-count').textContent=data.length+' 个精选项目';$('#repo-empty').hidden=data.length>0;
 $('#kpis').replaceChildren();
 const total=key=>data.reduce((sum,r)=>sum+r[key],0);
 for(const [label,value,note]of [['观察项目',data.length,'当前筛选结果'],['累计 Stars',total('stars'),'GitHub 公共累计值'],['累计 Forks',total('forks'),'仓库分叉数量'],['开放 Issues + PR',total('issues'),'GitHub open_issues_count']]){const card=el('div',undefined,'panel kpi');card.append(el('span',label),el('strong',number(value),'number'),el('span',note));$('#kpis').append(card);}
 $('#bars').replaceChildren();const max=Math.max(1,...data.map(r=>r.stars));
 for(const r of [...data].sort((a,b)=>b.stars-a.stars)){const row=el('div',undefined,'chart-bar-row'),track=el('div',undefined,'chart-track'),fill=el('div',undefined,'chart-fill');fill.style.width=(100*r.stars/max)+'%';track.append(fill);row.append(el('span',r.name),track,el('span',fmt(r.stars),'chart-value'));$('#bars').append(row);}
 if(!data.length)$('#bars').append(el('p','没有匹配数据。','empty'));
 $('#categories').replaceChildren();
 for(const name of ['AI 工具','自动化','云开发','前端设计']){const count=data.filter(r=>r.category===name).length;const group=el('div',undefined,'category-row'),row=el('div',undefined,'row'),bar=el('div',undefined,'progress'),fill=el('i');fill.style.width=(data.length?count/data.length*100:0)+'%';bar.append(fill);row.append(el('span',name),el('b',String(count)));group.append(row,bar);$('#categories').append(group);}
 $('#repo-table').replaceChildren();
 for(const r of data){const row=el('tr'),cell=el('td');cell.append(external(r.url,r.repo));row.append(cell);for(const value of [r.category,number(r.stars),number(r.forks),number(r.issues),r.license==='NOASSERTION'?'自定义 / 查看仓库':r.license])row.append(el('td',value));$('#repo-table').append(row);}
}
function valid(s){return s&&typeof s.fetchedAt==='string'&&!Number.isNaN(Date.parse(s.fetchedAt))&&Array.isArray(s.items)&&s.items.length===6&&s.items.every(r=>typeof r.repo==='string'&&/^https:\/\/github\.com\//.test(r.url)&&['stars','forks','issues'].every(k=>Number.isFinite(r[k])&&r[k]>=0));}
function status(prefix='数据快照'){$('#data-status').textContent=`${prefix} · ${new Date(snapshot.fetchedAt).toLocaleString(locales[currentLanguage()],{timeZone:'Asia/Shanghai'})}（北京时间） · 来源：GitHub 公共 API。样本名单固定；刷新不提供历史涨幅。`;}
async function init(){try{const response=await fetch('data/repos.json');if(!response.ok)throw Error();snapshot=await response.json();if(!valid(snapshot))throw Error();const cache=readLocal('pulse-snapshot-v1',null);if(valid(cache)&&Date.parse(cache.fetchedAt)>Date.parse(snapshot.fetchedAt))snapshot=cache;items=snapshot.items;status();render();}catch{$('#data-status').textContent='数据加载失败，请刷新页面重试。';$('#refresh').disabled=true;$('#export-csv').disabled=true;}}
for(const id of ['repo-search','repo-category','repo-sort'])$('#'+id).addEventListener(id==='repo-search'?'input':'change',render);
$('#refresh').addEventListener('click',async()=>{
 const button=$('#refresh');button.disabled=true;button.textContent='正在刷新…';
 try{const next=await Promise.all(items.map(async old=>{const response=await fetch('https://api.github.com/repos/'+old.repo,{headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error(response.status===403||response.status===429?'GitHub 公共 API 暂时限流。':'GitHub 请求失败。');const r=await response.json();if(r.full_name?.toLowerCase()!==old.repo.toLowerCase()||!Number.isInteger(r.stargazers_count))throw Error('数据格式不匹配。');return {...old,stars:r.stargazers_count,forks:r.forks_count,issues:r.open_issues_count,license:r.license?.spdx_id??'未标识',updatedAt:r.updated_at};}));snapshot={...snapshot,fetchedAt:new Date().toISOString(),items:next};items=next;saveLocal('pulse-snapshot-v1',snapshot);status('已手动刷新');render();toast('已刷新全部项目的公开指标。');}
 catch(error){$('#data-status').textContent=`刷新未完成，保留上次完整快照（${new Date(snapshot.fetchedAt).toLocaleString(locales[currentLanguage()])}）。${error.message} 请稍后重试。`;}
 finally{button.disabled=false;button.textContent='刷新 GitHub 数据';}
});
$('#export-csv').addEventListener('click',()=>{const clean=value=>'"'+String(value).replace(/"/g,'""')+'"';const rows=[['仓库','分类','Stars','Forks','开放Issues和PR','来源','快照时间'],...filtered().map(r=>[r.repo,r.category,r.stars,r.forks,r.issues,r.url,snapshot.fetchedAt])];download('community-snapshot.csv','\uFEFF'+rows.map(row=>row.map(clean).join(',')).join('\r\n'),'text/csv;charset=utf-8');});
document.addEventListener('languagechange',()=>{if(snapshot){status();render();}});
init();
