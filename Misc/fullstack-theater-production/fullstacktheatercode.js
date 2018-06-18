$(document).ready(function() {
  $('form').submit(function(e){
    e.preventDefault()
    $.post(`http://localhost:3000`, $(this).serialize())
      .then((result) => {
        $('#result').html(result)
      })
  })
})
