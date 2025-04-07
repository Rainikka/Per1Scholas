// const promise = new Promise((resolve, reject) => {
//   const allWentWell = true;
//   if (allWentWell) {
//     resolve('All things went well')
//   } else {
//     reject('Oops! Something did not go well')
//   }
// });
// console.log(promise)

// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber);

//   setTimeout(() => {
//     if (randomNumber < 4) {
//       resolve('Well Done! You Guessed Right!')
//     } else {
//       reject('Oops! You guessed wrong! Unlucky.')
//     }
//   }, 2000);
// });

// promise.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error)
// });

// // If one promise fails, then all chained promises fail (.all)

// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise One Resolve')
//   }, 2000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise Two Resolved!')
//   }, 1500);
// });

// Promise.all([promiseOne, promiseTwo])
//   .then((data) => console.log(data[0], data[1]))
//   .catch((error) => console.log(error));


const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ovenheated = false;
      if (ovenheated) {
        resolve('Preheat Oven to 180deg')
      } else {
        reject('Failed Task')
      }
    }, 1000)
  })
};

const addChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addchoco = true;
      if (addchoco) {
        resolve('Add Choco Chips to Mix')
      } else {
        reject('Failed Task')
      }
    }, 1000)
  })
};

const saltAndStir = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stirmixture = true;
      if (stirmixture) {
        resolve('Stir All Mixture Ingredients')
      } else {
        reject('Failed Task')
      }
    }, 1000)
  })
};

const shakeAndBake = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeuntilgooey = true;
      if (bakeuntilgooey) {
        resolve('Shake and Bake Until Gooey')
      } else {
        reject('Failed Task')
      }
    }, 1000)
  })
};


const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addChocoChips();
    console.log(taskTwo);

    const taskThree = await saltAndStir();
    console.log(taskThree);

    const taskFour = await shakeAndBake();
    console.log(taskFour);

    console.log('Enjoy Your Perfect Brownies');
  }

  catch (error) {
    console.log(error)
  }
}
bakeChocolateBrownies();
