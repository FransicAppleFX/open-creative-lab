export function validateGLB(buffer){
 if(!(buffer instanceof ArrayBuffer)||buffer.byteLength<20)throw Error('Use a valid GLB 2.0 file.');
 const view=new DataView(buffer);
 if(view.getUint32(0,true)!==0x46546c67||view.getUint32(4,true)!==2||view.getUint32(8,true)!==buffer.byteLength)throw Error('Use a valid GLB 2.0 file.');
 const length=view.getUint32(12,true);
 if(length>buffer.byteLength-20||view.getUint32(16,true)!==0x4e4f534a)throw Error('Invalid GLB JSON chunk.');
 const json=JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,20,length)));
 function inspect(value){if(!value||typeof value!=='object')return;for(const [key,item]of Object.entries(value)){if(key==='uri'&&typeof item==='string'&&!item.startsWith('data:'))throw Error('External model resources are not allowed.');if(item&&typeof item==='object')inspect(item);}}
 inspect(json);return json;
}
