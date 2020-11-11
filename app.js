const button = document.querySelector('button');
const output = document.querySelector('p');

// function trackUserHandler() {
//   console.log('Clicked!');
// }

button.addEventListener('click', trackUserHandler);

////// Commenting out to redo in a better way ///////
/////////////////////////////////////////////////////
// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//       posData=> {
//         setTimeout( () => {
//           console.log(posData);
//         }, 2000);
//       },
//       errData => {
//         console.log(errData)
//       }
//   );
//   console.log("Getting the position...")
// }
/////////////////////////////////////////////////////

// CALLBACK HELL :D
// avoided by PROMISES
// lets see how to "promisify"

const getPosition = (opts) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
                resolve(success);
            }, error => {

            }, opts
        );
    });
};

const setTimer = duration => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Promise Done!");
            }, duration
        );
    });
    // return promise;
}

function trackUserHandler() {
    let positionData;
    getPosition()
        .then(posData => {
            positionData = posData;
            return setTimer(2000);
        })
        .then(data => {
            console.log(data);
            console.log(positionData);
        });
    setTimer(6000).then(() => {
        console.log("--timer done--");
    })
    console.log("Getting the position...")
}
