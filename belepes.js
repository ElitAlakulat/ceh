var fs = require('fs');
function cehtag(){
	fs.readFile('jelszavak.txt', 'utf8',function(err, data){
		alert(data);
	});
	alert(szoveg);
	/*var text=fs.readFile("jelszavak.txt");
	adat=prompt("Jelszó:");
	if(adat=="alma123"){
		window.location = "index.html";
	}*/
}
