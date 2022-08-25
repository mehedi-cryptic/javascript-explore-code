function explaincall_back(name, age, task){
    console.log("hellow" ,name);
    console.log("age", age);
    task();
}
function wash_hand(){
    console.log("wash hand");
}
function take_shower(){
    console.log("take shower");
}
function scroll_fb(){
    console.log("scroll fb");
}
explaincall_back('sagiruddin', 17, wash_hand);
explaincall_back('bogir', 12, take_shower);
explaincall_back('togir', 2, scroll_fb);