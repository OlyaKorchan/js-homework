// Task02
// Using JavaScript and DOM hide hide second and third paragraphs 
// of target HTML document, all other elements should be visible

function m07task02() {
  document.getElementById("testButton").onclick = function () {
		var elements = document.getElementsByClassName("test");
	  for (var i = 0; i < elements.length; i++){
		  elements[i].style.display = "none";
	  }
	};
}