function plusMinus(arr) {
  let fullRatio = 1.000000;
  let onePartOfRatio = fullRatio / arr.length;

  let positivesRatio = 0;
  let negativesRatio = 0;
  let zerosRatio = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positivesRatio += onePartOfRatio;
    } else if(arr[i] < 0) {
      negativesRatio += onePartOfRatio;
    } else {
      zerosRatio += onePartOfRatio;
    }cs
  }

  positivesRatio = positivesRatio.toFixed(6);
  negativesRatio = negativesRatio.toFixed(6);
  zerosRatio = zerosRatio.toFixed(6);

  console.log(positivesRatio);
  console.log(negativesRatio);
  console.log(zerosRatio);
}

plusMinus([1, 1, 0, -1, -1, -1]);
//0.500000
//0.333333
//0.166667
