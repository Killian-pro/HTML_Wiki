$(document).keypress(function (e) {
    /* KEYS */
    var js = ["POP", "SPLICE", "PUSH", "SHIFT", "NPM", "EXPO", "REACT", "JS"];
    var C = ["C", "C++"];
    var Soft = ["SOFTWARE", "LOGICIEL", "SOFT", "DOWNLOAD"];
    var kiki = ["KIKI", "KILLIAN", "CLUZEL", "KIP"];


    /* DEBUT DE LA RECHECHE */
    var keycode = (e.keyCode ? e.keyCode : e.which);
    var input = document.getElementById("myInput");
    if (input != null) { var filter = input.value.toUpperCase(); }
    if (keycode == '13') {
        switch (filter) {
            case 'SQL':
                document.location.href = "./pages/sql.html";
                break;
            case 'HTML':
                document.location.href = "./pages/html.html";
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
            case lire(Soft,filter):
                document.location.href = "./pages/soft.html";
                break;
            case lire(js,filter):
                document.location.href = "./pages/js.html";
                break;
            case lire(C,filter):
                document.location.href = "./pages/c.html";
                break;
            case lire(kiki,filter):
                document.location.href = "https://www.cluzel-killian.fr/";
                break;
            default:
                document.location.href = "#";
        }
    }
});

function lire(tab,valueR) {
    for (var i = 0; i < tab.length; i++)
    if (tab[i] == valueR) {
        var chaine = tab[i];
    }
    console.log(chaine);
    return chaine;
}