// check and see if the characters from the first string
// appear in the second string as a subsequence without their order changed

function isSubsequence(str1, str2) {
    let x = 0;
    let y = 0;
    if (!str1) return true;
    while (y < str2.length) {
      if (str2[y] === str1[x]) x++;
      if (x === str1.length) return true;
      y++;
    }
    return false;
  }