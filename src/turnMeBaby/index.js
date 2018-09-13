/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {

  for (let i=0; i=str.length / 2; i++) {
    let j = str.length - 1 - i;
    [ str[i], str[j] ] = [ str[j], str[i] ];
  }
  return str;
};

export default turnMeBaby;
