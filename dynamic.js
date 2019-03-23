function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  console.log(xhr);
  xhr.onreadystatechange=function(){
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);

    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  carier(data.carier);
  education(data.education);
  skills(data.skills);
})

var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){

  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);


  var name=document.createElement('h2');
  name.textContent=pro.name;
  left.appendChild(name);
  main.appendChild(left);

  var email=document.createElement('h3');
  email.textContent=pro.email;
  left.appendChild(email);
  main.appendChild(left);



}

function carier(c){
  var rh=document.createElement("h1");
  rh.textContent="Resume Builder";
  right.append(rh);
  var hh=document.createElement("hr");
  right.append(hh);
  var rh1=document.createElement("h2");
  rh1.textContent="Carrer Objectives";
  right.append(rh1);
  var rh2=document.createElement("p");
  rh2.textContent=c.info;
  right.append(rh2);


}
function education(edu){
  var h2=document.createElement('h2');
  h2.textContent="Education Details";
  right.appendChild(h2);
  var hr=document.createElement('hr');
  right.append(hr);


var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<th>"+"S.no"+"</th>"+
  "<th>"+"<td>"+"Course"+"</td>"+
  "<th>"+"<td>"+"Institute"+"</td>"+
  "<th>"+"<td>"+"Year of passing"+"</td>"+
  "</tr>"
  for (i in edu){

    row+="<tr>"+"<td>"+edu[i].sno+"</td>"+
    "<td>"+"<td>"+edu[i].degree+"</td>"+
    "<td>"+"<td>"+edu[i].institute+"</td>"+
    "<td>"+"<td>"+edu[i].year+"</td>"+
    "</tr>";
  }
  table.innerHTML=row;
  right.appendChild(table);
  main.appendChild(right);
  }


  function skills(l){
    var hh=document.createElement("h2");
    hh.textContent="skills set";
    right.append(hh);
    var ul=document.createElement(ul);
    right.append(ul);
    for(i in l){
      var li=document.createElement("li");
      li.textContent=l[i].info;
      ul.append(li);
    }
  }
