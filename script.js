const key =""
 
const output=document.querySelector('#output')
const inputele =document.querySelector('input')
const submitbutton =document.querySelector('#submit') 
const historyele=document.querySelector('.history')
const buttonele= document.querySelector('button')
function changeInput(value) {
    const inputelement =document.querySelector('input')
    inputelement.value=value
}
async function getmessage() {
    // console.log('clicked')
    const options ={
     method:'POST',
     headers:{
        'Authorization': `Bearer ${key} `,
        'Content-Type':'application/json'
     },
     body:JSON.stringify({
        "model":"gpt-3.5-turbo",
        "messages":[{role:"user",content:inputele.value}],
        max_tokens:100
     })

    }
    try {
        const response =await fetch ('https://api.openai.com/v1/chat/completions',options)
        const  data= await response.json()
        console.log(data)
        output.textcontent=data.choices[0].message.content
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

submitbutton.addEventListener('click',getmessage())
function clearscreen() {
    inputele.value=''
}

buttonele.addEventListener('click',clearscreen())
