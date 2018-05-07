// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA3KyPdMZaiXV7XXIPAxMdbkWy0IVcilC0",
    authDomain: "movie-scheduler.firebaseapp.com",
    databaseURL: "https://movie-scheduler.firebaseio.com",
    projectId: "movie-scheduler",
    storageBucket: "movie-scheduler.appspot.com",
    messagingSenderId: "1019297784346"
  };

firebase.initializeApp(config);


//reference to firebase database
database = firebase.database();

// When users click "submit"
$("#addMovieButton").on("click", function(event) {
      
// This line prevents the page from refreshing when a user hits "enter".
    event.preventDefault();

//global vars
    var name = $("#movieNameInput").val().trim();
    var length = $("#movieLengthInput").val().trim();
    
//adds new data to firebase
    database.ref().push({
        NAME: name, 
        LENGTH: length
        })
});
    
// this is snapshotting user input and pushing it to firebase..... I think.
database.ref().on("child_added", function(childSnapshot) { 
    var name = childSnapshot.val().NAME;    
    var length = childSnapshot.val().LENGTH;

// // Clear the text-boxes after submission
$("#movieNameInput").val("");
$("#movieLengthInput").val("");

});

//Create Firebase event for adding movie to the database and a row in the html when a user adds an entry

// Store everything into a variable.
// var mName = childSnapshot.val().name;
// var mLength = childSnapshot.val().length;
// var hours = {
//     weekday: {open: moment("11:00am"), close: moment("11:00pm")}, 
//     weekend: {open: moment("10:30am"), close: moment("12:00am")}
// };

// // Calculate the minutes until arrival using hardcore math
//   // To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time
//   // and find the modulus between the difference and the frequency.
//   var differenceTimes = moment().diff(moment.unix(mLength), "minutes");
//   var mRemainder = moment().diff(moment.unix(mLength), "minutes") % 5;
//   var mMinutes = mFrequency - mRemainder;
  
//   // To calculate the schedule, subtract the mMinutes from theatre close time
//   var mSchedule = moment().subtract(mMinutes, "m").format("hh:mm A");


// // var movies = [];


// // function to get the nearest 5 minute
// function get_five(moment_object) {
//     moment_object.subtract(moment_object.get(minute) % 5, minutes);
//     return moment_object;
// };

// logic to create schedule...essentially theatre endtime - movie length gives the result 
// for (movie) in movies() { 
//   return movie[name];
//   for day_type in [weekday, weekend] {
//     showings = []
//     cur_showing = get_five(hours[day_type][close] - movie['run_time'])
//     showings.append(cur_showing)
//   }
//     // While we can pack in another movie (clean time + previews)
//     while (get_five(cur_showing - movie[run_time] + 35) > hours[day_type][open]) {
//       showings.append(get_five(cur_showing - movie[run_time] + 35))
//     return day_type
//     for showing in reverse(showings){
//       return showing();
//         }
//     }
// };




