(function () {
  var thePics = document.querySelectorAll('.data-ref'),
  theCarTitle = document.querySelector('.modelName'),
  thePrice = document.querySelector('.priceInfo'),
  theDesc = document.querySelector('.modelDetails'),
  appliedClass;

  function ChangeElements(){
    let objectIndex = carData[this.id];
    thePrice.firstChild.nodeValue = objectIndex.price;
    theDesc.firstChild.nodeValue = objectIndex.description;
    theCarTitle.firstChild.nodeValue = objectIndex.car;

    thePics.forEach(function(element, index){
      element.classList.add('nonActive');
    })

    this.classList.remove('nonActive');

    appliedClass = this.id;
  }

  thePics.forEach(function(element, index){
    element.addEventListener('click', ChangeElements, false);
  })

  ChangeElements.call(document.querySelector('#F55'));
})();
