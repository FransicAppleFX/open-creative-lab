import {writeFile,mkdir} from 'node:fs/promises';
import {repositories} from './repositories.mjs';
const {execFileSync}=await import('node:child_process');
// curl uses the Windows certificate store and the session's configured proxy.
const items=[];
for(const item of repositories){
 const raw=execFileSync(process.platform==='win32'?'curl.exe':'curl',['--fail','--silent','--show-error','--max-time','30','-H','Accept: application/vnd.github+json','https://api.github.com/repos/'+item.repo],{encoding:'utf8',windowsHide:true});
 const r=JSON.parse(raw);
 if(r.full_name.toLowerCase()!==item.repo.toLowerCase()||!Number.isInteger(r.stargazers_count))throw Error('Unexpected repository API response');
 items.push({...item,name:r.name,url:r.html_url,stars:r.stargazers_count,forks:r.forks_count,issues:r.open_issues_count,license:r.license?.spdx_id??'未标识',updatedAt:r.updated_at});
}
await mkdir('src/data',{recursive:true});
await writeFile('src/data/repos.json',JSON.stringify({fetchedAt:new Date().toISOString(),source:'GitHub REST API /repos/{owner}/{repo}',items},null,2)+'\n');
console.log('Updated public GitHub snapshot:',items.length,'repositories.');
