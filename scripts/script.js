'use strict'

    let dataBase=[
        {
            itemName:"normalHamburger",
            itemId:0,
            price:8000,
            number:0
        },
        {
            itemName:"specialHamburger",
            itemId:1,
            price:10000,
            number:0
        },
        {
            itemName:"cheeseHamburger",
            itemId:2,
            price:10000,
            number:0
        },
        {
            itemName:"spacialcheeseHamburger",
            itemId:3,
            price:20000,
            number:0
        },
        {
            itemName:"specialFriedPotato",
            itemId:4,
            price:25000,
            number:0
        },
        {
            itemName:"friedPotato",
            itemId:5,
            price:10000,
            number:0
        },
        {
            itemName:"dietSoda",
            itemId:6,
            price:6000,
            number:0
        },
        {
            itemName:"normalSoda",
            itemId:7,
            price:5000,
            number:0
        },
        {
            itemName:"seasonSalad",
            itemId:8,
            price:8000,
            number:0
        },
        {
            itemName:"cesarSalad",
            itemId:9,
            price:25000,
            number:0
        },
]
const x=document.querySelector(".select-section")
let pureSum=document.getElementById("pureSum")
let karmozd5darsad=document.getElementById("karmozd5darsad")
const discountBtn=document.getElementById("button-addon1")
let discountInput=document.getElementById("discountInput")
let finalPriceValue=document.getElementById("finalPriceValue")
let takhfifValue=document.getElementById("takhfifValue")
const finalSubmitButton=document.querySelector(".final-submit-button")
const container=document.querySelector(".my-container")
const modal=document.querySelector(".my-modal")
const modalBtn=document.querySelector(".modal-btn")
let discountCondition="nothing"
let sumOfAll=0;
let karmozd=0;
let takhfif;
let finalPrice=0;
const renderFinal=()=>
{
    //pureSum section:
    sumOfAll=0
    dataBase.forEach(item=>
        {
            sumOfAll=sumOfAll+(item.number*item.price)
        })
        pureSum.innerHTML=`${sumOfAll} t`  ;

    //karmozd section:
    karmozd=(sumOfAll*5)/100;
    karmozd5darsad.innerHTML=`${karmozd}t`
    
    finalPrice=karmozd+sumOfAll;
    
    
    //discount and final price section
    if(discountCondition==="Golden")
    {
        finalPrice=(finalPrice*70)/100
        takhfif="30%"
    }
    else if(discountCondition==="Silver")
    {
        finalPrice=(finalPrice*80)/100
        takhfif="20%"
    }
    else if(discountCondition==="Bronze")
    {
        finalPrice=(finalPrice*90)/100
        takhfif="10%"
    }
    else
    {
        takhfif="0%"
    }
        
    finalPriceValue.innerHTML=`${finalPrice}t`
    takhfifValue.innerHTML=takhfif
}

const plusAndMinusFunc = (e)=>
{
    let target=e.target
    if(target.closest("div").className==="plus-counter")
    {
        dataBase.forEach((item)=>{
            if(item.itemName===target.closest("div").id)
            {
                item.number=item.number+1
                target.closest("div").nextSibling.nextSibling.innerHTML=item.number
            }
        })
    }

    else if(target.closest("div").className==="minus-counter")
    {
        dataBase.forEach((item)=>{
            if(item.itemName===target.closest("div").id)
            {
                if(item.number>0)
                {
                    item.number=item.number-1;
                    target.closest("div").previousSibling.previousSibling.innerHTML=item.number
                }
            }
        })
    }
}


x.addEventListener('click',(e)=>
{
    plusAndMinusFunc(e)
    renderFinal();
})


discountBtn.addEventListener('click',(e)=>
{
    e.preventDefault()
    if(discountInput.value==="Golden")
        discountCondition="Golden"
    else if(discountInput.value==="Silver")
        discountCondition="Silver"
    else if(discountInput.value==="Bronze")
        discountCondition="Bronze"
    else
        discountCondition="nothing"

    renderFinal();
})

finalSubmitButton.addEventListener('click',(e)=>
{
    e.preventDefault()
    container.classList.add("modal-blurer");//blur and brightness class
    modal.style.display="block"
    // container.style.filter="blur(8px)"

})
modalBtn.addEventListener("click",(e)=>
{
    e.preventDefault()
    // container.style.filter="none"
    modal.style.display="none"
    container.classList.remove("modal-blurer");
})
// const x=document.querySelector(".select-section")
// const transfer = (e) => {
//         const target = e.target;
//         console.log(target.closest("div").id);
//         console.log(target.closest("div").className);
//     }

// x.addEventListener('click', (e)=>{
//     transfer(e)
// })