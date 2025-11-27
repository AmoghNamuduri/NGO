document.getElementById('year').textContent = new Date().getFullYear();
// simple stat counters
function animateCount(id, end){let el=document.getElementById(id);let cur=0;let step=Math.ceil(end/60);let t=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(t)}el.textContent=cur},20)}
animateCount('num1', 12450);animateCount('num2', 380);animateCount('num3', 12);
// basic donate form handler
document.getElementById('donateForm').addEventListener('submit', function(e){e.preventDefault();alert('Thank you — integrate a real payment gateway for production.');});
