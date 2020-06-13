$(document).keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    var input = document.getElementById("myInput");
    console.log(input);
    if (input != null) { var filter = input.value.toUpperCase(); }
    if (keycode == '13') {
        switch (filter) {
            case 'SQL':
                document.location.href = "./pages/sql.html";
                break;
            case 'HTML':
                document.location.href = "./pages/html.html";
                break;
            case 'JS':
                document.location.href = "./pages/js.html";
                break;
            case 'PHP':
                document.location.href = "./pages/php.html";
                break;
            case 'JAVA':
                document.location.href = "./pages/java.html";
                break;
            case 'PYTHON':
                document.location.href = "./pages/python.html";
                break;
            case 'SOFTWARE':
                document.location.href = "./pages/soft.html";
                break;
            case 'C':
                document.location.href = "./pages/c.html";
                break;
            case 'C++':
                document.location.href = "./pages/c.html";
                break;
            default:
                document.location.href = "#";
        }
    }
});
