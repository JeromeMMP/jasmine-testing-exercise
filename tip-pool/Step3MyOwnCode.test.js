// let serverTable = document.querySelector('#serverTable tbody');

describe('testing my ownCode', function(){
    beforeEach(function(){
        serverNameInput.value = 'Jerome?';
        submitServerInfo();
        billAmtInput.value = 10;
        tipAmtInput.value = 2; 
        submitPaymentInfo()
    });
    
    it('should add delete button when apppendDeleteBtn(tr) is called ', function(){
        let serverData = document.querySelectorAll('#serverTable tbody tr td');
        let btn = serverData[2];
      
        expect(serverData.length).toEqual(3);
        expect(btn.innerHTML).toEqual('X');
        });
    it('should add delete button in payment table when submitting payment info', function(){
        let paymentData = document.querySelectorAll('#paymentTable tbody tr td');
        let btn2 = paymentData[3];
        expect(paymentData.length).toEqual(4);
        expect(btn2.innerHTML).toEqual('X');

    })

    afterEach(function() {
        serverNameInput.value = '';
        allServers = {};
        updateServerTable();
        //teardown logic
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
