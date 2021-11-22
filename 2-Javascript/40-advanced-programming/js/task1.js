/**
 * write a function currentTime():void, this should print the current time in following Format:
 *          Current Time: Today is: Monday
 *          Current Time is: 10 AM : 30: 43
 * 
 * Hints:
 *      something.getDay()
 *      something.getHours()
 *      something.getMinutes()
 *      something.getSeconds()
 */

function currentTime(){
    // define the Date Object
    const date = new Date()
    // getting the Day
    // define an array of Days
    const days = ["Sunday","Monday", "Tuseday", "Wednesday", "Thursday", "Friday"]
    let day = days[date.getDay()]
    console.log(day)
    // getting hours
    console.log(date.getHours())
    // let hours = date.getHours()// 13
    // if(hours > 12){
    //     hours -=  12// 1
    // }
    let hours = date.getHours()>12?date.getHours()-12:date.getHours()
    console.log(hours)
    hours<10?"0"+hours:hours
    // AM or PM
    // let amOrpm = ""
    // if(date.getHours()>12){
    //     amOrpm = "PM"
    // }else{
    //     amOrpm = "AM"
    // }
    // console.log(amOrpm)
    let amOrpm = date.getHours()>12?"PM":"AM"
    console.log(amOrpm)
    // getting Minutes
    let minutes = date.getMinutes()
    console.log(minutes)
    // getting seconds
    let seconds = date.getSeconds()
    console.log(seconds)
    let cTime = `Current Time: Today is: ${day}
Current Time is: ${hours} ${amOrpm} : ${minutes}: ${seconds}`
                 console.log(cTime)
}

currentTime()