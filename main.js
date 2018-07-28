function loadjson(file,callback) {
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 && xhr.status=="200"){
        callback(xhr.responseText);
     }
   }
   xhr.send();
}
loadjson("data1.json",function(text){
    let data1=JSON.parse(text);
    console.log(data1);
    basic(data1.details);
    edu(data1.education);
    skill(data1.skills);
})
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(details){
var image=document.createElement("img");
image.src=details.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=details.name;
left.appendChild(name);
var phone=document.createElement("h2");
phone.textContent=details.phone;
left.appendChild(phone);
var email=document.createElement("h2");
email.textContent=details.email;
left.appendChild(email);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function  edu(education){
  var un=document.createElement("ul");
  right.appendChild(un);
  for (var i = 0; i < education.length; i++) {
    var l=document.createElement("li");
        l.textContent=education[i].course;
    un.appendChild(l);
    var l1=document.createElement("li");
        l1.textContent=education[i].college;
    un.appendChild(l1);
    var l2=document.createElement("li");
        l2.textContent=education[i].percentage;
    un.appendChild(l2);
}
}
function skill(skilldata){
  var s=document.createElement("div");
  s.classList.add("sset");
  right.appendChild(s);
  var head=document.createElement("h1");
    head.textContent="Skills set";
    s.appendChild(head);
    s.appendChild(document.createElement("HR"));
    var t=document.createElement("table");
    var tabledata="";
    for (var i = 0; i < skilldata.length; i++) {
     tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
    t.innerHTML=tabledata;
    }
    head.appendChild(t);
}