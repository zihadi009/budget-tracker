document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
  const quantity = document.getElementById('kitkat-quantity').value;
  const price = document.getElementById('kitkat-price').innerText;
  const totalKitkatPrice = quantity * price;
  document.getElementById('chocolate').innerText = totalKitkatPrice;
})