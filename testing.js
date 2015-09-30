
    var totalOddSeats = 0;
    var completed = "NotDone";
    var totalOddSeats = 0;

    while(completed == "NotDone") {
        var input = prompt("How many seats in the row?");
        if (input % 2 == true) {
            var totalOddSeats = totalOddSeats + 1;
            var moreSeatsA = prompt(totalOddSeats + "That row was odd. Do you want to add another row?");
            if (moreSeatsA == "no") {
                console.log("total unused seats =" + totalOddSeats);
                var completed = "done"
            }
            if (moreSeatsA == "yes") {
                console.log("Adding another row...")
            }
        }

        if (input % 2 == false) {
            var moreSeatsB = prompt(totalOddSeats + "That row was even. Do you want to add another row?");
            if (moreSeatsB == "yes") {
                console.log("Adding a new row");
            }

            if (moreSeatsB == "no") {
                console.log("total unused seats = " + totalOddSeats);
                var completed = "done"
            }
        }
    }