document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('kitkat-quantity').value;
  const price = document.getElementById('kitkat-price').innerText;
  const totalKitkatPrice = quantity * price;
  document.getElementById('chocolate').innerText = totalKitkatPrice;
})

document.getElementById('rose-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('rose-quantity').value;
  const price = document.getElementById('rose-price').innerText;
  const totalRosePrice = quantity * price;
  document.getElementById('rose').innerText = totalRosePrice;
})


