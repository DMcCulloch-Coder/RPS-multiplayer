// To Do:
//

$(document).ready(function(){
    
    // setting up firebase
    var firebaseConfig = {
        apiKey: "AIzaSyDk7zhvXIuG06AiRVGB-P6dhtnovDOQE04",
        authDomain: "rps-multiplayer-72a72.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-72a72.firebaseio.com",
        projectId: "rps-multiplayer-72a72",
        storageBucket: "rps-multiplayer-72a72.appspot.com",
        messagingSenderId: "280279858372",
        appId: "1:280279858372:web:0bc732964983f9bfb69d91",
        measurementId: "G-YFG039B5KT"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    let database = firebase.database();
    let playersInGame = database.ref('/connections')
    let arePlayersInGame = database.ref('.info/connected')


    // set global variables



    // declare functions

    

    // start program
    arePlayersInGame.on('value', function(snapshot) {
        if(snapshot.val()) {
            let add = playersInGame.push(true);

            add.onDisconnect().remove();

        }
    })

    playersInGame.on('value', function(snapshot) {
        //what happens when you add a player  if statments if there is player 1/2


    })

    $('#submit').on('click', function() {
        $('.container').css('display', 'block')
        $('#user-signup').css('display', 'none')
    })

})    



