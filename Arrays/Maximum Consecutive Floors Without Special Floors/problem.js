let bottom = 2
let top = 9
let special = [4,6];

var maxConsecutive = function(bottom, top, special) {

    // Sort special floors
    special.sort((a, b) => a - b);

    let maxGap = 0;

    // Gap before first special floor
    maxGap = Math.max(
        maxGap,
        special[0] - bottom
    );

    // Gaps between special floors
    for (let i = 1; i < special.length; i++) {

        let gap =
            special[i] - special[i - 1] - 1;

        maxGap = Math.max(maxGap, gap);
    }

    // Gap after last special floor
    maxGap = Math.max(
        maxGap,
        top - special[special.length - 1]
    );

    return maxGap;
};

console.log(
    maxConsecutive(bottom, top, special)
);