module.exports = function toReadable (number) {
    const units = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
      ];
      console.log(1);
      const dozens = [
        null,
        null,
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
        'hundred'
      ];
    
      let result;
      let unit;
      let dozen;
      let hundred;
    
      if (number >= 100) {
        hundred = Math.floor(number / 100);
        dozen = Math.floor( (number - hundred * 100) / 10);
        unit = number - hundred * 100 - dozen * 10;
        
        if (number % 100 === 0) {
            result = `${units[hundred]} ${dozens[10]}`;
            return result;
        }
        unit === 0 ? result = `${units[hundred]} ${dozens[10]} ${dozens[dozen]}` :
        result = `${units[hundred]} ${dozens[10]} ${dozens[dozen]} ${units[unit]}`;

        dozen < 2 ? result = `${units[hundred]} ${dozens[10]} ${units[number - hundred * 100]}` : null;
    
        return result;
      }
        dozen = Math.floor(number / 10);
        unit = number - dozen * 10;
    
        unit === 0 ? result = `${dozens[dozen]}` : 
        result = `${dozens[dozen]} ${units[unit]}`;

        dozen < 2 ? result = `${units[number]}` : null;
        return result;
}
