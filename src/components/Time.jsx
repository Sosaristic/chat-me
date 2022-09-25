import React from "react";
import { Timestamp } from "firebase/firestore";

export default function Time({ time, normalTime, date }) {
  const handleDate = () => {
    const myTime = new Timestamp(time.seconds, time.nanoseconds);
    const milisecsFromFirestore = Math.floor(myTime.toMillis())
    const secondsFromFirestore =  Math.floor(myTime.toMillis() / 1000);
const currentTimeInSeconds =  Math.floor(Date.now() / 1000);
const elapsedSeconds = currentTimeInSeconds - secondsFromFirestore;

if(normalTime){
  const currentTime = new Date(milisecsFromFirestore)
  return currentTime.toLocaleTimeString()
}

else if(date){
  const currentDate = new Date(milisecsFromFirestore)
return currentDate.toDateString()
}
else{


  const seconds = Math.floor(elapsedSeconds % 60);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const hours = Math.floor((elapsedSeconds % (3600 * 24)) / 3600);
  const days = Math.floor(elapsedSeconds / (3600 * 24));

 
if (days > 0 && days < 2) {
    return "yesterday";
  }
  if (days > 2) {
    let newDate = new Date(myTime.toMillis());
    return newDate.toLocaleDateString();
  }
  if (hours) {
    let newDate = new Date(myTime.toMillis());
    return newDate.toLocaleTimeString();
  }
  if (minutes) {
    let newDate = new Date(myTime.toMillis());
    return newDate.toLocaleTimeString();
  }
  if (seconds) {
    return "just now";
  }
}

   

    
   
   
  };

  return <div>{handleDate()}</div>;
}
