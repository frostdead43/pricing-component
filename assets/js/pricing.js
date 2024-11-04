inputCheckbox.addEventListener("click", function() {
  if(inputCheckbox.checked) {
    basicPayment.innerHTML = "<span>$</span>199.99";
    proPayment.innerHTML = "<span>$</span>299.99";
    masterPayment.innerHTML = "<span>$</span>399.99";
  }
  else {
    basicPayment.innerHTML = "<span>$</span>19.99";
    proPayment.innerHTML = "<span>$</span>29.99";
    masterPayment.innerHTML = "<span>$</span>39.99";
  }
});