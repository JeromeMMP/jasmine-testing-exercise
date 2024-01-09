
// append button that will delete the current row
function appendDeleteBtn(tr){
    let deleteBtn = document.createElement('td');
    deleteBtn.innerText = 'X';
    deleteBtn.setAttribute('class', 'deleteBtn');
    tr.append(deleteBtn)
    deleteBtn.addEventListener('click',function(e){
        deleteBtn.parentElement.remove();
        delete allServers[deleteBtn.parentElement.id]; 
    })
}

function appendDeleteBtnPayments(tr){
    let deleteBtn = document.createElement('td');
    deleteBtn.innerText = 'X';
    deleteBtn.setAttribute('class', 'deleteBtn');
    tr.append(deleteBtn)
    deleteBtn.addEventListener('click',function(e){
        deleteBtn.parentElement.remove();
        delete allPayments[deleteBtn.parentElement.id];
        updateSummary(); 
    })
}
