module.exports = function solveEquation(equation) {
    function comp(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    var regexp = /x/;
    var a = equation.split('x');
    a[0] = a[0].slice(0, -3);
    a[1] = a[1].replace(/\s/g,'').slice(2, -1);
    a[2] = a[2].replace(/\s/g,'');
    var x1 = (-a[1] - Math.sqrt(Math.pow(parseInt(a[1]), 2) - 4*a[0]*a[2])) / (2*a[0]);
    var kek = x1 -Math.floor(x1);
    var x2 = (-a[1] + Math.sqrt(Math.pow(parseInt(a[1]), 2) - 4*a[0]*a[2])) / (2*a[0]);
    var kek2 = x2 -Math.floor(x2);

    if (kek >= '0.5'){
        x1 = Math.floor(x1) + 1;
    }
    else x1 = Math.floor(x1);

    if (kek2 >= '0.5'){
        x2 = Math.floor(x2) + 1;
    }
    else x2 = Math.floor(x2);

    return [x1, x2].sort(comp);

};

//solutions = solveEquation('294 * x^2 - 141195558 * x - 1600964090384736');
//console.log(solutions); // [2, 3]


//2 * ,        ^2-10*               + 12