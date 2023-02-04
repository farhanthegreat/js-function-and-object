function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / getAverage.length;
    return average;
}
const assignment1Marks = 80;
const assignment2Marks = 90;
const assignment3Marks = 70;


var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);