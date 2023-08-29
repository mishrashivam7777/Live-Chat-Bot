const API_KEY =''
 
const outputi=document.querySelector('#output')
const inputele =document.querySelector('input')
const submitbutton =document.querySelector('#submit') 
const historyele=document.querySelector('.history')
const buttonele= document.querySelector('button')
const mssgcontainer= document.querySelector('.message-container')
const loader=document.querySelector('.dots')
const sidebbar = document.querySelector('.side-bar')

// function cllose() {
//     sidebbar.classList.add('classs')
// }

const openSidebar = () => {
    document.getElementById("mySidebar").style.opacity=1;
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementsByClassName("openbtn").style.display=none;
    document.getElementsByClassName("main").style.marginLeft = "250px";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.opacity=0;
    // document.getElementsByClassName("openbtn").style.opacity=0;
    document.getElementsByClassName("main").style.marginLeft = "0";
    
};

function showloader() {
    loader.classList.add('show');
}
function hideloader() {
    loader.classList.remove('show');
    
}

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
        showloader()
        const response =await fetch ('https://api.openai.com/v1/chat/completions',options)
        const  data= await response.json()
        console.log(data)
        hideloader()
        // outputi.innerHTML=data.choices[0].message.content
        if(data){
            const newele=` 
            <div class="user-message-container">
              <img src="360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="">
              <p>${inputele.value}</p>
              </div>
              <div class="gpt-message-container">
              <img src="chatgpt-icon.png">
              <p> ${data.choices[0].message.content} </p>
              </div>
           `
           mssgcontainer.innerHTML=newele  
        }
        
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
  
// submitbutton.addEventListener('click',showloader)
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