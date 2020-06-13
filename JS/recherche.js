$(document).keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    var input = document.getElementById("myInput");
    console.log(input);
    if (input != null) { var filter = input.value.toUpperCase(); }
    if (keycode == '13') {
        switch (filter) {
            case 'SQL':
                document.location.href = "./Pages/sql.html";
                break;
            case 'HTML':
                document.location.href = "./Pages/html.html";
                break;
            case 'JS':
                document.location.href = "./Pages/js.html";
                break;
            case 'PHP':
                document.location.href = "./Pages/php.html";
                break;
            case 'JAVA':
                document.location.href = "./Pages/java.html";
                break;
            case 'PYTHON':
                document.location.href = "./Pages/python.html";
                break;
            case 'SOFTWARE':
                document.location.href = "./Pages/soft.html";
                break;
            case 'C':
                document.location.href = "./Pages/c.html";
                break;
            case 'C++':
                document.location.href = "./Pages/c.html";
                break;
            default:
                document.location.href = "#";
        }
    }
});
