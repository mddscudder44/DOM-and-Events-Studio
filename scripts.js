// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeOffBtn = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight')
    let landBtn = document.getElementById('landing');




    takeOffBtn.addEventListener('click', function() {
        let confirmTakeoff = confirm("Please confirm that the shuttle is ready for takeoff")
        if (confirmTakeoff) {
            flightStatus.innerText = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000
        } else {
            console.log("its false")
        }
    });

    landBtn.addEventListener('click', function() {
        let confirmLand = confirm('The shuttle is landing. Landing gear engaged')
    })
        
})
