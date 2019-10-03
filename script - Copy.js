function updateSearch() {
    var input = document.getElementById("userInput").value;
    if (input) {
        updatePage(input);
        showMatrix();
    }
}

function updatePage(userInput) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var baseUrl = link.getAttribute("data-baseurl");
        if (baseUrl) {
            links[i].href = baseUrl + "+" + userInput;
        }
    }
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showMatrix() {
  //var x = document.getElementById("myDIV");
  //if (x.style.display === "none") {
  //  x.style.display = "block";
  //}
  $("#myDIV").fadeIn("fast", function () {
      // Animation complete
  $("p").hide();
  });
}

//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_show_hide


