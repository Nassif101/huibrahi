function Generatepassword()
{
    var name = "jalal";
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    var specialChar = "&";
    var pass = name + randomNumber + specialChar;
    if (confirm("Password: "+ pass)) {
        document.getElementById("passfield").value = pass;        
    }
	alert("Test1");
	alert("Test1");
	alert("Test1");
}