var cat = {
    name: "Felix",
    furColor: "black",
    talk: function() {
      console.log(this); //cat object is the context
    }
}

cat.talk()
