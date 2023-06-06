function download () {
function onSuccess(download) {
let a = document.createElement('a');
if (download[2] == 1){
let data = new Uint8Array(download[0]);
}else{
let data = download[0];
}
let blob = new Blob([data], {'type':download[1]});
a.href = window.URL.createObjectURL(blob);
a.download = btoa(Math.random().toString().slice(2,8)) + "." + download[1].split("/")[1].split(";")[0];
a.click();
document.getElementById('myURL').value = "";
document.getElementById('abc').innerHTML = "";

}
function onFailure(){
document.getElementById('abc').innerHTML = "URLERROR";
}
document.getElementById('abc').innerHTML = "analyzing...";
document.getElementById('abc1').innerHTML = "";
let myRunner = google.script.run.withFailureHandler(onFailure);
let myRunner1 = myRunner.withSuccessHandler(onSuccess);
myRunner1.fun1(document.getElementById('myURL').value);
}


function download1 () {
function onSuccess(download) {
let a = document.createElement('a');
if (download[2] == 1){
let data = new Uint8Array(download[0]);
}else{
let data = download[0];
}
let blob = new Blob([data], {'type':download[1]});
a.href = window.URL.createObjectURL(blob);
a.download = btoa(Math.random().toString().slice(2,8)) + "." + download[1].split("/")[1].split(";")[0];
a.click();
document.getElementById('abc1').innerHTML = "";
document.getElementById('myURL').value = "";
document.getElementById('myURL').focus();
}
function onFailure(){
document.getElementById('abc1').innerHTML = "ERROR";
}
document.getElementById('abc').innerHTML = "";
document.getElementById('abc1').innerHTML = "analyzing...";
let myRunner = google.script.run.withFailureHandler(onFailure);
let Runner1 = myRunner.withSuccessHandler(onSuccess);
myRunner1.fun2(document.getElementById('myURL').value);
}
document.getElementById('myURL').focus();
