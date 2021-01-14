import React, { useEffect, useState } from "react";
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

function FindTimeLeft() {
    const timeLeft = new Date('02/20,2021') - new Date();
    let formatTime = {};

    // format into days, hours, minutes, seconds
    if (timeLeft > 0) {
        formatTime = {
            days: Math.floor(timeLeft / timeMap[0]),
            hours: Math.floor((timeLeft % timeMap[0]) / timeMap[1]),
            minutes: Math.floor((timeLeft % timeMap[1]) / timeMap[2]),
            second: Math.floor((timeLeft % timeMap[2]) / timeMap[3]),
        }
    }

    return timeLeft;
}
function UpdateState() {
    const [remTime, setTimeLeft] = useState(FindTimeLeft());

    // update time every 1 second (1000ms)
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(FindTimeLeft());
        }, 1000);

        // clear timer when no longer mounted
        return () => clearTimeout(timer);    
    });
}

const timerComponents = [];

function CountdownTimer(props) {
    const classes = countdownStyle();

    // div element to store timer
    <div id="banquet countdown" className={classes.countdownStyle} />

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
        <div id="banquet countdown" />
    )
}

export default CountdownTimer;
