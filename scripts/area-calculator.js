function calculateTriangleArea(){
     //get triangle base value
     const baseField = document.getElementById('triangle-base');
     const baseStringValueText = baseField.value;
     const base = parseFloat(baseStringValueText);

     //get triangle height value
     const heightField = document.getElementById('triangle-height');
     const heightStringValueText = heightField.value;
     const height = parseFloat(heightStringValueText);

     if(isNaN(base) || isNaN( height)){
        alert('Please insert number');
        return;
    }
    
    
     // calculate area
     const area = 0.5 *base*height;
     console.log(area);

     //show triangle area
     const areaSpan = document.getElementById('triangle-area');
     areaSpan.innerText = area;

      // add to calculation entry
    addToCalculationEntry('Triangle' ,area);
}
function calculateRectangleArea(){
     //get rectangle width
     const widthField = document.getElementById('rectangle-width');
     const widthStringValueText = widthField.value;
     const width = parseFloat(widthStringValueText);
     
     //get rectangle length
     const lengthField = document.getElementById('rectangle-length');
     const lengthStringValueText = lengthField.value;
     const length = parseFloat(lengthStringValueText);

     if(isNaN(width) || isNaN(length )){
        alert('Please insert number');
        return;
    }
    
     // calculate area
     const area = width * length;
     console.log(area);

     //show rectangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = area;

     // add to calculation entry
    addToCalculationEntry('Rectangle' ,area);
     
}

//reusable function - reduce duplicate code


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area',area);
    // add to calculation entry
    addToCalculationEntry('Parallelogram' ,area);
}
function calculateRhombusArea(){
    const diagonal1 = getInputValue('diagonal1-length1');
    const diagonal2 = getInputValue('diagonal1-length2');
    if(isNaN(diagonal1) || isNaN(diagonal2)){
        alert('Please insert number');
        return;
    }
    const area = 0.5* diagonal1 * diagonal2;
    setElementInnerText('rhombus-area',area);
    // add to calculation entry
    addToCalculationEntry('Rhombus' ,area);
}
function calculatePentagonArea(){
    const perimeter = getInputValue('perimeter');
    const apothem = getInputValue('apothem');
    if(isNaN(perimeter) || isNaN(apothem)){
        alert('Please insert number');
        return;
    }
    const area = 0.5* perimeter *  apothem ;
    setElementInnerText('pentagon-area',area);
    // add to calculation entry
    addToCalculationEntry('Pentagon' ,area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert number');
        return;
    }
    const area = 3.14 * majorRadius * minorRadius;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse' ,areaToDecimal);
}

// reusable get input value field in number
function getInputValue(fieldId){
     const inputField = document.getElementById(fieldId);
     const inputValueText = inputField.value;
     const value = parseFloat(inputValueText);
     return value;   
}

//reusable set span, p, div, etc text

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


//add to calculation entry

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML =` ${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>` ;
    calculationEntry.appendChild(p);

}

// Data validation
// 1. set the proper type of the input field. (number, data, email);
// 2. check type using typeof
// 3. NaN means: Not a Number, inNaN is checking whether the number is or not;

