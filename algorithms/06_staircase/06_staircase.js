function staircase(n){
  let hash = '#';
  let row = '';

  for (let i = 0; i < n; i++){
    for (let j = 1; j < n-i; j++) {
      row = row.concat(' ');
    };

    row = row.concat(hash, '\n');
    hash = hash.concat('#');
  };

  console.log(row);
};

staircase(4);
//   #
//  ##
// ###
//####
