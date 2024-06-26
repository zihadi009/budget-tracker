document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
  const quantity = document.getElementById('kitkat-quantity').value;
  const price = document.getElementById('kitkat-price').innerText;
  const totalKitkatPrice = quantity * price;
  document.getElementById('chocolate').innerText = totalKitkatPrice;
  // document.getElementById('kitkat-quantity').value = ""
  total();
})

document.getElementById('rose-buy-btn').addEventListener('click', function () {
  const quantity = document.getElementById('rose-quantity').value;
  const price = document.getElementById('rose-price').innerText;
  const totalRosePrice = quantity * price;
  document.getElementById('rose').innerText = totalRosePrice;
  // document.getElementById('rose-quantity').value = ""
  total()
})

document.getElementById('diary-buy-btn').addEventListener('click', function () {
  const quantity = document.getElementById('diary-quantity').value;
  const price = document.getElementById('diary-price').innerText;
  const totalDiaryPrice = quantity * price;
  document.getElementById('diary').innerText = totalDiaryPrice;
  // document.getElementById('diary-quantity').value = ""
  total()
})

function total() {
  const chocolate = document.getElementById('chocolate').innerText;
  const rose = document.getElementById('rose').innerText;
  const diary = document.getElementById('diary').innerText;
  const total = document.getElementById('total').innerText = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  const budget = document.getElementById('valentine-budget').innerText;
}

document.getElementById('apply-btn').addEventListener('click', function () {
  const promoCode = document.getElementById('promo-code').value;
  const total = document.getElementById('total').innerText;
  const budget = document.getElementById('valentine-budget').innerText;
  if (promoCode == 101) {
    const newTotal = total - (total * 10 / 100)
    if (newTotal > budget) {
      alert("You're exceeding your budget.");
    }
    else {
      document.getElementById('all-total').innerText = newTotal;
    }
  }
})


