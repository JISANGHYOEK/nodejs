let id = setInterval(function() {
    console.log("Web programming");
},1000)

setTimeout(function() {
    console.log("출력을 종료합니다.");
    clearInterval(id);
    
},3000)