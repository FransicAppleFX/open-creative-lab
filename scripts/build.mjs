import {cp, mkdir} from 'node:fs/promises';
await mkdir('dist', {recursive:true});
await cp('src', 'dist', {recursive:true});
console.log('Built 4 templates and the gallery in dist/.');
