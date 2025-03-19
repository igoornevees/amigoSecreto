let secretFriendList = []; // <- LISTA ARRAY VAZIA CRIADA PARA OBTER OS VALORES.
let fieldName = document.getElementById('friendList'); // <- CONTEÚDO DOS NOMES QUANDO ADICIONADOS.
let emptyField = document.getElementById('noList'); // <- CONTEÚDO DE INFORMAÇÃO INCIAL PARA ADICONAR NOMES.
let errorField = document.getElementById('noListError'); // <- CONTEÚDO DE ERROR AO INFORMAR O VALOR EM INPUT VAZIO!
let textListEmpty = document.getElementById('textEmpty');
let listEmptyBold = document.getElementById('textEmptyBold');
let btnChoose = document.getElementById('chooseFriend');

// FUNÇÃO OBTENDO OS VALORES DO INPUT E EXECUTANDO COM O BUTTON. ->
function addValue(){
  let iconArrow = document.querySelectorAll('.icon-tip');
  
  let addedNames = document.querySelector('input').value; // <- OBTENDO O VALOR ADICIONADO NO INPUT E ENVIANDO INFORMAÇÕES.

// SOLICITANDO VERIFICAÇÕES NECÉSSARIAS O ENVIO CORRETO DAS INFORMAÇÕES OBTIDAS. ->
  if (addedNames == ''){
    fieldName.style.display = 'none';
    emptyField.style.display = 'none';
    errorField.style.display = 'block';
    
    
  } else {
    fieldName.style.display = 'block';
    emptyField.style.display = 'none';
    errorField.style.display = 'none';
    
    for (let iconArrows of iconArrow) {
      iconArrows.setAttribute('data-icon', 'fluent-emoji:warnning');
    }
    
    secretFriendList.push(addedNames); // <- CRIANDO LISTA "ARRAY" OBTENDO OS VALORES DO INPUT/BUTTON.
    
    let listNames = document.getElementById('friendList');
    listNames.innerHTML = ''; // <- RESET DO VALOR ADICONADO A LISTA PARA EVITAR COPIAS.
    
    // STYLE CSS FEITO AO CRIAR A LISTA E ENVIAR O VALOR PARA TAG UL/LI. ->
    listNames.style.display = 'grid';
    listNames.style.gap = '10px';
    listNames.style.gridColumnGap = '10px';
    listNames.style.gridTemplateColumns = 'repeat(3, minmax(100px, 1fr))';
    listNames.style.padding = '11px';
    listNames.style.color ='#fff';
    listNames.style.justifyContent = 'space-between';
    listNames.style.alignItems = 'center';
    listNames.style.textAlign = 'center';
    // <- STYLE CSS FEITO AO CRIAR A LISTA E ENVIAR O VALOR PARA TAG UL/LI.
    
    secretFriendList.forEach(name => {
       let getName = document.createElement('li');
        getName.textContent = name;
        listNames.appendChild(getName);
}); // <- CRIAÇÃO DA LISTA DE NOMES COM O LOOP DE PROCESSOS ADQUIRIDOS.

    } if (secretFriendList.length == 3){
    textListEmpty.innerHTML = 'Clique no botão';
    textEmptyBold.innerHTML = '"SORTEAR UM AMIGO"';
    textEmptyBold.style.fontWeight = '500';
    textEmptyBold.style.color = '#ff0000';
    
    for (let iconArrows of iconArrow) {
      iconArrows.setAttribute('data-icon', 'fluent-emoji:down-arrow');
      iconArrows.classList.add('icon-animated-moved');
    }
    
}// <- FUNÇÃO OBTENDO OS VALORES DO INPUT E EXECUTANDO COM O BUTTON
  clearField(); // <- LIMPAR CAMPO
}


function clearField(){
  let clearInput = document.querySelector('input');
  clearInput.value = '';
}// <- FUNÇÃO PARA LIMPAR O CAMPO INPUT APÓS O VALOR SER ADICIONADO.