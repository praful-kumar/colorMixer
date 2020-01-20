let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let btn = document.querySelector('button');
let mixer = document.querySelector('#mixer');
let colors = document.querySelector('#colors');
let detail = document.querySelector('#detail')

red.addEventListener('input', function(){
   console.log(red.length);
})
 var ccolor = '';
btn.addEventListener('click',function(){
   ccolor = `rgb(${red.value},${green.value},${blue.value})`;
   mixer.style.backgroundColor = ccolor;
   mixer.style.marginTop = '178px';
});
mixer.addEventListener('click',function(){
   detail.style.display = 'none';
   colors.style.marginTop = '130px';
   colors.innerHTML += `<div id="detail">
   <div style="background-color:${ccolor}" class="color"></div><h5>${ccolor}</h5></div>`
});