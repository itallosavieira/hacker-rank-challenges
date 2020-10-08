function compareTriplets(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    let result = [];

    for(let i = 0; i < a.length; i++) {
        if(a[i] < b[i]) {
            bPoints++;
        } else if (a[i] > b[i]){
            aPoints++;
        };  
    };
    
    result.push(aPoints, bPoints);
    console.log(result);
    return result;
};

compareTriplets([5, 6, 7], [3, 6, 10]);
// [1, 1]