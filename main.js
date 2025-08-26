let plus;
function cz(){
pd=0;
runt.style.height=window.innerHeight-25+"px";
tex.style.height = window.innerHeight - 65 + 'px';
tex.style.width  = window.innerWidth - 10  + 'px';
}
let pd=0;
setInterval(()=>{
if(window.innerHeight-25>pd){
pd=window.innerHeight-25;
}
if(pd%1!==0){
pd=Math.round(pd);
}
runt.style.height=pd+"px";
},500);
window.addEventListener('resize', () => {
  tex.style.height = window.innerHeight - 65 + 'px';
  tex.style.width  = window.innerWidth - 10  + 'px';
});
setInterval(()=>{
const to=Number(tex.scrollTop)-25;
gl.style.top = -to+"px";
gl.style.left = -tex.scrollLeft+"px";
},5);
let glll=["body","head","title","meta","type","onclick","oninput","id","class","alt","value"];
tex.value=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>UPLCC</title>
</head>
<!--在别的编译器里用这个库需要把uxb.js改成https://uplcc.github.io/code/uxb.js-->
<script src="uxb.js"><\/script>
<body>
<h1>Hello World!</h1>
</body>
</html>`;
let yxif=false;
setInterval(()=>{
if(yxif){
ex.style.display="block";
}else{
run.style.display="block";
}
},1000);
function runCode(){
yxif=true;
ts.style.display="none";
runt.style.display="block";
runt.style.animationName="runa";
runt.style.animationDuration="0.3s";
ex.style.display="block";
ex.style.animationName="runa";
ex.style.animationDuration="0.3s";
run.style.animationName="runb";
run.style.animationDuration="0.3s";
setTimeout(()=>{
run.style.display="none";
},300);
runt.srcdoc=tex.value;
}
function exitCode(){
yxif=false;
runt.style.animationName="runb";
runt.style.animationDuration="0.3s";
ex.style.animationName="runb";
ex.style.animationDuration="0.3s";
setTimeout(()=>{
runt.style.display="none";
ex.style.display="none";
},300);
run.style.display="block";
run.style.animationName="runa";
run.style.animationDuration="0.3s";
}
let fh="";
let glllc=[];
for(var i=0;i<hasha.length;i++){
const ccc=hasha[i].split("(");
if(ccc[1]=="HTML)"){
glll.push(ccc[0]);
}
if(!ccc[1]){
gllla.push(ccc[0]);
}
if(ccc[1]=="CSS)"){
glllb.push(ccc[0]);
}
if(ccc[1]=="uxb)"){
glllc.push(ccc[0]);
}
}
let glhtml;
function glh() {
  glhtml = tex.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const esca = glll.map(k =>
    k.replace(/[.*+?^${}()|]/g, '\\$&')
  );
const escb = gllla.map(k =>
    k.replace(/[.*+?^${}()|]/g, '\\$&')
  );
const escc = glllb.map(k =>
    k.replace(/[.*+?^${}()|]/g, '\\$&')
  );
  const escd = glllc.map(k =>
    k.replace(/[.*+?^${}()|]/g, '\\$&')
  );
  const rege = new RegExp(`\\b(${esca.join("|")})\\b`, "g");
  glhtml = glhtml.replace(rege, "<span class='glq'>$1</span>");
const regea = new RegExp(`\\b(${escb.join("|")})\\b`, "g");
  glhtml = glhtml.replace(regea, "<span class='glw'>$1</span>");
const regeb = new RegExp(`\\b(${escc.join("|")})\\b`, "g");
  glhtml = glhtml.replace(regeb, "<span class='gle'>$1</span>");
const regec = new RegExp(`\\b(${escd.join("|")})\\b`, "g");
  glhtml = glhtml.replace(regec, "<span class='glr'>$1</span>");
  gl.innerHTML = glhtml;
  }
glh();
let bq,bqa;
function ale(){
document.getElementById("tsp").innerHTML="";
  fh = "";
  ts.style.display = "none";
  const text = tex.value;
  const pos  = tex.selectionStart;
  if (pos == null) return;
  const left = text.slice(0, pos);
  const m = left.match(/([a-zA-Z0-9.\-_@]+)$/);
  if (!m) return;
  const cur = m[1];
  const matched = hasha.filter(w => w.toLowerCase().startsWith(cur.toLowerCase()));
  if (!matched.length) return;
  fh = matched.join(';').split(";");
  bq = matched.join(";").split(";");
  for(var j=0;j<bq.length;j++){
fh[j]=`<p onclick="bqa=this.innerHTML;autobq(bqa);">${bq[j]}</p>`;
}
for(let jjj=0;jjj<fh.length;jjj++){
  document.getElementById('tsp').innerHTML += fh[jjj];
}
  ts.style.display = 'block';
  const nextChar = text[pos];
  if (nextChar === ' ' || nextChar === ',') {
    ts.style.display = 'none';
  }
}
function goto(){
const gita=window.open("https://github.com/UPLCC/code","_blank");
if(gita){
gita.opener=null;
}
}
function pluss(plus) {
  const tex = document.getElementById('tex');
  const posss = tex.selectionStart;
  const before = tex.value.slice(0, posss);
  const after = tex.value.slice(posss);
  tex.value = before + plus + after;
  tex.selectionStart = tex.selectionEnd = posss + plus.length;
  tex.focus();
  ale();
  glh();
}
let coda,userprom;
function downLo(){
filex();
coda=tex.value;
userprom=window.prompt("文件名");
if(!userprom||!coda){
alert("文件名或代码为空");
return;
}
if(!userprom.endsWith(".html")){
userprom+=".html";
}
const blob = new Blob([coda], { type: 'text/html;charset=utf-8' });
  const urlaa = URL.createObjectURL(blob);
  const aaa = document.createElement('a');
  aaa.href = urlaa;
  aaa.download = userprom;
  aaa.style.display = 'none';
  document.body.appendChild(aaa);
  aaa.click();
  document.body.removeChild(aaa);
  URL.revokeObjectURL(urlaa);
}
let iffile=false;
function filex(){
if(!iffile){
fileq.style.display="block";
filec.style.display="block";
filec.style.animationName="runa";
filec.style.animationDuration="0.3s";
iffile=true;
}else{
fileq.style.display="none";
filec.style.animationName="runb";
filec.style.animationDuration="0.3s";
setTimeout(()=>{
filec.style.display="none";
iffile=false;
},300);
}
}
function fileRe(){
xzfile.click();
filex();
glh();
}
document.getElementById("xzfile").addEventListener("change",(event)=>{
const filel=event.target.files[0];
const reader=new FileReader();
reader.onload=function (e){
filetext=e.target.result;
tex.value=filetext;
}
reader.readAsText(filel);
setTimeout(()=>{
glh();
},500);
});
function autobq(bqa){
  bqa=bqa.split("(")[0];
  const tetex=tex.value;
  const autbq = tex.selectionStart;
  const leftaa = tetex.slice(0,autbq);
  const infora = leftaa.match(/([a-zA-Z0-9.\-_@]+)$/);
  if(!infora){
    return;
  }
  const infor=infora.index;
  const bqbefore = tex.value.slice(0,infor);
  const bqafter = tex.value.slice(autbq);
  tex.value = bqbefore + bqa + bqafter;
  tex.selectionStart = tex.selectionEnd = autbq + (bqa.length-(autbq-infor));
  tex.focus();
  ale();
  glh();
}
let ifhf=false;
let hftime=30;
setInterval(()=>{
hftime-=1;
},1000);
setInterval(()=>{
if(ifhf){
localStorage.setItem("ucodetext",tex.value);
}
hftime=30;
},30000);
function past(){
const hfqr=window.confirm("确认恢复至上次自动保存时的代码吗");
if(hfqr){
tex.value=localStorage.getItem("ucodetext");
glh();
}
}
function recode(){
const rehf=window.confirm("确认清空已自动保存的代码吗，下次自动保存剩余"+hftime+"秒");
if(rehf){
localStorage.removeItem("ucodetext");
ifhf=false;
}
}
function bccode(){
localStorage.setItem("ucodetext",tex.value);
alert("保存成功");
}