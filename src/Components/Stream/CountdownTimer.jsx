import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const timeMap = {
    ms_per_day: (1000 * 60 * 60 * 24),
    ms_per_hour: (1000 * 60 * 60),
    ms_per_min: (1000 * 60),
    ms_per_sec: 1000,
};

const countdownStyle = makeStyles({
    timer: {
        fontSize: "14px",
        fontFamily: "'Abril Fatface', cursive"
    }
});

function CountdownTimer(props) {
    const classes = countdownStyle();

    // Banquet is February 20, 2021
    var Banquet = new Date("Feb 20, 2021 00:00:00").getTime();

    // update timer every second (1000 ms)
    var update = setInterval(function() {
        // get current time
        var currTime = new Date().getTime;
        // remaining time (in milliseconds)
        var count = Banquet - currTime;

        // get days, hours, minutes, seconds
        var days = Math.floor(count / timeMap[0]);
        var hours = Math.floor((count % timeMap[0]) / timeMap[1]);
        var minutes = Math.floor((count % timeMap[1]) / timeMap[2]);
        var seconds = Math.floor((count % timeMap[2]) / timeMap[3]);

        // Display the result in the element with matching id
        document.getElementById("banquet coundown").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;
        
        // display message at end of countdown
        if (count <= 0) {
            clearInterval(update);
            document.getElementById("banquet coundown").innerHTML = "Happy New Year!!"
        }
    }, 1000);

    return (
        <div></div>
    )
}

export default CountdownTimer;
