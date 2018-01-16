//open index.html to view this demo

$(document).ready(function() {
  const counter = {
    clicks: 0,
    increment: function(){
      this.clicks++;
      console.log(this.clicks);
    }
  }
  const button = $('button');

  //this line will not work without the bind. Delete it and see what happens.
  button.click(counter.increment.bind(counter));


});
