//const timeDisplay = document.getElementById("timeDisplay")
//const startButton = document.getElementById("startButton")
//const pauseButton = document.getElementById("pauseButton")
//const stopButton = document.getElementById("stopButton")

//let startTime = 0:
//letelapsedTime = 0;
//letcurrentTime = 0;
//let intervalId;
//let hrs = 0;
//let mins = 0;
//let secs = 0;
//let paused = true;

        const timeWrapper = document.getElementById('timeDisplay');
        let seconds = 0;
        var timer;


        
        function startTimer(){
          setInterval(countSeconds, 1000);
          console.log("click")
        }

        function countSeconds(){
            timeWrapper.innerHTML = seconds;
            seconds++;
        }

        function pauseTimer(){ 
            clearInterval(timer);
            seconds = 0;
        }

        function resetTimer(){
            location.reload()
        }