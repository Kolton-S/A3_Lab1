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

    appliedClass = this.id;
  }

  thePics.forEach(function(element, index){
    //Loop through the images and add event handling to each one
    element.addEventListener('click', ChangeElements, false);
  })

  ChangeElements.call(document.querySelector('#F55'));
})();
