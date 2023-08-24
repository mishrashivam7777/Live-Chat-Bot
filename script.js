const API_KEY =''
 
const outputi=document.querySelector('#output')
const inputele =document.querySelector('input')
const submitbutton =document.querySelector('#submit') 
const historyele=document.querySelector('.history')
const buttonele= document.querySelector('button')

async function getmessage() {
  console.log("click")
    const options ={
     method:'POST',
     headers:{
        'Authorization': `Bearer ${API_KEY} `,
        'Content-Type':'application/json'
     },
     body:JSON.stringify({
        "model":"gpt-3.5-turbo",
        "messages":[{role:"user",content:inputele.value}],
        max_tokens:100
     })

    }
    // console.log('clicked')
    try {
        const response =await fetch ('https://api.openai.com/v1/chat/completions',options)
        const  data= await response.json()
        console.log(data)
        outputi.innerHTML=data.choices[0].message.content
        // inputele=''
        if(data.choices[0].message.content){
            const pele=document.createElement('p')
            pele.textContent=inputele.value
            pele.addEventListener('click',()=>changeInput())
            historyele.append(pele)
            
        }
    } catch (error) {
        console.log(error)
    }
}

submitbutton.addEventListener('click',getmessage)
  
 function relod() {
    console.log("clickedd")
    location.reload();
 }
function clearscreen() {
    inputele.value=''
}

function changeInput(value) {
    const inputelement =document.querySelector('input')
    inputelement.value=value
    
}
// buttonele.addEventListener('click',clearscreen)
console.log(inputele.value)