$(document).ready(function() {

  let $xhr=  $.ajax({
    url: "http://api.wunderground.com/api/41c93dff69d2241b/geolookup/conditions/q/CO/Boulder.json",
    method: "GET",
  });

  $xhr.done(function(data) {
    //Step 1: Log Data and see what you are getting back as a response
    console.log(data);
    //Step 2: Access your Data
    let $image = data.current_observation.image.url
    //Step 3: Manipulate the DOM with your data
    let $cardImage= $('.card-img-top');
    // console.log($cardImage);
    for(let i = 0; i < $cardImage.length; i++){
      $cardImage[i].src = $image;
    }
    // console.log($image);


    //Example 1: grab the feelslike temp
    let feels = data.current_observation.feelslike_f;
    console.log(feels)
    let feelsText= $('#feelsLike').html(feels + "degrees F");;
    console.log(feelsText)
    // let feelsText1=

    //Example 2: grab the actual temp
    //Example 3: grab the elevation and full location
  })
});
