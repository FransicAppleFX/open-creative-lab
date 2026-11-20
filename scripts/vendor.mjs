import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
const destination='dist/vendor';await mkdir(destination,{recursive:true});
await mkdir(destination+'/three',{recursive:true});
for(const file of ['three.module.js','three.core.js'])await cp('node_modules/three/build/'+file,destination+'/three/'+file);
await cp('node_modules/three/examples/jsm',destination+'/three/addons',{recursive:true});
for(const [folder,source,name]of [['anime','node_modules/animejs/dist/bundles/anime.esm.min.js','anime.esm.js'],['lottie','node_modules/lottie-web/build/player/lottie.min.js','lottie.min.js'],['pixi','node_modules/pixi.js/dist/browser/pixi.min.js','pixi.min.js'],['live2d','node_modules/pixi-live2d-display/dist/cubism4.min.js','cubism4.min.js']]){await mkdir(destination+'/'+folder,{recursive:true});await cp(source,destination+'/'+folder+'/'+name);}
await mkdir('dist/licenses',{recursive:true});
let notices='Open Creative Lab — Third-party notices\n\nRobotExpressive: Tomás Laulhé (Quaternius), modifications by Don McCurdy. CC0 1.0.\nhttps://github.com/mrdoob/three.js/tree/r187/examples/models/gltf/RobotExpressive\n\nCubism Core and Live2D models are NOT bundled. Users must supply their own licensed copies.\n\n';
for(const name of ['three','animejs','lottie-web','pixi.js','pixi-live2d-display']){
 const pkg=JSON.parse(await readFile('node_modules/'+name+'/package.json','utf8'));
 let license;for(const file of ['LICENSE','LICENSE.md','LICENSE.txt','license.txt']){try{license=await readFile('node_modules/'+name+'/'+file,'utf8');break;}catch{}}
 if(!license)throw Error('Missing bundled license for '+name);
 const filename=name.replace(/[^a-z0-9-]/gi,'_')+'-LICENSE.txt';await writeFile('dist/licenses/'+filename,license);notices+=`${name} ${pkg.version} — ${pkg.license}\n${license}\n\n`;
}
await writeFile('dist/licenses/THIRD_PARTY_NOTICES.txt',notices);
await cp('upstreams.json','dist/data/upstreams.json');
console.log('Bundled pinned local runtimes, source records and licenses. No Cubism Core or Live2D model is included.');
