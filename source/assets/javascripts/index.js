import bootstrap from 'bootstrap';

// var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
// triggerTabList.forEach(function (triggerEl) {
//   var tabTrigger = new bootstrap.Tab(triggerEl)
//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// });

var triggerTabList = document.querySelectorAll('#myTab a')
console.log(triggerTabList);
triggerTabList.forEach((item) => {
  item.addEventListener("click", (event)=> {
    console.log(event.currentTarget);
    event.currentTarget.classList.add("active");
  });
});

// var triggerEl = document.querySelector('#myTab a[href="#profile"]')
// bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

//   var tabTrigger = new bootstrap.Tab(triggerEl)
//   triggerEl.addEventListener('click', function (event) {
//     event.preventDefault()
//     tabTrigger.show()
//   })
// })
