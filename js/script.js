//vowels
str="hello";
count=0;
for(let i=0;i<=5;i++)
{
    if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")){
        count=count+1;
    }
   
}
console.log(count);
document.getElementById("demo").innerHTML="outputis"+ count


//problem2 find the array that should occur 5 three timess and 9 two times

function output(){
    let x=document.getElementById("problem").value.split(",").map(Number);

count19=0;
count5=0;
for(let i=0;i<x.length;i++){
    if(x[i]==19){
        count19=count19+1;
    }
    else if(x[i]==5){
        count5=count5+1;
    }

}
if((count19>=2)&&(count5>=3)){
    document.getElementById("pro2").innerHTML= "True and the no of times  19 and 5 occur is" + count19 +" , " + count5;
}
else{
    document.getElementById("pro2").innerHTML= "False and the no of time 19 and 5 is leeser then the input given";
}
}

//problem3 Find Years When Jan 1 is Sunday (2014–2050)

for (let i=2014;i<=2040;i++){
    let x=new Date(i,0,1); 
    if(x.getDay()===0){
        document.getElementById("sunday").innerHTML+=i +"<br>";
    }
  
}


x=document.URL;
document.getElementById("new").innerHTML= x;