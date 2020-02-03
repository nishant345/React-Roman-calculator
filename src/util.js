/** 
 * Utility: 	{type: Object} module that provide conversions and check for Roman Numerals
 * property: 	intToRoman {type:function} function to convert number to Roman
 * 				@param {type:Number} num :  Number to convert
 * 				@return {type:String} Roman Numeral
 * property: 	romanToInt {type:function} function to convert Roman numeral to decimal number
 * 				@param {type: String} romanNumeral : Roman Numeral to convert
 * 				@return {type:Number} converted Number
 * property: 	isRoman {type:function} function to convert number to Roman
 *          	@param {type: String} romanNumeral : Roman Numeral to check
 *          	@return {type: Boolean} true if the numeral is a Roman Numeral
 * author: Nishant Gaurav
 * date: 30.01.2020
 * version: I
**/

const Utility = {
    intToRoman: (num) => {
        let numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ],
        romanChar = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ],
        roman = "";
    
        for (let i= 0; i<numbers.length; i++) {
            while (numbers[i] <= num) {
				roman += romanChar[i];
				num -= numbers[i];
            }
        }
        return roman;
	},
	
    romanToInt: (romanNumeral) => {
        const DIGIT_VALUES = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };
        let result = 0,
			input = romanNumeral.split(''),
			inputLength = input.length
        
        for (let i = 0; i < inputLength; i++) {
            let curr = DIGIT_VALUES[input[i]];
            let next = DIGIT_VALUES[input[i + 1]];
            if (curr === undefined) {
              return 'null';
            } else {
				if (curr < next) {
					result += next - curr;
					i++;
				} else {
					result += curr;
				}
            }
        };
        return result;
	},
	
    isRoman: (roman) => {
        let patt = "M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})",
        result = roman.match(patt);
        return result.includes(roman);
    }
}

export default Utility; 


