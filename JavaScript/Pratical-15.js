function decre() {
    var num = parseInt(document.getElementById('count').textContent);
    if(num>0) {
        document.getElementById('count').innerHTML = num - 1;
    }
}
function incre() {
    var num = parseInt(document.getElementById('count').textContent);
    document.getElementById('count').innerHTML = num + 1;
}