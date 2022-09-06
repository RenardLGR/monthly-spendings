const deleteBtn = document.querySelectorAll('.del')
const prices = document.querySelectorAll('.billPrice')

Array.from(deleteBtn).forEach(span => {
    span.addEventListener('click', deleteBill)
})


async function deleteBill(){
    const billId = this.parentNode.dataset.id
    try{
        const response = await fetch('bills/deleteBill', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'billIdFromJSFile': billId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



function showTotal(){
    let total = Array.from(prices).reduce((acc, cur) => acc + Number(cur.innerHTML), 0)
    let totalAmountCells = document.querySelectorAll('.total-amount-cell')
    Array.from(totalAmountCells).forEach(td => {
        td.innerHTML = total
    })
}

showTotal()


document.querySelector('.sort').addEventListener('click', () => {
    document.querySelector('.default').classList.toggle('hidden')
    document.querySelector('.sorted').classList.toggle('hidden')
})