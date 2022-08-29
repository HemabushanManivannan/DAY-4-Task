
console.log("JS File Executed");
const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send(null);
request.onload=function(){
    const response=JSON.parse(request.responseText);
    console.log(response);
}

