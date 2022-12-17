const i = document.getElementById("input");
const b = document.getElementById("btn-1");
const ul = document.getElementById("ulid");
var link = []
var locallinks
var d = document.getElementById("Delete")
locallinks = JSON.parse(localStorage.getItem("links"))
console.log(locallinks);
if (locallinks) {
    link = locallinks
    p();
}
d.ondblclick = () => {
    localStorage.clear()
    link = []
    p();
}
b.onclick = function () {
    link.push(i.value);
    i.value = "";
    console.log(link);
    localStorage.setItem("links", JSON.stringify(link));
    console.log(localStorage.getItem("links"))
    p()
}
i.addEventListener("keydown", function (event) {
    //console.log(event.which);
    if (event.which === 13) {
        b.click();
    }
});
function p() {
    let ele = "";
    for (let i1 = 0; i1 < link.length; i1++) {
        ele += `<li><a href="${link[i1]}" target='_blank'>${link[i1]}</a></li>`;
    }
    ul.innerHTML = ele;
    console.log(ele);
}


