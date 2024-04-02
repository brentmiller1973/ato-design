function setRoundMeterByNumericValue(element, value) {
    const h1 = element.querySelector('h1');
    const needle = element.querySelector('.needle');

    if (value < 33) {
        h1.innerHTML = `<span style="color: #6DAD81">No Risk</span>`
    } else if (value > 32 && value < 67) {
        h1.innerHTML = `<span style="color: #E3C342">Low Risk</span>`
    } else {
        h1.innerHTML = `<span style="color: #D1535C">High Risk</span>`
    }

    // Offset the angle by 90 degrees so that 0 points to the start of the green section.
    const offset = 90;
    // Each section represents 1/3 of 100, so 33.33 units per section.
    // Map the value (1-100) to angle (-90-90 degrees).
    const angle = ((value * 180) / 100) - offset;
    // Set the needle's rotation based on the calculated angle.
    // The transform-origin is adjusted to be the center of the base of the needle.
    needle.style.transform = `rotate(${angle}deg)`;
    needle.style.transformOrigin = '100px 100px';
}

function setRoundMeterByLevel(element, value) {
    const h1 = element.querySelector('h1');
    let num_val = 0;
    if (value === 'no_risk') {
        h1.innerHTML = `<span style="color: #6DAD81">No Risk</span>`
        num_val = 16;
    } else if (value === 'low_risk') {
        h1.innerHTML = `<span style="color: #E3C342">Low Risk</span>`
        num_val = 50;
    } else {
        h1.innerHTML = `<span style="color: #D1535C">High Risk</span>`
        num_val = 84;
    }

    const needle = element.querySelector('.needle');
    // Offset the angle by 90 degrees so that 0 points to the start of the green section.
    const offset = 90;
    // Each section represents 1/3 of 100, so 33.33 units per section.
    // Map the value (1-100) to angle (-90-90 degrees).
    const angle = ((num_val * 180) / 100) - offset;
    // Set the needle's rotation based on the calculated angle.
    // The transform-origin is adjusted to be the center of the base of the needle.
    needle.style.transform = `rotate(${angle}deg)`;
    needle.style.transformOrigin = '100px 100px';
}


// document.addEventListener('DOMContentLoaded', function() {
//     setMeterByLevel(document.getElementById('meter-one'), riskLevel);
// });
