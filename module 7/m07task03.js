// Task03 
// Using JavaScript and DOM create click event handler for Button that 
// replaces content of a paragraph 4 with a number 42

function m07task03() {
  document.getElementById("testButton").onclick = function () {
		document.getElementById("last").innerHTML = "42";
	};
}