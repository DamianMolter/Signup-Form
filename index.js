var numberOfClicks = 0;
$(".green-button").click(function () {

      if (numberOfClicks < 1) {
            $(".input-box input").after("<img src = 'images/icon-error.svg'/> <br/> <span class = 'warning'>This field cannot be empty!</span>");

            numberOfClicks++;
      }
})
