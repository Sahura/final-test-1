
function login(){ 
    var resp = document.getElementById('resp');
    var over = document.getElementById('over');
    resp.style.display = "block";
    over.style.display = "block";
    var xhr = new XMLHttpRequest();
    var div = document.getElementById("text");

    // xhr.open("GET","os.ncuos.com/api/user/token");
    // xhr.send();

    xhr.onreadystatechange = function textChange() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        div.innerText = xhr.response;
        }
};
}



function show()
    {
       
    }
function hide()
    {
        var resp = document.getElementById('resp');
        var over = document.getElementById('over');
        resp.style.display = "none";
        over.style.display = "none";
    }

