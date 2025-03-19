let getNameChoose = secretFriendList[generateChoose];

function newChoose(){
  let listNames = document.getElementById('friendList');
  let verifyList = document.getElementById('noList');
  let iconArrow = document.querySelectorAll('.icon-tip');
  let btnChoose = document.getElementById('chooseFriend');
  let btnReset = document.getElementById('resetChoose');
  
    secretFriendList = [];
  
    listNames.innerHTML = '';
    listNames.style.display = 'none';
    
    verifyList.style.display = 'block';

    containerTextWinner.style.display = 'none';
    containerWinner.style.display = 'none';
    
    textEmptyAll.style.display = 'block';
    textListEmpty.innerHTML = 'Por favor, adicione os nomes à';
    textEmptyBold.innerHTML = '"LISTA"';
    textEmptyBold.style.fontWeight = '500';
    textEmptyBold.style.color = '#000';
    
    
    for (let iconArrows of iconArrow) {
      iconArrows.setAttribute('data-icon', 'fluent-emoji:up-arrow');
      iconArrows.classList.remove('icon-animated-moved');
    }
    
    btnChoose.disabled = false;
    btnChoose.style.backgroundColor = '#000';
    btnChoose.style.color = '#fff';
    
    btnReset.disabled = true;
    btnReset.style.backgroundColor = '#fff';
    btnReset.style.color = '#000';
  }
