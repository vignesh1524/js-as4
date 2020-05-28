var a=['yaakov','Jen','paul','jasmine','reena','jameena','samuel'];
for (var i=0 ; i < a.length; i++) {
	var f = a[i].charAt(0).toLowerCase();
	if (f == 'j') {
		console.log("bye " + a[i]);
	}else {
		console.log("hello " + a[i]);
	}
}
