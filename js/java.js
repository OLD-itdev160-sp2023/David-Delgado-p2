var weight, height, inches, measure, bmi, error ;

function calculate() {
	var unit = document.querySelector('input[name="unit"]:checked').value;
	var unit2 = document.querySelector('input[name="unit2"]:checked').value;

	if (unit === 'kg') {
		weight = document.getElementById("weight").value;
	} else if (unit === 'lbs') {
		weight = document.getElementById("weight").value * 0.453592;
	}

	if (unit2 === 'cm') {
		height = document.getElementById("height").value / 100;
	} else if (unit2 === 'ft_in') {
		height = (document.getElementById("height").value * 12 + document.getElementById("inches").value) * 0.0254;
	}

	error = "Please enter some values";
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " which means " + "You are Obese";
    }

    document.getElementById("results").innerHTML = measure;
}