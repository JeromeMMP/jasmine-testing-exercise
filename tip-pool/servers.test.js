describe("Servers test (with setup and tear-down)", function() {
 
  beforeEach(function (){
    // initialization logic
    serverNameInput.value = 'Alice';
  });
  
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add anything to allServers if the input is empty', function(){
  serverNameInput.value = '';
  submitServerInfo();

  expect(Object.keys(allServers).length).toEqual(0);
});
  it('Should update a table with the data set', function(){
    submitServerInfo();
    updateServerTable();
    const currentData = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentData[0].innerText).toEqual('Alice')
  })



  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    updateServerTable();
    //teardown logic
  });
});
