let topTracker = 0;
let leftTracker = 0;

window.addEventListener('load', function () {
    console.log('Its loaded!');

    /*
    The rocket image should move 10 px in the direction of the button that was clicked.
    If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    */

    document.getElementById('up').addEventListener('click', function() {

        if (topTracker - 10 < 0) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; position: relative;");
    });

    document.getElementById('down').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        let rocket = document.getElementById('rocket');
        console.log(container.offsetHeight - rocket.height);
        if (topTracker + 10 > container.offsetHeight - rocket.height) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;");
    });

    document.getElementById('left').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        if (leftTracker - 10 < (-1 * (container.offsetLeft) / 2) ) return;

        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;");
    });

    document.getElementById('right').addEventListener('click', function() {

        let container = document.getElementById('shuttleBackground');
        if (leftTracker + 10 > (container.offsetLeft) / 2 ) return;

        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;");
    });


    document.getElementById('missionAbort').addEventListener('click', function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById('flightStatus').innerText = 'Mission aborted.';
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
            document.getElementById('spaceShuttleHeight').innerText = '0';

            rocket.setAttribute("style", "top:0px; left: 0px; position: relative;");
        }
    });

    document.getElementById('landing').addEventListener('click', function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerText = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';
        rocket.setAttribute("style", "top:0px; left: 0px; position: relative;");
    })

    document.getElementById('takeoff').addEventListener('click', function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            document.getElementById('flightStatus').innerText = "Shuttle in flight";
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue;');
            document.getElementById('spaceShuttleHeight').innerText = '10000';

        }
    });


}); 