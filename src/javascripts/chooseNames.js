function chooseValue(){
  let verifyList = document.getElementById('noList');
  let styleDisplay = window.getComputedStyle(verifyList);
  
  let errorField = document.getElementById('noListError');
  let styleDisplayError = window.getComputedStyle(errorField);
  
  let listNames = document.getElementById('friendList');
  
  let textListEmptyAll = document.getElementById('textEmptyAll');
  let textListEmpty = document.getElementById('textEmpty');
  let listEmptyBold = document.getElementById('textEmptyBold');
  
  let iconArrow = document.querySelectorAll('.icon-tip');
  
  let containerTextWinner = document.getElementById('containerTextWinner');
  let containerWinner = document.getElementById('containerWinner');
  
  if(styleDisplay.display === 'block') {
    verifyList.style.display = 'none';
    errorField.style.display = 'block';
    
    textListEmpty.innerHTML = 'Por favor, adicione os nomes à';
    textEmptyBold.innerHTML = '"LISTA"';
    textEmptyBold.style.fontWeight = '500';
    textEmptyBold.style.color = '#ff0000';
    
    for (let iconArrows of iconArrow) {
      iconArrows.setAttribute('data-icon', 'fluent-emoji:up-arrow');
      iconArrows.classList.add('icon-animated-moved');
    }
    
  } else if (styleDisplayError.display === 'block') {
    textListEmpty.innerHTML = 'Por favor, adicione os nomes à';
    textEmptyBold.innerHTML = '"LISTA"';
    textEmptyBold.style.fontWeight = '500';
    textEmptyBold.style.color = '#ff0000';
    
    for (let iconArrows of iconArrow) {
      iconArrows.setAttribute('data-icon', 'fluent-emoji:up-arrow');
      iconArrows.classList.add('icon-animated-moved'); 
    }
    
  } else if(secretFriendList.length <= 2){
    textListEmpty.innerHTML = 'Adicione no minímo <span style = "font-weight: 500;">3 NOMES</span> à';
    textEmptyBold.innerHTML = '"LISTA"';
    textEmptyBold.style.fontWeight = '500';
    textEmptyBold.style.color = '#ff0000';
    
    for (let iconArrows of iconArrow) {
       iconArrows.setAttribute('data-icon', 'fluent-emoji:up-arrow');
       iconArrows.classList.add('icon-animated-moved');
     }
    
  } else if(secretFriendList.length >= 3){
    let generateChoose = Math.floor(Math.random() * secretFriendList.length);
    
    let getNameChoose = secretFriendList[generateChoose];
    
    let getNameWinner = document.getElementById('nameWinner');
      getNameWinner.innerHTML = getNameChoose;
      getNameWinner.style.display = 'block';
    
    textEmptyAll.style.display = 'none';
    
    containerTextWinner.style.display = 'block';
    containerWinner.style.display = 'flex';
    getNameWinner.style.fontSize = '1.5rem';
   
    textUpperCase = getNameWinner.style.textTransform = 'uppercase';
    
    let btnChoose = document.getElementById('chooseFriend');
    btnChoose.disabled = true;
    btnChoose.style.backgroundColor = '#fff';
    btnChoose.style.color = '#000';
    btnChoose.style.border = 'solid', '1px', '#000';
    
    let btnReset = document.getElementById('resetChoose');
    btnReset.disabled = false;
    btnReset.style.backgroundColor = '#000';
    btnReset.style.color = '#fff';
    
} 

  }