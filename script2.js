var sound = new Audio("/soundEffect/clock-alarm-8761.mp3");
sound.loop=true;

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
    return (time < 10) ? "0" + time:time ;
}

//hours Menu
function hoursMenu() {
    var select = document.getElementById("alarmHrs");
    var hrs = 12;
    for (let i = 1; i <= hrs; i++) { // Change "<" to "<="
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
            new Option(i < 10 ? "0" + i:i, i);
    }
}
MinuteMenu();

//Second Menu
function SecondMenu() {
    var select = document.getElementById("alarmSec");
    var secs = 59;
    for (let i = 1; i <= secs; i++) {
        select.options[select.options.length] =
            new Option(i < 10 ? "0" + i:i, i);
    }
}
SecondMenu();

var sound = new Audio("/soundEffect/clock-alarm-8761.mp3");
sound.loop=true;

// Set Alarm 
function SetAlarm(){
    
	alert("Set Alarm");
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
                   selectAP ;
           console.log(alarmTime);
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
                    var currentTime=  addZero(hours)+ ":"+
                                      addZero(minutes)+":" + 
                                      addZero(seconds) + ":" 
                                      +ampm ;
                    // console.log(currentTime);
                    if(alarmTime == currentTime){
                            sound.play();
                        //  console.log('alarm ringing');
                     }
                                                         
                }, 1000);

                // Event listener to start playing the sound when it's ready
                // sound.addEventListener('canplaythrough', function() {
                //     sound.play();
                    
                // });
                   
}


function clearAlarm(){
                document.getElementById('alarmHrs').disabled=false;
                document.getElementById('alarmMin').disabled=false;
                document.getElementById('alarmSec').disabled=false;
                document.getElementById('ampm').disabled=false;
                sound.pause();
}




