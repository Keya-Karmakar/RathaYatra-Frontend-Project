function move()
{
	document.getElementById('rath');
	document.getElementById("msg");
	rath.style.left ="1200px";
	msg.innerHTML="🚩 Jai Jagannath ! Happy Ratha yatra ! 🚩 ";
	setTimeout(function(){
		rath.style.left="-500px"
	    },7000);
	setTimeout(function () {
		alert("May Lord Jagannath Bless You And Your Family . ");
		window.location.href="MasiBari.html"
	},5000)
}