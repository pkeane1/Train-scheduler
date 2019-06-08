var firebaseConfig = {
    apiKey: "AIzaSyC-JVredgShPnKGz6lKVB873LOeQwRamag",
    authDomain: "clickcounter2-67ecf.firebaseapp.com",
    databaseURL: "https://clickcounter2-67ecf.firebaseio.com",
    projectId: "clickcounter2-67ecf",
    storageBucket: "clickcounter2-67ecf.appspot.com",
    messagingSenderId: "376340177462",
    appId: "1:376340177462:web:392e3c5ef15259cb"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

var database = firebase.database();


// When i click submit i want to add a new train to my add train table//
// I want to add a click event on my train forum that pushes to firebase and then to my train table//


$("#add-train-btn").on("click",function(event){
    event.preventDefault();

    var train = $("#Train-name-input").val().trim()
    var destination =  $("#Destination-input").val().trim()
    var trainTime = $("#Time-input").val().trim()
    var freq = $("#rate-input").val().trim()


    var newTrain = {
        name:train,
        destination:destination,
        time:trainTime,
        frequency:freq
    };

    database.ref().push(newTrain)

    console.log(newTrain.name);


})
database.ref().on("child_added", function(childSnapshot) {

name = childSnapshot.val().name;
destination = childSnapshot.val().destination;
trainTime = childSnapshot.val().time;
freq = childSnapshot.val().frequency;


});