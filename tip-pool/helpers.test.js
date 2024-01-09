describe('check if math is mathin on helpers.js', function(){
    beforeEach(function(){
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
        billAmtInput.value = 20;
        tipAmtInput.value = 4; 
        submitPaymentInfo();  
        
    });

    it('calculateTipPercent(billAmt, tipAmt) should get the right tip percent of the "', function(){
        
        expect(calculateTipPercent(100,2)).toEqual(2);
        expect(calculateTipPercent(100,99)).toEqual(99);
        
    })

    it(' sumPaymentTotal() should sum allPayments key values', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(30);
        expect(sumPaymentTotal('tipAmt')).toEqual(6);
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    })
    it ('appendTd(tr,value) should append value as table data to a table tablerow',function(){
        const TableRow = document.createElement('tr');

        TableRow.id = 'paymentT'

        appendTd(TableRow,'data i want');
        paymentTbody.append(TableRow);
        const paymentTableDataT = document.querySelector('#paymentT');
        expect(paymentTableDataT.innerText).toContain('data i want');
        TableRow.remove()
;



    })

  afterEach(function(){
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {}; 
    paymentId = 0;
    submitPaymentInfo();
    updateSummary();
    const paymentTableData1 = document.querySelector('#payment1');
    const paymentTableData2 = document.querySelector('#payment2');
  
    paymentTableData1.remove();
    paymentTableData2.remove();

  })
      
})

