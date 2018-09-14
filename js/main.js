
     function expand_menu()
{  


  var burg = document.getElementsByClassName("burger-menu");

  if(burg[0].classList.contains("js-burger-menu"))
  {
    burg[0].classList.remove("js-burger-menu");
  } else {burg[0].classList.add("js-burger-menu");}
}

