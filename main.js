// Function to evaluate a mathematical expression
function evaluate(expression, x) {
    return eval(expression);
}

// Function to check whether two user-defined functions are inverses of each other
function checkInverse() {
    var fi = document.getElementById("fInput").value;
    var f;
    if (true) {
        fi.search(/sin/gi);
        var f = fi.replace(/(sin)/gi, "Math.sin");
    }
    var f = f.replace(/\^/gi, "**");
    var gi = document.getElementById("gInput").value;
    var g;
    if (true) {
        gi.search(/sin/gi);
        var g = gi.replace(/(sin)/gi, "Math.sin");
    }
    var g = g.replace(/\^/gi, "**");

    // Check if f(g(x)) = x and g(f(x)) = x for a range of x values
    if (f == "" || g == "") {
        if (f == "" && g != "") {
            document.getElementById("result").innerHTML = 'Please Enter The f(x) Equation';
        }
        else if (g == "" && f != "") {
            document.getElementById("result").innerHTML = 'Please Enter The g(x) Equation';
        }
        else {
            document.getElementById("result").innerHTML = 'Please Enter The Equations';
        }
    }
    else {
        var isInverse = true;
        var tolerance = 1e-10;
        var xValues = [-10, -5, 0, 5, 10];
        for (var i = 0; i < xValues.length; i++) {
            var x = xValues[i];
            var fOfG = evaluate(f, evaluate(g, x));
            var gOfF = evaluate(g, evaluate(f, x));
            if (Math.abs(fOfG - x) > tolerance || Math.abs(gOfF - x) > tolerance) {
                isInverse = false;
                break;
            }
        }
        var result = isInverse ? 'The functions are inverse functions' : 'The functions are not inverse functions';
        document.getElementById("result").innerHTML = result;
        // Generate values
        var xValues1 = [];
        var xValues2 = [];
        var yValues1 = [];
        var yValues2 = [];
        for (var x = 0; x <= 15; x += 1) {
            xValues1.push(x);
            xValues2.push(x);
            yValues1.push(eval(f));
            yValues2.push(eval(g));
        }

        // Define Data
        var data = [{
            x: xValues1,
            y: yValues1,
            mode: "lines"
        },
        {
            x: xValues2,
            y: yValues2,
            mode: "lines"
        }];


        // Define Layout
        var layout = {
            xaxis: { range: [-15, 15], title: "x" },
            yaxis: { range: [-15, 15], title: "y" },
            title: "Checking for Inverse Functions"
        };

        // Display using Plotly
        Plotly.newPlot("myPlot", data, layout);
    }
}

// Refresh page
function onRefresh() {
    document.getElementById("fInput").value = "";
    document.getElementById("gInput").value = "";
    document.getElementById("result").innerHTML = "";

}

// function checkTrigonometric() {
//     const input = document.getElementById("fInput").value;
//     input.in
//     const trigRegex = /(sin|cos|tan|Cot|Sec|Cosec)/gi;
//     const hasTrig = trigRegex.test(input);

//     if (hasTrig) {
//         document.getElementById("result").textContent = "Input contains trigonometric ratios." + trigRegex;
//     } else {
//         document.getElementById("result").textContent = "Input does not contain trigonometric ratios.";
//     }
// }
