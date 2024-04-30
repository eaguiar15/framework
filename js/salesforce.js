var jProdutos;
var token = localStorage.getItem('token');
var url = "https://app.sevensys.com.br/api/";

function init(){
    page = window.location.pathname.split('/').pop();

    if(page == "index.html" || page == ""){
        if(token !== null ){
            window.location = "home.html";
            return;
        }
    } 

    if(page == "home.html"){
        if(token === null ){
            window.location = "index.html";
            return;
        }
        document.getElementById("email-login-mob").innerText = localStorage.getItem('email');
    }
}

function login(){
    ws = new XMLHttpRequest();
    ws.open("POST", url + "login.php",true);
    ws.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ws.onreadystatechange = function(){
        if ( ws.readyState == 4 && ws.status == 200 ) {
            let response = JSON.parse(ws.responseText);
            if(response.status == 1){
                localStorage.setItem('token', response.token);
                localStorage.setItem('email', response.email);
                window.location = "home.html";
                return;
            }else{
                document.getElementById("login-message").innerText = response.message;
            }
           
        }
    }
    ws.send(JSON.stringify({
        email : document.forms[0].P_EMAIL.value,
        senha : document.forms[0].P_SENHA.value,
        token  : token
    }));
}

function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');

    setTimeout(function() {
        window.location = "index.html";
    }, 500);
}


init();


