//single data type

var names = document.querySelector("#friend");

var fruits = ["apple", "banana", "orange", "blackberry"] ;
console.log(fruits);

var tasnia = "<h1>my first practice class</h1>" ;
tasnia = tasnia +  "<p>hello world</p>" ;
for ( i=0 ; i<fruits.length ; i++ ){
    tasnia = tasnia + "<li>" + fruits[i] + "</li>"
}

names.innerHTML = tasnia ;

//css in java sCript 

 var hello = document.querySelector("ul");
 hello.style.listStyle = "none" ;

 var text = document.querySelectorAll("ul li");
 text.style.cssFloat ="left" ;

 var second = document.querySelectorAll("a");

 second.style.color = "red";
 