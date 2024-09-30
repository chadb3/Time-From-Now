console.log("javascripts.js loaded successfully")
const minutes_array = [15,30,60];
//var timezone = new Date().getTimeee
//curret date time
var currentDateTime = new Date();
// test delete later
//const tryingToGetTimeZone=currentDateTime.toString().split(" ");
//console.log("arr: "+tryingToGetTimeZone);
// test delete later above
var currentDateTimeString = currentDateTime.toLocaleString();
const initialTimeString=currentDateTimeString.split(",")[1];
console.log("js: "+currentDateTimeString);
function initialize_times()
{
    document.getElementById("txt_future_time").innerHTML="Time in " + minutes_array[document.getElementById("time-selector").selectedIndex]+ " minutes:";

    document.getElementById("current_time").innerHTML=initialTimeString;
    var futureDateTime=new Date(currentDateTime.getTime()+30*60*1000);
	var futureTime=futureDateTime.toLocaleString().split(",")[1];
	document.getElementById("future_time").innerHTML=futureTime;
    console.log("Times Initialized");
}
initialize_times();

function updateChosenTime()
{
    // updated time so that the "time in" time is accurate, and updates correctly.
    var timeNow=new Date();
    const selectedTimeIndex=document.getElementById("time-selector").selectedIndex;
    //console.log("selectedTimeIndex: "+selectedTimeIndex);
    document.getElementById("txt_future_time").innerHTML="Time in " + minutes[selectedTimeIndex]+ " minutes:";
    var futureTime = new Date(timeNow.getTime()+minutes[document.getElementById("time-selector").selectedIndex]*60*1000).toLocaleString().split(",")[1];
    document.getElementById("future_time").innerHTML=futureTime;
}
setInterval(updateChosenTime,1000);
function progressClock()
{
    var timeNow=new Date();
    var currentTimeString=timeNow.toLocaleString().split(",")[1];
    document.getElementById("current_time").innerHTML=currentTimeString;
}
setInterval(progressClock,500);