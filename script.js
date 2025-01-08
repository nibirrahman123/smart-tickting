// for scrooling to other section by clicking a button
function scrollToSection(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
}
function buyTicketsBtn() {
    scrollToSection("buy-tickets")
}




let seatCount = 0;
const totalPrice = document.getElementById('total-price');
document.getElementById('button-container').addEventListener('click', function button(event) {
    const button = event.target; // Identify the clicked element
    // Only proceed if the clicked element is a button
    if (button.tagName === 'BUTTON') {
        const seat = button.innerText; // Get the seat number (e.g., 'C2')
        const seatInfoContainer = document.getElementById('seat-info-container');

        if (button.classList.contains('selected')) {
            // If selected, remove selection and decrease the count
            button.classList.remove('selected');
            seatCount--;

            // Remove the seat info from the seat-info container
            const seatInfo = document.getElementById(`seat-info-${seat}`);
            if (seatInfo) {
                seatInfoContainer.removeChild(seatInfo);
            }

        } else if (seatCount < 4) {
            // If not selected and there are fewer than 4 selected, add selection and increase the count
            button.classList.add('selected');
            seatCount++;

            // Create and append new seat info to the container
            const seatInfo = document.createElement('div');
            seatInfo.classList.add('flex', 'justify-between');
            seatInfo.id = `seat-info-${seat}`; // Unique ID for each seat

            // Create the content for the seat info
            seatInfo.innerHTML = `
                <span>${seat}</span>
                <span>Economy</span>
                <span class="font-bold">550</span>
            `;
            seatInfoContainer.appendChild(seatInfo);
        }

        // Update the seat count display
        let totalSeat = document.getElementById('seat-count');
        totalSeat.innerText = seatCount;
        let totalSeatText = totalSeat.innerText;
        let totalSeatNum = parseInt(totalSeatText);
        totalPrice.innerText = totalSeatNum * 550;
    }
});


function apply() {
    const cupon = document.getElementById('input-cupon');
    const cuponText = cupon.value;
    const cupon1 = document.getElementById('cupon-1');
    const cupon2 = document.getElementById('cupon-2');
    const cuponContainer = document.getElementById('cupon-container')

    if (cuponText === "NEW15" && seatCount === 4) {
        totalPrice.innerText = 1870;
        // copun1.classList.add('hidden');
        if(cupon1){
            cupon1.remove();
            cuponContainer.remove();
        }
    }
    else if (cuponText === 'COUPLE 20' && seatCount === 4) {
        totalPrice.innerText = 1760;
        if (cupon2) {
            cupon2.remove();
            cuponContainer.remove();
        }
    }

}



const cupon = document.getElementById('input-cupon');
// Add event listener to detect changes in the input field
cupon.addEventListener('input', function () {
    const applyBtn = document.getElementById('apply-btn');
    const cuponText = cupon.value; // Get the current value of the input field

    if (cuponText === '') {
        applyBtn.setAttribute('disabled', ''); // Disable button if input is empty  '' or can be used true
    }
    else {
        applyBtn.removeAttribute('disabled'); // Enable button for all other inputs
    }
});



function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}



function removeElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function getInputFieldValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue;
}



function bokingBtn(){
    const passengerName = getInputFieldValueById('passenger-name');
    const phoneNumber = getInputFieldValueById('phone-number');
    const emailId = getInputFieldValueById('email-id');
    if((passengerName && phoneNumber && emailId) !== ''){
        addElementById('full-site');
        removeElementById('modal-seciton');
    }
    else{
        document.getElementById('my_modal_1').showModal();
    }
    
}

function home(){
    location.reload();
}
