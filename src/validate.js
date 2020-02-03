/** 
 * description: module to check string is valid Roman Numeral synachronously and async
 * author: Nishant Gaurav
 * date: 30.01.2020
 * version: I
**/

// imported module
import Utility from './util'; 

// Promise for the async validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
/**
 * Description: asynchronous validation for Roman Numerals
 * @param   {type: String} romanNumeral: roman numeral to check
 * @return  {type: Strinh} Error Messages
 */
export const  asyncValidateRomanNumeral = async romanNumeral => {
    await sleep(100);
    validateRomanNumeral(romanNumeral)
};
/**
 * Description: Synchronous validation for Roman Numerals
 * @param   {type: String} romanNumeral: roman numeral to check
 * @return  {type: Strinh} Error Messages
 */ 
export const validateRomanNumeral = romanNumeral => {
    let numeralValue = Utility.romanToInt(romanNumeral)
    if(romanNumeral.length < 1){
      return `Please enter at least one valid Roman Numeral`;
    } else if(numeralValue < 1 && numeralValue > 3999){
      return `Value out of bounds, please enter a valid Roman Numeral`;
    } else if(romanNumeral.indexOf(' ') >= 0) {
      return `Roman Numeral contains space, please enter a valid Roman Numeral`;
    } else if(! Utility.isRoman(romanNumeral)){
      return `Please enter a valid Roman Numeral`;
    } else {
      return ``;  
    }
}
  


