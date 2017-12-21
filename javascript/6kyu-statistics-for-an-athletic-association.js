function stat(strg) {
  if (!strg)
    return ''
  else
    return results(strg)
}

function results(strg) {
  let newArr = strg.split(",")  //separate string by comma into an array
  let arrPieces = []

  for (let i = 0; i < newArr.length; i++) {
    arrPieces.push(newArr[i].trim().split("|"))  //trim() removes whitespace, separate by "|"
  }

    //calculate the range: difference between the lowest and highest values

    let secondsForRange = 0;
    let teamSeconds = [];

    for (let i = 0; i < arrPieces.length; i++) {
      let totalSeconds = 0;

      //calculate each 1/3 of the pieces
      totalSeconds += (parseInt(arrPieces[i][0] * 3600) + parseInt(arrPieces[i][1] * 60) + parseInt(arrPieces[i][2]))

      teamSeconds.push(totalSeconds)
     }
      secondsForRange = Math.max(...teamSeconds) - Math.min(...teamSeconds)

      let rangeNumber = convertSeconds(secondsForRange);


    //calculate the average: sum up the numbers and divide by number of values, carry over the teamSeconds
    let averageTotal = 0;

    for (let i = 0; i < teamSeconds.length; i++) {
      averageTotal += teamSeconds[i]
    }

    let secondsForAverage = Math.floor((averageTotal / teamSeconds.length))
    let averageNumber = convertSeconds(secondsForAverage)




    //calculate the median: sort the array and get mean of middle values
    let medianTotal = 0;
    let teamTotal = teamSeconds.sort((a,b) => a-b);
    let divideTeamTotal = Math.floor(teamTotal.length / 2);

    if (teamTotal.length % 2 != 0) {
      medianTotal = teamTotal[divideTeamTotal]
    } else {
      medianTotal = (teamTotal[divideTeamTotal - 1] + teamTotal[divideTeamTotal]) / 2
    }


    let medianNumber = convertSeconds(medianTotal)


    //return results formatted here: `${range} + ${average} + ${median}`
    let range =  `Range: ${rangeNumber} `
    let average = `Average: ${averageNumber} `
    let median = `Median: ${medianNumber}`

    return `${range}` + `${average}` + `${median}`

    }


    //convert all time to seconds to calculate better, round down with floor

    function convertSeconds(number) {
      let hours = Math.floor(number / 3600);
      let minutes = Math.floor(number % 3600 / 60);
      let seconds = Math.floor(number % 3600 % 60);
      if (hours < 10) {hours = "0" + hours}
      if (minutes < 10) {minutes = "0" + minutes}
      if (seconds < 10) {seconds = "0" + seconds}
      return `${hours}|${minutes}|${seconds}`
    }
