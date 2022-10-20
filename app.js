
let companyDetailsDiv = document.querySelector('.company-details'),
companyReceivedDiv = document.querySelector('.company-received'),
totalBlDiv = document.querySelector('.total-bl'),
blInput = totalBlDiv.querySelector('input'),
firstCompanyName = document.querySelector('#first-company-name'),
firstCompanyBL = document.querySelector('#first-company-bl'),
secondCompanyBL = document.querySelector('#second-company-bl'),
secondCompanyName = document.querySelector('#second-company-name'),

firstCompanyConvertedName = document.querySelectorAll('.first-company'),
secondCompanyConvertedName = document.querySelectorAll('.second-company'),
proceedBtn = document.querySelector('.proceed-button button');

proceedBtn.addEventListener('click',()=>{
    if( blInput.value && firstCompanyName.value && firstCompanyBL.value && secondCompanyName.value && secondCompanyBL.value){
        companyReceivedDiv.classList.add('active');
        companyDetailsDiv.classList.add('hidden');
        totalBlDiv.classList.add('hidden');
        firstCompanyConvertedName.forEach(index=>index.innerText = firstCompanyName.value);
        secondCompanyConvertedName.forEach(index=>index.innerText = secondCompanyName.value);
    }else{
        alert('Fill up all field')
    }
})