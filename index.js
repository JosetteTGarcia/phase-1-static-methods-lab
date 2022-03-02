class Formatter {
  static capitalize(string) {
    // const letters = str.split('');
    // letters[0].upperCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-z0-9- '']/gi, '')
    
  }

  static titleize(string) {
    let dontCap =  ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let finalString = [];
    let wordsFromString = string.split(" ");
    for (let n = 0; n < wordsFromString.length; n++){
      if (n == 0) {
        finalString.push(this.capitalize(wordsFromString [n]))
      } else{
        if (dontCap.includes(wordsFromString [n])){
          finalString.push( wordsFromString[ n ] )
        } else {
          finalString.push( this.capitalize( wordsFromString[ n ] ) )
        }
      }
    }
    return finalString.join(" ");
  }
}
