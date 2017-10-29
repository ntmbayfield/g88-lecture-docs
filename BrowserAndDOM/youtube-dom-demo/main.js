var liList = document.body.getElementsByTagName("li");

for (var i = 0; i < liList.length; i++) {
  if (i < 2) {
    liList[i].style.color = "red";
  }
}
