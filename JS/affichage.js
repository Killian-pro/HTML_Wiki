function masquer_div1() {
	console.log("ok");
	if (document.getElementById(1).style.display == 'block') {
		document.getElementById(1).style.display = 'none';
	}
	else {
		document.getElementById(1).style.display = 'block';
	}
}
function masquer_div2() {
	if (document.getElementById(2).style.display == 'block') {
		document.getElementById(2).style.display = 'none';
	}
	else {
		document.getElementById(2).style.display = 'block';
	}
}
function masquer_div3() {
	if (document.getElementById(3).style.display == 'block') {
		document.getElementById(3).style.display = 'none';
	}
	else {
		document.getElementById(3).style.display = 'block	';
	}
}

function backhome()
{
	document.location.href="../index.html"; 
}