function tel(){
    location.href = "tel:1599-0000";
}
function url(ids){
    console.log(document.getElementById(ids).getAttribute("url"));
    location.href = document.getElementById(ids).getAttribute("url");
}