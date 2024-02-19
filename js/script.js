const allSeats = document.getElementsByClassName('common-seats');
let seatAdd = 0;
let count = 0;
let seatSales = 8;
for(const seats of allSeats){
    
    seats.addEventListener('click', function (e){
        if (count< 4) {
            seats.classList.toggle('selected');
            if (seats.classList.contains('selected')) {
              count++;
            } else {
              count--;
            }
          } else {
            alert('You can only select up to 4 buttons.');
            return;
          }
       
        const bgColorAdd = seats.classList.add('bg-green-500')
        
        seatAdd = seatAdd + 1;
       
       const addBtn = document.getElementById('seat-add').innerText;
       
       document.getElementById('seat-add').innerText = seatAdd;
       seatSales = seatSales - 1;
       const seatLess = document.getElementById('seat sales').innerText;
       document.getElementById('seat sales').innerText = seatSales;
    
    // price:
    const ticketPrice = document.getElementById('ticket-price').innerText;
   const price = parseInt(ticketPrice);
   
   
   const seatName = e.target.innerText;


       const appendContainer = document.getElementById('append-container');
       const li = document.createElement('li')
       const p = document.createElement('p');
       p.innerText = e.target.innerText;
       const p2 = document.createElement('p');
       p2.innerText = "Economy";
       const p3 = document.createElement('p')
       p3.innerText = parseInt(ticketPrice);
    // now append
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3)
   appendContainer.appendChild(li)
  

// total cost count:
const totalCost = document.getElementById('total-price').innerText;
const total = parseInt(totalCost);
const final = total + parseInt(ticketPrice);
document.getElementById('total-price').innerText = final;

// coupon discount

// grandTotal count:
const grandTotal = document.getElementById('grand-total').innerText;
const grandPrice = parseInt(grandTotal);
const grand = grandPrice + parseInt(ticketPrice);
document.getElementById('grand-total').innerText = grand;
    })
}

const btn = document.getElementById('applyButton');
btn.addEventListener('click', function (){
    const couponElement = document.getElementById('inputField').value;
    const applyContainer = document.getElementById('apply-container');
    if(couponElement === 'NEW15' || couponElement === 'Couple 20'){
        applyContainer.classList.add('hidden')
    }
    else{
        alert('put the right coupon code here')
    }
})









