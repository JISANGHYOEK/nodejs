let date = new Date();

if(date.getHours()<12){
    console.log("오전 입니다.");
}
if(date.getHours()>12){
    console.log("오후 입니다.");
}