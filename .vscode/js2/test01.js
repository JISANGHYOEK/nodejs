const comics = [
    { "movie":"어벤져스", "studio":"마블" },
    { "movie":"스파이더맨", "studio":"마블" },
    { "movie":"원더우먼", "studio":"DC" },
    { "movie":"토르", "studio":"마블"},
    { "movie":"블랙펜서", "studio":"마블"},
    { "movie":"아쿠아맨", "studio":"DC"},
    { "movie":"더 배트맨", "studio":"DC"}
];

let newComics = comics.filter((item) =>{
    return item.studio=="DC";
})

for(let i=0; i < newComics.length; i++) {console.log(newComics[i]);}