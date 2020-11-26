 //mảng array
 let array=["game","karaoke","new","live"];
 console.log(array);
 document.getElementById("array").innerHTML=array[2];
 // changed array
 let arr=["one","two","three"];
 arr[1]="pental";
 document.getElementById("arrChange").innerHTML=arr;
 // Vòng lặp mảng
 let fruits,text,fLen,i;
 fruits=["Banana","Orange","Apple","Mango"];
 fLen =fruits.length;
 text ="<ul>"
 for (i = 0; i < fLen; i++) {
     text += "<li>" + fruits[i] + "</li>"  ;    
 }
 text +="</ul>";
 document.getElementById("loopArray").innerHTML=text;
 fruits.push("Dong");
 document.getElementById("arrayPush").innerHTML=fruits;
 //
 const person=[];
 person[0]="John";
 person[1]="Doe";
 person[2]=46;
 let xl= person.length;
 let y = person[0];

 document.getElementById("arrtest").innerHTML=y + "" +xl;
 document.getElementById("typeOf").innerHTML=Array.isArray(person);
