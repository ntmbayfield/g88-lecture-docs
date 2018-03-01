//Add JS validation
//1. add a submit event on the form
//2. add a verification on email
//3. Require the first and last name
//4. append error messages to the DOM if input is not valid
//STRETCH: Use a blur event on field of your choice and add error handling
(function(){
  let submit = $('#contactForm');

  $('#contactForm').on('submit', event=>{
    event.preventDefault();
    let first = $('#firstName').val()
    let last = $('#lastName').val()
    let email = $('#email').val()

    $.post('http://localhost:3000', {
      data: JSON.stringify({first:first, last:last, email:email})
    })


  })
})()
