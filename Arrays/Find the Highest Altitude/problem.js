let gain = [-5, 1, 5, 0, -7];
let altitudes = 0;
let Max_Altitudes = 0;
for (let i = 0; i < gain.length; i++) {
  altitudes = altitudes + gain[i];
  Max_Altitudes = Math.max(Max_Altitudes, altitudes);
}
console.log(Max_Altitudes);
