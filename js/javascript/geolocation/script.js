console.log(navigator.geolocation.getCurrentPosition((position)=>{
    const {latitude , longitude}= position.coords
console.log(`latitude is : ${latitude} and longitude is : ${longitude}`);
// console.log(position.coords.longitude);


},(err)=>{
    console.error(err);
    
}));


// navigator.geolocation.watchPosition------------------>

console.log(navigator.geolocation.watchPosition((position)=>{
    const {latitude , longitude}= position.coords
console.log(`Live Tracking Location ---> latitude is : ${latitude} and longitude is : ${longitude}`);
// console.log(position.coords.longitude);


},(err)=>{
    console.error(err);
    
}));
