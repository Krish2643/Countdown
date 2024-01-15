const endDate = "26 July 2068 10:37:20 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = ()=>{
        const end = new Date(endDate);
        const now = new Date();
       const diff = (end-now)/1000;   // difference in seconds

       if(diff<0) return;

       // convert into Dates
       inputs[0].value = (Math.floor(diff/60/60/24));
      // const days = (Math.floor(diff/60/60/24));

     // convert into Hours
      inputs[1].value = (Math.floor(diff/60/60)%24);
       // convert into Minutes
      inputs[2].value = (Math.floor(diff/60)%60);
       // convert into Seconds
       inputs[3].value = (Math.floor(diff)%60);


}

//clock();

setInterval(
    ()=>{
        clock() ;
    },
    1000
)
