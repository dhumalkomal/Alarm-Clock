var sound=new Audio("https://freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav");
// var sound = Audio("http://alphapapa.net/startreksounds/TNG%20-%20Two%20Triple-Tone%20Alarm.wav");
sound.loop=true;
// https://freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav
// http://www.digitpress.com/dpsoundz/26YARSREV1.WAV
var clock=document.getElementById('clock');

var currentTime= setInterval( function() {
    var date= new Date();

    var hours=(12 -(date.getHours()));
    var minutes=date.getMinutes();
    var seconds= date.getSeconds();
    var ampm= (date.getHours()) < 12 ? "AM" :"PM";
    
    if(hours < 0){
        hours = hours * -1;
    }
    else if(hours == 0){
        hours = 12;
    }
    else{
       hours = hours;
    }
    
    // clock.innerHTML= hours +" :" + minutes+ " :" + seconds +" :" +"AM"+"PM";
     clock.textContent = addZero(hours)+ ":" + addZero(minutes) +":" + addZero(seconds) + ":" +ampm ;
}, 1000);

function addZero(time){
    return (time < 10) ? "0" + time :time ;
}

//hours Menu
function hoursMenu() {
    var select = document.getElementById("alarmHrs");
    var hrs = 12;
    for (let i = 1; i <= hrs; i++) {
        select.options[select.options.length] =
            new Option(i < 10 ? "0" + i : i, i);
    }
}
hoursMenu();

//Minute Menu
function MinuteMenu() {
    var select = document.getElementById("alarmMin");
    var mins = 59;
    for (let i = 1; i <= mins; i++) {
        select.options[select.options.length] =
            new Option(i < 10 ? "0" + i : i, i);
    }
}
MinuteMenu();

//Second Menu
function SecondMenu() {
    var select = document.getElementById("alarmSec");
    var secs = 59;
    for (let i = 1; i <= secs; i++) {
        select.options[select.options.length] =
            new Option(i < 10 ? "0" + i : i, i);
    }
}
SecondMenu();


// Set Alarm 
function SetAlarm(){
	// alert("Set Alarm");
    console.log('SetAlarm function called');
	var hr=document.getElementById('alarmHrs');
    var min=document.getElementById('alarmMin');
    var sec=document.getElementById('alarmSec');
    var ap=document.getElementById('ampm');
   
	var selectHours=hr.options[hr.selectedIndex].value;
	var selectMinutes=min.options[min.selectedIndex].value;
    var selectSeconds=sec.options[sec.selectedIndex].value;
	var selectAP=ap.options[ap.selectedIndex].value;

    var alarmTime= addZero(selectHours) + ":" +
                   addZero(selectMinutes) + ":" +
                   addZero(selectSeconds) + ":" +
                   addZero(selectAP) ;
        //    console.log(AlarmTime);
                document.getElementById('alarmHrs').disabled=true;
                document.getElementById('alarmMin').disabled=true;
                document.getElementById('alarmSec').disabled=true;
                document.getElementById('ampm').disabled=true;

                var clock= document.getElementById('clock');

                ///Play Audio when item

                setInterval( function() {
                    var date= new Date();
                
                    var hours=(12 -(date.getHours()));
                    var minutes=date.getMinutes();
                    var seconds= date.getSeconds();
                    var ampm= (date.getHours()) < 12 ? "AM" :"PM";
                    
                    if(hours < 0){
                        hours = hours * -1;
                    }
                    else if(hours == 0){
                        hours = 12;
                    }
                    else{
                       hours = hours;
                    }
                    
                    // clock.innerHTML= hours +" :" + minutes+ " :" + seconds +" :" +"AM"+"PM";
                    var currentTime= clock.textContent = addZero(hours)+ ":" +
                                                         addZero(minutes) +":" + 
                                                         addZero(seconds) + ":" 
                                                         +ampm ;


                    if(alarmTime == currentTime){
                         sound.play();
                     }
                }, 1000);
                   
}

function clearAlarm(){
                document.getElementById('alarmHrs').disabled=false;
                document.getElementById('alarmMin').disabled=false;
                document.getElementById('alarmSec').disabled=false;
                document.getElementById('ampm').disabled=false;
                sound.pause();
}




