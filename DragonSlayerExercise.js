

console.log("Archery Shooting");

var shooting = true;
var points = Math.floor(Math.random() * 2);
var totalPoints = 0;
var counter = 0;

while(shooting == true){
if(totalPoints <= 15){
    alert("Take a shot");
    Math.floor(Math.random() *10 + 4);
    var totalPoints = points + totalPoints;
    var counter = counter + 1;
}

else    {
        console.log("It took you"+ counter + "shots.");
    var shooting = false;
    }
}