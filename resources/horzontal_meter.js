function setMeterByNumericValue(element, value) {
    const h1 = element.querySelector('h1');
    const needleUnit = element.querySelector('.needle-unit');

    if (value < 33) {
        h1.innerHTML = `<span style="color: #6DAD81">No Risk</span>`
    } else if (value > 32 && value < 67) {
        h1.innerHTML = `<span style="color: #E3C342">Low Risk</span>`
    } else {
        h1.innerHTML = `<span style="color: #D1535C">High Risk</span>`
    }

    const percentValue = value / 100;
    const newPositionX = (percentValue * 600) + 20
    needleUnit.setAttribute('transform', `translate(${newPositionX},50)`);
}

function setMeterByLevel(element, value) {
    const h1 = element.querySelector('span');
    let newPositionX = 20;
    if (value === 'no_risk') {
        h1.innerHTML = `<span style="color: #6DAD81">No Risk</span>`
        newPositionX = 116;
    } else if (value === 'low_risk') {
        h1.innerHTML = `<span style="color: #E3C342">Low Risk</span>`
        newPositionX = 320;
    } else {
        h1.innerHTML = `<span style="color: #D1535C">High Risk</span>`
        newPositionX = 518;
    }

    const needleUnit = element.querySelector('.needle-unit');
    needleUnit.setAttribute('transform', `translate(${newPositionX},50)`);
}




