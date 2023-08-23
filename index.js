
// const customerTypes = ["r", "c", "i"];
// const maxMeter = 999999999;

// const ask = () => {
//   const customerCode = prompt("Please enter your customer code: 'r' (residental), 'c' (commercial), 'i' (industrial)");
//   const beginningMeter = parseInt(prompt("Please enter your beginning meter"));
//   const endingMeter = parseInt(prompt("Please enter your ending meter"));

//   if (!customerTypes.includes(customerCode)) {
//     alert("Please enter a correct customer code.");
//     return;
//   }

//   if (beginningMeter > maxMeter || beginningMeter < 0 || endingMeter > maxMeter || endingMeter < 0 || isNaN(beginningMeter) || isNaN(endingMeter)) {
//     alert("Please enter correct meter values.");
//     return;
//   }

//   let bill;
//   let totalUsedGallon;

//   if (customerCode === "r") {
//     totalUsedGallon = getGallonByMeters(beginningMeter, endingMeter);
//     bill = residentBill(totalUsedGallon);
//   } else if (customerCode === "c") {
//     totalUsedGallon = getGallonByMeters(beginningMeter, endingMeter);
//      bill = commercialBill(totalUsedGallon);
//   } else if (customerCode === "i") {
//     totalUsedGallon = getGallonByMeters(beginningMeter, endingMeter);
//     bill = industrialBill(totalUsedGallon);   }

//   alert(getAlertMessage(customerCode, beginningMeter, endingMeter, totalUsedGallon, bill));
// };

// const residentBill = (gallon) => {
//   return gallon * 0.0005+5;
// };
// const commercialBill = (gallon) => {
// if(gallon<4000000){
//     return 1000
// } 
// if(gallon>4000000){
//     return 1000+( gallon * 0.00025)
// } };
  
//   const industrialBill = (gallon) => {
//     if(gallon<4000000){
//         return 1000
//     } 
//     if(gallon=>4000000 && gallon<1000000){
//         return 2000
//     } 
//     if(gallon>1000000){return gallon*0.00025+2000}
//   };
  



// const getGallonByMeters = (beginningMeter, endingMeter) => {
//   return (endingMeter - beginningMeter) / 10;
// };

// const getAlertMessage = (customerCode, beginningMeter, endingMeter, totalUsedGallon, bill) => {
//   return `
// Customer Code: ${customerCode}
// Beginning Meter: ${beginningMeter}
// Ending Meter: ${endingMeter}
// Used Gallon: ${totalUsedGallon} gallon
// Amount Bill: ${bill} $
// `;
// };

// ask();
