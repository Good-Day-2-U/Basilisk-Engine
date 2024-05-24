














// // Function to move the header to the right test
// const headerElement = document.querySelector('#title-header') as HTMLElement
// headerElement.style.position = 'absolute'
// headerElement.style.top = '0px'

// // capped at the curent Tickrate used to run the game


// export const moveHeader = (TICKRATE : number) => {
//   const tickrate = TICKRATE
//   const velPerSecond = 50
//   const velPerTick = velPerSecond / tickrate
//   let currentLeft = parseInt(headerElement.style.top)
//   if (isNaN(currentLeft)) {
//     currentLeft = 0;
//   }
//   headerElement.style.top = `${currentLeft + velPerTick}px`
//   console.log(`${(headerElement.style.top)}`)
//   // console.log(vel)
// }






// const headerElement = document.querySelector('#title-header') as HTMLElement;
// headerElement.style.position = 'absolute';
// headerElement.style.transform = 'translateY(0px)';

// // Function to move the header to the right test
// export const moveHeader = (TICKRATE: number) => {
//   const tickrate = TICKRATE;
//   const velPerSecond = 4;
//   const velPerTick = velPerSecond / tickrate;

//   // Extract the current translateY value
//   const currentTransform = headerElement.style.transform;
//   const match = currentTransform.match(/translateY\(([-0-9.]+)px\)/);
//   let currentTop = match ? parseFloat(match[1]) : 0;

//   // Calculate the new position
//   const newTop = currentTop + velPerTick;

//   // Apply the new position
//   headerElement.style.transform = `translateY(${newTop}px)`;
//   console.log(`Current top position: ${newTop}px`);
// };