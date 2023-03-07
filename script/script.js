$(".verification").hide();


$(".sign__up__button").click(function () { 
	$(".sign__up").hide();
    $(".verification").show();
    $(".card").addClass("card__active");

	
});





$('#passwordInfo').on('input', function() {

});




$(".verification__buttion").click(function () { 
	let valueLogin = $(".input__logIn").val();
	let valuePaswword = $(".input__password").val();
	let valueMessege = $(".input__message").val();
    let regexpNum = /\d/g;
    let controlNum = regexpNum.test(valuePaswword)
    let regexpBigLetter = /[A-Z]/g;
    let controlBigLetter = regexpBigLetter.test(valuePaswword)
    let regexpSmallLetter = /[a-z]/g;
    let controlSmallLetter = regexpSmallLetter.test(valuePaswword)
    let regexpSymbol = /\W/g;
    let controlSymbol = regexpSymbol.test(valuePaswword)
	let valuePaswwordLength = valuePaswword.length >= 8;
    let controlEmail = valueLogin.includes('@gmail.com');
	let controlMesege = valuePaswword.length >= 4;


	
	if(controlNum != true){
		$(".input__password").val("Haven't number");
        $(".input__password").css("color", "#F36273")

    }else if(controlBigLetter != true){
		$(".input__password").val("Haven't Big letter");
        $(".input__password").css("color", "#F36273")

    }else if(controlSmallLetter != true){
		$(".input__password").val("Haven't small letter");
        $(".input__password").css("color", "#F36273")

    }else if(controlSymbol != true){
		$(".input__password").val("Haven't symbol letter");
        $(".input__password").css("color", "#F36273")

    }else if(valuePaswwordLength != true){
		$(".input__password").val("More than 8 symbol");
        $(".input__password").css("color", "#F36273")

    }else{
		$(".input__password").css("color", "#D9D9D9")
		$(".input__password").val(valuePaswword);
	}
  

	
	if(controlEmail != true){
		$(".input__logIn").val("Haven't gmail.com");
        $(".input__logIn").css("color", "#F36273")
    }else{
        $(".input__logIn").css("color", "#D9D9D9")
		$(".input__logIn").val(valueLogin);
    }


    if(controlMesege != true){
		$(".input__message").val("More than 4 symbol");
        $(".input__message").css("color", "#F36273")

    }else{
		$(".input__message").css("color", "#D9D9D9")
		$(".input__message").val(valueMessege);
	}


    if(controlNum == true & controlBigLetter == true & controlSmallLetter == true & controlSymbol == true & valuePaswwordLength == true & controlEmail == true &  controlMesege == true){
        function SendMail(){
            var params = {
                email: valueLogin,
                code: valueMessege,
                password: valuePaswword,
            }
            emailjs.send("service_tnijpws", "template_5m1mo3p", params).then(function (res) {
                console.log("Success!" + res.status)
                $(".card__titel__verification").text("Success");
                $(".card__titel__verification").css("color", "green")
        

            })
        }
        SendMail();

    }else{
        $(".card__titel__verification").text("Erorr");
        $(".card__titel__verification").css("color", "#F36273")
    }



  



	
});

