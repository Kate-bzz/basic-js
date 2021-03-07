module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let ans = '';

  const isLetter = (c) => c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z';

  for (let i = 0; i < members.length; i++)
      if (String(members[i]) === members[i]) {
          let j = 0;
          while (!isLetter(members[i][j])) j++;
          ans += members[i][j].toUpperCase();
      }

  if (ans === '') return false;

  return ans.split('').sort().join('');
};
