// code your solution here
function superbowlWin(year) {
    for (const record of year) {
        if (record.result === "W") {
            return record.year
        }
    }
}
superbowlWin(result);
