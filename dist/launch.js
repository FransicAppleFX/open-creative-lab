import {$,$$} from './shared.js';
const descriptions={weekly:'收集本周关注的仓库 → 按主题整理 → 阅读项目更新 → 撰写并分享周报。',launch:'写清目标用户 → 展示核心使用场景 → 准备文档与演示 → 开放社区反馈。',learn:'选择一个主题 → 找到官方入门指南 → 完成可复现练习 → 记录学习笔记。'};
const dialog=$('#demo-dialog');
function render(){$('#demo-output').textContent=descriptions[$('#demo-scenario').value];}
$('#launch-demo').addEventListener('click',()=>{render();dialog.showModal();});
$('#demo-scenario').addEventListener('change',render);
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
