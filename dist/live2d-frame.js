let app,model;const urls=[];let loading=false;
const report=(message,error=false)=>parent.postMessage({type:'creative-live2d-status',message,error},'*');
async function script(url){await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=url;s.onload=resolve;s.onerror=()=>reject(Error('The selected runtime could not be initialized.'));document.head.append(s);});}
window.addEventListener('message',async event=>{
 if(event.source!==parent||event.data?.type!=='creative-live2d-load'||loading)return;loading=true;
 try{
  const {core,files}=event.data;if(typeof core!=='string'||!Array.isArray(files)||files.length>256||files.reduce((n,f)=>n+(f.bytes?.byteLength??0),0)>64*1024*1024)throw Error('Invalid local model input.');
  app?.destroy(true,{children:true,texture:true,baseTexture:true});for(const url of urls.splice(0))URL.revokeObjectURL(url);
  if(!window.Live2DCubismCore){const coreURL=URL.createObjectURL(new Blob([core],{type:'text/javascript'}));urls.push(coreURL);await script(coreURL);}
  if(!window.PIXI?.live2d)await script('vendor/live2d/cubism4.min.js');
  const paths=new Map(files.map(f=>[f.path,f]));const entry=files.find(f=>f.path.endsWith('.model3.json'));if(!entry)throw Error('No model3.json file was selected.');const base=entry.path.slice(0,entry.path.lastIndexOf('/')+1),json=JSON.parse(new TextDecoder().decode(entry.bytes));
  function local(ref){if(typeof ref!=='string'||ref.includes('..')||ref.includes(':')||ref.startsWith('/'))throw Error('Only model-local file references are supported.');const file=paths.get(base+ref);if(!file)throw Error('A required model file is missing: '+ref);const url=URL.createObjectURL(new Blob([file.bytes],{type:file.type||(/\.json$/i.test(ref)?'application/json':'application/octet-stream')}));urls.push(url);return url;}
  const refs=json.FileReferences;if(!refs||json.Version!==3)throw Error('Use a Cubism 3/4 model3.json manifest.');
  refs.Moc=local(refs.Moc);refs.Textures=refs.Textures.map(local);for(const key of ['Physics','Pose','UserData','DisplayInfo'])if(refs[key])refs[key]=local(refs[key]);for(const expression of refs.Expressions??[])expression.File=local(expression.File);for(const group of Object.values(refs.Motions??{}))for(const motion of group){motion.File=local(motion.File);delete motion.Sound;}
  json.url='local.model3.json';
  app=new PIXI.Application({view:undefined,width:innerWidth,height:innerHeight,backgroundAlpha:0,antialias:true,autoStart:true});document.body.append(app.view);document.getElementById('local-message').hidden=true;
  model=await PIXI.live2d.Live2DModel.from(json,{autoInteract:true});model.scale.set(Math.min(innerWidth/model.width,innerHeight/model.height)*.92);model.anchor.set(.5,.5);model.position.set(innerWidth/2,innerHeight/2);app.stage.addChild(model);report('Your local Live2D model is ready.');
 }catch(error){report(error.message,true);}finally{loading=false;}
});
window.addEventListener('resize',()=>{app?.renderer.resize(innerWidth,innerHeight);if(model){model.position.set(innerWidth/2,innerHeight/2);}});
