
let companyDetailsDiv = document.querySelector('.company-details'),
companyReceivedDiv = document.querySelector('.company-received'),
totalBlDiv = document.querySelector('.total-bl'),
blInput = totalBlDiv.querySelector('input'),
firstCompanyName = document.querySelector('#first-company-name'),
firstCompanyBL = document.querySelector('#first-company-bl'),
secondCompanyBL = document.querySelector('#second-company-bl'),
secondCompanyName = document.querySelector('#second-company-name'),

firstCompanyReceived = document.getElementById('first-company-received'),
secondCompanyReceived = document.getElementById('second-company-received'),

firstCompanyConvertedName = document.querySelectorAll('.first-company'),
secondCompanyConvertedName = document.querySelectorAll('.second-company'),
modals = document.querySelector('.modals'),
crossBtn = document.querySelector('.cross-button span')
proceedBtn = document.querySelector('.proceed-button button');

proceedBtn.addEventListener('click',()=>{
    if( blInput.value && firstCompanyName.value && firstCompanyBL.value && secondCompanyName.value && secondCompanyBL.value){
        modals.classList.add('active'); 
        firstCompanyConvertedName.forEach(index=>index.innerText = firstCompanyName.value);
        secondCompanyConvertedName.forEach(index=>index.innerText = secondCompanyName.value);
    }else{
        // alert('Fill up all field');
        modals.classList.add('active'); 


        //--------------------------------- Calculation starts here 
        let totalBlTon = parseInt(blInput.value),
        totalBlBag = totalBlTon * 20,       
        totalReceived = parseInt(firstCompanyReceived.value) + parseInt(secondCompanyReceived.value)
        excessShort = totalReceived - totalBlBag 
        // console.log(totalBlBag);
        // console.log(totalReceived);
        // console.log(totalBlBag - totalReceived);
        console.log(excessShort);

        if(excessShort<0){
            document.querySelector('.blQuantityBag').innerText = totalBlBag;
            document.querySelector('.shortExcess').innerText = 'Short';
            document.querySelector('.shortExcess').style.color = 'red'
            document.querySelector('.short-amount').innerText = excessShort;
        }else{
            document.querySelector('.blQuantityBag').innerText = totalBlBag;
            document.querySelector('.shortExcess').innerText = 'Excess';
            document.querySelector('.shortExcess').style.color = 'green'
            document.querySelector('.short-amount').innerText = excessShort;
        }
        ;


        document.querySelector('.received-ton').innerText = totalReceived;
    }
})

modals.addEventListener('click', (e)=>{
    if(e.target.className == 'fa-solid fa-xmark'){
        modals.classList.remove('active');   
    }    
})




