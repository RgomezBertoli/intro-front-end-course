(function () {

    var endpoint = 'https://to-do-course.herokuapp.com/';

    function init() {
        document.getElementsByTagName('body')[0].onload = function () {
            var button = document.getElementsByClassName('submit-button');
            button[0].addEventListener('click', login);
        };
    }

    function login(ev) {
        ev.preventDefault();
        var username = document.getElementsByClassName('input-user')[0].value;
        var pass = document.getElementsByClassName('input-pass')[0].value;

        if(username && pass){
            var body = {
                username: username,
                pass: pass
            };
            request(body);
        }
    }

    function request(body){
        console.log(body);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint + 'public/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = parseRequest(xhr);
        xhr.onerror = console.log;
        xhr.send(JSON.stringify(body));
    }

    function parseRequest(xhr){
        return function(){
            if(xhr.readyState === xhr.DONE){
                if(xhr.status !== 200){
                    return alert('HA HABIDO UN PROBLEMA CON LA PETICIÓN');
                }

                console.log(JSON.parse(xhr.response));
            }
        }
    }

    init();

})();