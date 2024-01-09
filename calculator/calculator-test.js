
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 20,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('143.29');
  // ...
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 200000,
    years: 20,
    rate: 6
  }
  expect(calculateMonthlyPayment(values)).toEqual('1432.86');
  // ..
});

/// etc

