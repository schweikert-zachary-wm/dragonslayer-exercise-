
    var oddSeats = 0;

    var extraSeats = function(seatsInRow){
        var input = prompt("How many seats in the row?");
        if( input % 2 == true) {
            var totalOddSeats = oddSeats + 1;
            var moreSeatsA = prompt(totalOddSeats + "That row was odd. Do you want to add another row?");
            if(moreSeatsA == "yes") {seatsInRow};
            if(moreSeatsA == "no") {console.log("total unused seats =" + totalOddSeats)}
        }

        if(input % 2 == false){
            var moreSeatsB = prompt(totalOddSeats + "That row was even. Do you want to add another row?");
            if(moreSeatsB == "yes") {seatsInRow};
            if(moreSeatsB == "no") {console.log("total unused seats = " + totalOddSeats)}
        }
        console.log(extraSeats);