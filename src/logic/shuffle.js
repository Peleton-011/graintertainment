//This follows the Knuth algorithm for shuffling an array

function shuffle(arr) {
    var old = arr.length, curr, i;
  
    // While there remain elements to shuffle…
    while (old) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * old--);
  
      // And swap it with the current element.
      curr = arr[old];
      arr[old] = arr[i];
      arr[i] = curr;
    }
  
    return arr;
  }

export default shuffle;