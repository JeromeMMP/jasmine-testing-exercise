describe('testing for functions in payments.js', function(){
    beforeEach(function(){
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        
    });
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        // const spy1 = spyOn(window,'submitPaymentInfo');
        // const spy2 = spyOn(window,'updateServerTable').and.callThrough();
        // const spy3 = spyOn(window,'updateSummary').and.callThrough();
        // const spy4 = spyOn(window,'appendPaymentTable').and.callThrough();
        submitPaymentInfo();
        
        // expect(spy1).toHaveBeenCalled();
        // expect(spy2).toHaveBeenCalled();
        // expect(spy3).toHaveBeenCalled();
        // expect(spy4).toHaveBeenCalled();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('10');
        expect(allPayments['payment1'].tipAmt).toEqual('2');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });

    it('createCurPayment() should create and obj with keys billAmt tipAmt & tipPercent', function(){
        
        expect(createCurPayment()).toEqual({billAmt: '10', tipAmt: '2', tipPercent: 20})
    })
   
    it('updateSummary() should add the sum of allPayments values with the same key and calculate the total percent of tips. Then add them as text to the sumary table as data ', function(){
        submitPaymentInfo();
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
     
        expect(summaryTds[0].innerHTML).toEqual('$20');
        expect(summaryTds[1].innerHTML).toEqual('$4');
        expect(summaryTds[2].innerHTML).toEqual('20%');

    })
    
  afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });

})



