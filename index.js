var firstNameClicks = lastNameClicks = emailClicks = passwordClicks = 0;

$(this).bind("change paste", function(event){
            $(this).val(event);
});

$(".green-button").click(function () {

            if($("#first-name").val() === "" && firstNameClicks < 1){
                  $("#first-name").after("<img src = 'images/icon-error.svg'/> <br/> <span class = 'warning'>This field cannot be empty!</span>");
                  firstNameClicks++; 
            }

            if($("#last-name").val() === "" && lastNameClicks < 1){
                  $("#last-name").after("<img src = 'images/icon-error.svg'/> <br/> <span class = 'warning'>This field cannot be empty!</span>");
                  lastNameClicks++;
            }

            if($("#email").val() === "" && emailClicks < 1){
                  $("#email").after("<img src = 'images/icon-error.svg'/> <br/> <span class = 'warning'>This field cannot be empty!</span>"); 
                  emailClicks++;
            }

            if($("#password").val() === "" && passwordClicks < 1){
                  $("#password").after("<img src = 'images/icon-error.svg'/> <br/> <span class = 'warning'>This field cannot be empty!</span>");
                  passwordClicks++;
            }
      }
)
