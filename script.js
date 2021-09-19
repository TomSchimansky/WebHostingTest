document.getElementById('output').style.visibility = "hidden";


document.getElementById('lbsInput').addEventListener('input', function(event) {
	document.getElementById('output').style.visibility = "visible";

	let value = event.target.value;
	console.log(value);

	document.getElementById('gramOutput').innerHTML = value/0.022046
	document.getElementById('kilogramOutput').innerHTML = (value/0.022046) / 1000
});