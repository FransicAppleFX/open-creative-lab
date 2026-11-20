import {$,$$,el,readLocal,saveLocal,download,fillSelect,validateTasks,toast} from './shared.js';
const key='common-ground-tasks-v1';
const seed=[{id:'demo-docs',title:'为快速入门补一个完整示例',category:'文档',note:'演示任务：从安装到第一次运行，检查说明是否可复现。',priority:'high',status:'todo'},{id:'demo-a11y',title:'检查移动端和键盘操作',category:'设计',note:'演示任务：测试焦点、表单标签与窄屏排版。',priority:'normal',status:'todo'},{id:'demo-guide',title:'整理社区贡献指南',category:'社区',note:'演示任务：列出提 Issue、提交 PR 和行为准则的入口。',priority:'normal',status:'doing'},{id:'demo-data',title:'核验资源链接与许可证',category:'社区',note:'演示任务：以项目官方文档为准，标记更新时间。',priority:'high',status:'doing'},{id:'demo-scope',title:'确定最小模板范围',category:'规划',note:'演示任务：完成用途、边界和数据保存方式说明。',priority:'low',status:'done'}];
let tasks;try{tasks=validateTasks(readLocal(key,seed));}catch{tasks=structuredClone(seed);toast('浏览器保存内容无效，已使用演示数据；未覆盖原记录。');}
let editing=null;const dialog=$('#task-dialog'),form=$('#task-form');
const states=[['todo','待开始'],['doing','进行中'],['done','已完成']],priorities={high:'高优先',normal:'普通',low:'低优先'};
function persist(){saveLocal(key,tasks);render();}
function open(task){editing=task?.id??null;form.reset();for(const name of ['title','category','note','status','priority'])if(task)form.elements[name].value=task[name];$('#task-dialog-title').textContent=task?'编辑贡献任务':'新建贡献任务';$('#delete-task').hidden=!task;dialog.showModal();}
function render(){
 const query=$('#task-search').value.toLowerCase().trim(),priority=$('#priority-filter').value,visible=tasks.filter(t=>(priority==='all'||t.priority===priority)&&`${t.title} ${t.category} ${t.note}`.toLowerCase().includes(query));
 $('#board-summary').replaceChildren();for(const [label,count]of [['全部任务',tasks.length],['进行中',tasks.filter(t=>t.status==='doing').length],['已完成',tasks.filter(t=>t.status==='done').length]]){const n=el('span',label);n.append(el('b',String(count)));$('#board-summary').append(n);}
 $('#kanban').replaceChildren();
 for(const [state,label]of states){const column=el('section',undefined,'column'),heading=el('div',undefined,'column-head');const group=visible.filter(t=>t.status===state);heading.append(el('h2',label),el('span',String(group.length),'column-count'));column.append(heading);
  for(const task of group){const card=el('article',undefined,'task'),top=el('div',undefined,'row'),bottom=el('div',undefined,'task-bottom'),select=el('select'),edit=el('button','编辑','edit-task');top.append(el('span',task.category,'small muted'),el('span',priorities[task.priority],'badge priority-'+task.priority));select.setAttribute('aria-label',task.title+'：修改状态');fillSelect(select,states,task.status);select.addEventListener('change',()=>{const focusedId=task.id;task.status=select.value;persist();const replacement=[...document.querySelectorAll('select[data-task]')].find(n=>n.dataset.task===focusedId);replacement?.focus();});select.dataset.task=task.id;edit.addEventListener('click',()=>open(task));edit.setAttribute('aria-label','编辑：'+task.title);bottom.append(select,edit);card.append(top,el('h3',task.title),el('p',task.note||'暂无说明'),bottom);column.append(card);}
  if(!group.length)column.append(el('p',query||priority!=='all'?'没有匹配任务。':'还没有任务。','empty small'));$('#kanban').append(column);
 }
}
$('#add-task').addEventListener('click',()=>{if(tasks.length>=300){toast('已达到 300 项任务上限，请先导出或整理。');return;}open();});
form.addEventListener('submit',event=>{event.preventDefault();const values=Object.fromEntries(new FormData(form));const task={...values,id:editing??crypto.randomUUID()};try{validateTasks([task]);}catch(error){toast(error.message);return;}if(editing)tasks=tasks.map(t=>t.id===editing?task:t);else tasks.push(task);persist();dialog.close();toast('任务已保存到当前浏览器。');});
$('#delete-task').addEventListener('click',()=>{if(confirm('删除这项任务？此操作可通过已导出的备份恢复。')){tasks=tasks.filter(t=>t.id!==editing);persist();dialog.close();}});
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>dialog.close()));
$('#task-search').addEventListener('input',render);$('#priority-filter').addEventListener('change',render);
$('#export-tasks').addEventListener('click',()=>download('common-ground-backup.json',JSON.stringify({version:1,exportedAt:new Date().toISOString(),tasks},null,2)));
$('#import-tasks').addEventListener('click',()=>$('#task-file').click());
$('#task-file').addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;$('#board-error').hidden=true;try{if(file.size>1048576)throw Error('备份文件不能超过 1 MB。');const data=JSON.parse(await file.text());if(data.version!==1)throw Error('备份版本不受支持。');const next=validateTasks(data.tasks);if(confirm(`导入 ${next.length} 项任务将替换当前看板。确定继续？`)){tasks=next;persist();toast('备份已导入。');}}catch(error){$('#board-error').textContent=error.message;$('#board-error').hidden=false;}finally{event.target.value='';}});
render();
