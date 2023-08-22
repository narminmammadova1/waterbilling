const customerCode = prompt(
  "Please enter your customer code: 'r' (residental), 'c' (commercial), 'i' (industrial)"
);
const beginningMeter = parseInt(prompt("Please enter your beginning meter"));
const endingMeter = parseInt(prompt("Please enter your ending meter"));

class WaterBilling {
  constructor(customerCode, beginningMeter, endingMeter) {
    this.customerCode = customerCode;
    this.beginningMeter = beginningMeter;
    this.endingMeter = endingMeter;
    this.customerTypes = ["r", "c", "i"];
    this.maxMeter = 999999999;
    this.bill = null;
    this.totalUsedGallon = null;
  }

  residentBill = (gallon) => {
    return gallon * 0.0005 + 5;
  };

  commercialBill = (gallon) => {
    if (gallon < 4000000) {
      return 1000;
    } else {
      return 1000 + gallon * 0.00025;
    }
  };

  industrialBill = (gallon) => {
    if (gallon < 4000000) {
      return 1000;
    } else if (gallon >= 4000000 && gallon < 10000000) {
      return 2000;
    } else {
      return gallon * 0.00025 + 2000;
    }
  };

  getGallonByMeters = () => {
    if (this.endingMeter < this.beginningMeter) {
      return (this.maxMeter - this.beginningMeter + this.endingMeter) / 10;
    } else {
      return (this.endingMeter - this.beginningMeter) / 10;
    }
  };

  ask = () => {
    if (!this.customerTypes.includes(this.customerCode)) {
      alert("Please enter a correct customer code.");
      return;
    }

    if (
      this.beginningMeter > this.maxMeter ||
      this.beginningMeter < 0 ||
      this.endingMeter > this.maxMeter ||
      this.endingMeter < 0 ||
      isNaN(this.beginningMeter) ||
      isNaN(this.endingMeter)
    ) {
      alert("Please enter correct meter values.");
      return;
    }

    this.totalUsedGallon = this.getGallonByMeters();

    if (this.customerCode === "r") {
      this.bill = this.residentBill(this.totalUsedGallon);
    } else if (this.customerCode === "c") {
      this.bill = this.commercialBill(this.totalUsedGallon);
    } else if (this.customerCode === "i") {
      this.bill = this.industrialBill(this.totalUsedGallon);
    }

    alert(this.getAlertMessage());
  };

  getAlertMessage = () => {
    return `
  Customer Code: ${this.customerCode}
  Beginning Meter: ${this.beginningMeter}
  Ending Meter: ${this.endingMeter}
  Used Gallon: ${this.totalUsedGallon} gallon
  Amount Bill: ${this.bill} $
  `;
  };
}

const waterBilling = new WaterBilling(
  customerCode,
  beginningMeter,
  endingMeter
);
waterBilling.ask();
