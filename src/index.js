(function() {

    function init() {
        var button = document.getElementsByClassName('submit-button');
        button[0].addEventListener('click', submitInput);
    }

    function submitInput(ev) {
        console.log('HE CLICKADO');
        var text = document.getElementsByClassName('input-text');
        var content = text[0].value;
        console.log("VALOR INPUT: " + content);

        if (content) {
            var list = document.getElementsByClassName('el-list');
            var listElement = document.createElement('li');
            listElement.innerHTML = "<p>" + content + "</p>";
            list[0].appendChild(listElement);

            text[0].value = "";
        }
    }

    init();

})();