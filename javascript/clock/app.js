/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


Personal Notes
==============
- 1 second is 1000 ms

*/

function past(h, m, s) {
    return calcHours(h) + calcMins(m) + calcSeconds(s);
}

function calcSeconds(s) {
    return s * 1000;
}

function calcMins(m) {
    return m * 60 * 1000;
}

function calcHours(h) {
    return h * 3600 * 1000;
}