import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container} from "@material-ui/core";

const countdownStyle = makeStyles({
    timer: {
        fontSize: "14px",
        fontFamily: "'Abril Fatface', cursive",
    },

    message: {
        fontSize: "14px",
        fontFamily: "'Abril Fatface', cursive",
    }
});

function CountdownTimer() {
    const classes = countdownStyle();
    // milliseconds per time unit
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // Banquet is February 20, 2021
    var Banquet = new Date("Feb 20, 2022 00:00:00").getTime();

    // get current time
    var now = new Date().getTime;

    // update timer every second (1000 ms)
    var update = setInterval(function() {
        // remaining time (in milliseconds)
        var count = Banquet - now;

        // get days, hours, minutes, seconds
        var days = Math.floor(count / day);
        var hours = Math.floor((count % day) / hour);
        var minutes = Math.floor((count % hour) / minute);
        var seconds = Math.floor((count % minute) / second);

        document.getElementById("days").innerHTML = Math.floor(count / (day)),
        document.getElementById("hours").innerHTML = Math.floor((count % (day)) / (hour)),
        document.getElementById("minutes").innerHTML = Math.floor((count % (hour)) / (minute)),
        document.getElementById("seconds").innerHTML = Math.floor((count % (minute)) / second);
            
        // countdown over, show stream
        if (count <= 0) {
            clearInterval(update);
            document.getElementById("countdown").innerText = "Welcome to Lunar!";
            return (
                <Container className={classes.video}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <iframe
                                style={{
                                    width: "1600px",
                                    height: "900px",
                                    // overflowY: "scroll", scroll currently disabled 
                                }}
                                title="lunar stream"
                                src="https://www.youtube.com/embed/zpD0k69QwRU"
                                frameborder="0"
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" allowfullscreen>
                            </iframe>
                        </Grid>
                    </Grid>
                </Container>
            ) 
        }
    }, 1000);
}
export default CountdownTimer;

