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
    const selectedTimeIndex=document.getElementById("time-selector").selectedIndex;
    //document.getElementById("txt_future_time").innerHTML="Time in " + minutes_array[document.getElementById("time-selector").selectedIndex]+ " minutes:";
    document.getElementById("txt_future_time").innerHTML="Time in " + "<div id=\"red_text_time\">"+minutes_array[selectedTimeIndex]+"</div>"+ " minutes:";

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
    document.getElementById("txt_future_time").innerHTML="Time in " + "<div id=\"red_text_time\">"+minutes_array[selectedTimeIndex]+"</div>"+ " minutes:";
    var futureTime = new Date(timeNow.getTime()+minutes_array[selectedTimeIndex]*60*1000).toLocaleString().split(",")[1];
    document.getElementById("future_time").innerHTML=futureTime;
}
setInterval(updateChosenTime,1000);
function progressClock()
{
    var timeNow=new Date();
    var currentTimeString=timeNow.toLocaleString().split(",")[1];
    document.getElementById("current_time").innerHTML=currentTimeString;
}
setInterval(progressClock,1000);

function saveTime()
{
    var timeNow=new Date();
    var currentTimeString=timeNow.toLocaleString().split(",")[1];
    const selectedTimeIndex=document.getElementById("time-selector").selectedIndex;
    var futureTime = new Date(timeNow.getTime()+minutes_array[selectedTimeIndex]*60*1000).toLocaleString().split(",")[1];
    console.log("timeNow:"+currentTimeString);
    console.log("futureTime: "+futureTime);
    splt_time=futureTime.split(":");
    console.log(splt_time);
    AmPm=splt_time[2].split(" ")[1];
    console.log(AmPm);
    newTimeStrint=splt_time[0]+":"+splt_time[1]+" "+AmPm;
    console.log(newTimeStrint);
    //var timeSnapShotStringLog = "Time of snapshot: "+currentTimeString+" \nTime in "+minutes_array[selectedTimeIndex]+" minutes: "+futureTime;
    var timeSnapShotStringLog = "Time of snapshot: "+currentTimeString+" \nTime in "+minutes_array[selectedTimeIndex]+" minutes: "+newTimeStrint;

    //var timeSnapShotString = "<br>Time of <em><u>snapshot</u></em>: "+currentTimeString+" \n<br>Time in <strong>"+minutes_array[selectedTimeIndex]+"</strong> minutes: "+futureTime;
    var timeSnapShotString = "<br>Time of <em><u>snapshot</u></em>: "+currentTimeString+" \n<br>Time in <div id=\"red_text_time\"><strong>"+minutes_array[selectedTimeIndex]+"</strong></div> minutes: "+newTimeStrint;
    console.log(timeSnapShotStringLog);
    document.getElementById("time_snapshot").innerHTML=timeSnapShotString;
}

    
    