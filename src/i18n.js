import {dictionary,locales,supported,t,setLanguage,currentLanguage} from './translations.js';
const textRecords=new WeakMap(),attributeRecords=new WeakMap(),reverse=new Map();
for(const [zh,values]of dictionary)for(const lang of supported)reverse.set(values[lang],zh);
const staticRecords=new Map();
let observer;
function translate(value){const clean=value.trim();const record=staticRecords.get(clean);return record?record[currentLanguage()]:t(reverse.get(clean)??clean);}
function apply(root=document.body){
 if(!root||root.nodeType!==1)return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode,parent=node.parentElement;
  if(!parent||parent.closest('script,style,[data-no-i18n]'))continue;
  const value=node.nodeValue;if(!value.trim())continue;
  let record=textRecords.get(node);if(!record||record.last!==value)record={original:value,last:value};
  const next=value.match(/^\s*/)[0]+translate(record.original)+value.match(/\s*$/)[0];
  if(next!==value)node.nodeValue=next;record.last=next;textRecords.set(node,record);
 }
 for(const element of [root,...root.querySelectorAll('[placeholder],[aria-label],[title],meta[name="description"]')]){
  if(element.closest('[data-no-i18n]'))continue;
  let records=attributeRecords.get(element)??{};
  for(const attr of ['placeholder','aria-label','title',...(element.tagName==='META'?['content']:[])]){const value=element.getAttribute(attr);if(!value)continue;let record=records[attr];if(!record||record.last!==value)record={original:value,last:value};const next=translate(record.original);if(next!==value)element.setAttribute(attr,next);record.last=next;records[attr]=record;}
  attributeRecords.set(element,records);
 }
 document.documentElement.lang=locales[currentLanguage()];
}
function selectLanguage(lang){
 observer?.disconnect();setLanguage(lang);try{localStorage.setItem('template-lab-language',currentLanguage());}catch{}
 apply(document.head);apply(document.body);
 document.querySelectorAll('[data-language-selector]').forEach(s=>s.value=currentLanguage());
 document.dispatchEvent(new CustomEvent('languagechange',{detail:currentLanguage()}));
 apply(document.body);
 observe();
}
function observe(){observer??=new MutationObserver(changes=>{observer.disconnect();for(const change of changes){if(change.type==='characterData')apply(change.target.parentElement);else if(change.type==='attributes')apply(change.target);else for(const node of change.addedNodes){if(node.nodeType===1)apply(node);else if(node.nodeType===3)apply(node.parentElement);}}observe();});observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']});}
async function init(){
 try{const response=await fetch('data/static-i18n.json');if(response.ok){const records=await response.json();for(const row of records)for(const lang of supported)staticRecords.set(row[lang].trim(),row);}}catch{}
 let preferred='en';try{preferred=localStorage.getItem('template-lab-language')??'en';}catch{}
 for(const select of document.querySelectorAll('[data-language-selector]'))select.addEventListener('change',()=>selectLanguage(select.value));
 selectLanguage(preferred);
}
if(typeof document!=='undefined')init();
