const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const card = document.querySelectorAll('.card');

let cardnum = 0;

function hideSelected(){ //Pega o LI que está com a class selected(o atual) e remove
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove('selected')
}

function showCard(cardnum){ //Adiciona a class selected no próximo LI
    card[cardnum].classList.add('selected'); 
}

btnAvancar.addEventListener('click', function avancar(){
   if(cardnum === card.length-1) return;

   hideSelected();
  
   cardnum++;
   showCard(cardnum);
})

btnVoltar.addEventListener('click', function avancar(){
   if(cardnum ===0) return;

   hideSelected();

   cardnum--;
   showCard(cardnum);
   
})