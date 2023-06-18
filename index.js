// // // code your solution here
// // // function razzle() {
// //     // console.log("You've been razzled!");
// // //   }
// // // // razzle();
// // function razzle(lawyer= "Billy",target= "'em") {
// //     console.log(`${lawyer} razzle-dazzles ${target}!`);
// //     }
// //     razzle(); 
// // // function razzle(lawyer = "Billy", target = "'em") {
// // //     console.log(`${lawyer} razzle-dazzles ${target}!`);
// // //   }
// // razzle("Methuselah", "T'challah")

// function saturdayFun(activity="roller-skate"){
    // console.log(`This Saturday, I want to ${activity}!`)
    
// }
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

saturdayFun('bathe my dog')

// console.log(1+1)
// "Razzle " + "dazzle!";
// function() {
//     console.log("Yet more razzling");}
// ƒ () {
//     console.log("Yet more razzling");
//   }

//  function mondayWork(purpose="go to the office") {
//     console.log(`This Monday, I will ${purpose}!`)  
// }
// mondayWork(); // Monday's task is to go to the office.
// mondayWork('finish project'); // Monday's task is to finish project.

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork('file my work' )

function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}
   
         
