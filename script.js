console.log('Alarm Clock')
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

// Hours Menu
// function hoursMenu(){
//     var select= document.getElementById("alarmHrs");
//     var hrs= 12;
//     for( i=1; i<= hrs; i++){
//         select.options[select.options.length]=
//         new Option(i < 10 ? "0" + i : i, i);
//     }
// }

//hours Menu
for (let i = 1; i <= 12; i++) {
    var select= document.getElementById("alarmHrs");
    i = i < 10 ? `0` : i;
    let option = `<option value="${i}">${i}</option>`;
    select.firstElementChild.insertAdjacentHTML("afterend", option);
}

//Minute Menu
// for (let i = 1; i <= 59; i++) {
//     var select= document.getElementById("alarmMin");
//     i = i < 10 ? `0` : i;
//     let option = `<option value="${i}">${i}</option>`;
//     select.firstElementChild.insertAdjacentHTML("afterend", option);
// }
// for (let i = 2; i > 0; i--) {
//     let ampm = i == 1 ? "AM" : "PM";
//     let option = `<option value="${ampm}">${ampm}</option>`;
//     selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
// }
