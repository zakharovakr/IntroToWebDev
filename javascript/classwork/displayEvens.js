function validate(){
    //grabbing values and saving them into the variable
    var displayEvensForm = document.forms["displayEvensForm"];
    var startNum = document.getElementById("startNum");
    var endNum = document.getElementById("endNum");
    var step = document.getElementById("step");

    var results = document.getElementById("results");

    // resets validity
    endNum.setCustomValidity('');							
	step.setCustomValidity('');

    //removes any validation styles that were activated by a previous validation
    displayEvensForm.className = "needs-validation";
    results.style.display = "none"; //hides the results div
    document.getElementById("answers").innerHTML = "";	// resets the answers

    //we parse each input's value to an integer 
    var numStart = parseInt(startNum.value, 10);
    var numEnd = parseInt(endNum.value, 10);
    var stepCount = parseInt(step.value, 10);

    //we check the form's validity with the Constraint Validation API's checkValidity function

    if (numEnd <= numStart) {						
		displayEvensForm.className = "was-validated";
		endNum.setCustomValidity("prob with end num");
	}
	
	if (stepCount<= 0) {
		displayEvensForm.className = "was-validated";
		step.setCustomValidity("prob with step num");
		return false;
	}
    if (!displayEvensForm.checkValidity()) {
        displayEvensForm.className = "was-validated";
        return false;
    }

    // inserts user values
    document.getElementById("startNumber").innerText = numStart; 
    document.getElementById("endNumber").innerText = numEnd;
    document.getElementById("stepNumber").innerText = stepCount;

    //finds evens to display
    for (var i = numStart; i <= numEnd; i += stepCount) {		
        if (i % 2 == 0) {
            document.getElementById("answers").innerHTML += i + "<br />";
        }
        // display evens and user input
		results.style.display = "block";									
	}
    

    return false;
}