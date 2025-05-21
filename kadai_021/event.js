const addBtn = document.getElementById('btn');

const parentList = document.getElementById('text');


addBtn.addEventListener('click', () => {

     setTimeout(() => {
      parentList.textContent = 'ボタンをクリックしました';
  }, 2000);
    
   
});