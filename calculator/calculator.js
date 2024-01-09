window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    //what does the plus sign do here?
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

function setupIntialValues() {
  const values = {amount: 20000, years:20, rate: 6};
  const amountDef = document.getElementById("loan-amount");
  amountDef.value = values.amount ;
  const yearsDef = document.getElementById("loan-years");
  yearsDef.value = values.years;
  const rateDef = document.getElementById("loan-rate");
  rateDef.value = values.rate;

    update();

}


// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // amount of payment
  const AOP = values.amount;
  // payment interest rate
  const PIR = (values.rate/100)/12;
  //total number of payments
  const TNOP = values.years*12;
  //unrounded math
  const monthlyToRound = (AOP*PIR)/(1-Math.pow((1+PIR), -TNOP));
  const monthly = monthlyToRound.toFixed(2);
  return monthly
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if( `${monthly}` !== NaN){
  document.getElementById("monthly-payment").innerText = `$ ${monthly}`;
  }
  else { document.getElementById("monthly-payment").innerText = 'Please fill in the data so I can calculate.'}

}
