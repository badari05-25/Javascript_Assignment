

$("#click-me").click(function() {
  let val = 1;
  val = (Math.floor(Math.random() * 10) + 1);

  const time = new Date();
  const current = time.getHours();
  console.log(current);

  if (current == 0 && current <= 11) {
    $("#date").html("Lets start our new morning with a new quote");
    switch (val) {
      case 1:
        console.log("you are 1");
        $("#cardbody").html("the first step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#5670f8");
        $(".text-color").css("color", "#5670f8");
        $(".bgcolor").css("background-color", "#5670f8");
        break
      case 2:
        $("#cardbody").html("the second step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#6f42c1");
        $(".text-color").css("color", "#6f42c1");
        $(".bgcolor").css("background-color", "#6f42c1");
        break
      case 3:
        $("#cardbody").html("the third step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#198754");
        $(".text-color").css("color", "#198754");
        $(".bgcolor").css("background-color", "#198754");
        break
      case 4:
        $("#cardbody").html("the fourth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#ffc107");
        $(".text-color").css("color", "#ffc107");
        $(".bgcolor").css("background-color", "#ffc107");
        break
      case 5:
        $("#cardbody").html("the fifth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#0dcaf0");
        $(".text-color").css("color", "#0dcaf0");
        $(".bgcolor").css("background-color", "#0dcaf0");
        break
      case 6:
        $("#cardbody").html("the sixth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#AD4E82");
        $(".text-color").css("color", "#AD4E82");
        $(".bgcolor").css("background-color", "#AD4E82");
        break
      case 7:
        $("#cardbody").html("the seventh step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#02492F");
        $(".text-color").css("color", "#02492F");
        $(".bgcolor").css("background-color", "#02492F");
        break
      case 8:
        $("#cardbody").html("the eighth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#4D10EB");
        $(".text-color").css("color", "#4D10EB");
        $(".bgcolor").css("background-color", "#4D10EB");
        break
      case 9:
        $("#cardbody").html("the ninth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#688497");
        $(".text-color").css("color", "#688497");
        $(".bgcolor").css("background-color", "#688497");
        break
      case 10:
        $("#cardbody").html("the tenth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#582662");
        $(".text-color").css("color", "#582662");
        $(".bgcolor").css("background-color", "#582662");
        break
      default:
        $("#cardbody").html("the default step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "red");
        $(".text-color").css("color", "red");
        $(".bgcolor").css("background-color", "#red");
        break
    }
  } else if (current >= 12 && current <= 18) {
    $("#date").html("Lets start our new Evening with a new quote");
    switch (val) {
      case 1:
        console.log("you are 1");
        $("#cardbody").html("the first step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#5670f8");
        $(".text-color").css("color", "#5670f8");
        $(".bgcolor").css("background-color", "#5670f8");
        break
      case 2:
        $("#cardbody").html("the second step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#6f42c1");
        $(".text-color").css("color", "#6f42c1");
        $(".bgcolor").css("background-color", "#6f42c1");
        break
      case 3:
        $("#cardbody").html("the third step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#198754");
        $(".text-color").css("color", "#198754");
        $(".bgcolor").css("background-color", "#198754");
        break
      case 4:
        $("#cardbody").html("the fourth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#ffc107");
        $(".text-color").css("color", "#ffc107");
        $(".bgcolor").css("background-color", "#ffc107");
        break
      case 5:
        $("#cardbody").html("the fifth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#0dcaf0");
        $(".text-color").css("color", "#0dcaf0");
        $(".bgcolor").css("background-color", "#0dcaf0");
        break
      case 6:
        $("#cardbody").html("the sixth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#AD4E82");
        $(".text-color").css("color", "#AD4E82");
        $(".bgcolor").css("background-color", "#AD4E82");
        break
      case 7:
        $("#cardbody").html("the seventh step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#02492F");
        $(".text-color").css("color", "#02492F");
        $(".bgcolor").css("background-color", "#02492F");
        break
      case 8:
        $("#cardbody").html("the eighth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#4D10EB");
        $(".text-color").css("color", "#4D10EB");
        $(".bgcolor").css("background-color", "#4D10EB");
        break
      case 9:
        $("#cardbody").html("the ninth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#688497");
        $(".text-color").css("color", "#688497");
        $(".bgcolor").css("background-color", "#688497");
        break
      case 10:
        $("#cardbody").html("the tenth step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "#582662");
        $(".text-color").css("color", "#582662");
        $(".bgcolor").css("background-color", "#582662");
        break
      default:
        $("#cardbody").html("the default step to getting the things you want out of llife is this: decide what you want");
        $("body").css("background-color", "red");
        $(".text-color").css("color", "red");
        $(".bgcolor").css("background-color", "#red");
        break
    }
  } else {
    $("#date").html("Lets start our new mid night with a new quote");
    switch (val) {
      case 1:
        console.log("you are 1");
        $("#cardbody").html("the first step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#5670f8");
        $(".text-color").css("color", "#5670f8");
        // $(".bgcolor").css("background-color","#5670f8");
        break
      case 2:
        $("#cardbody").html("the second step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#6f42c1");
        $(".text-color").css("color", "#6f42c1");
        // $(".bgcolor").css("background-color","#6f42c1");
        break
      case 3:
        $("#cardbody").html("the third step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#198754");
        $(".text-color").css("color", "#198754");
        // $(".bgcolor").css("background-color","#198754");
        break
      case 4:
        $("#cardbody").html("the fourth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#ffc107");
        $(".text-color").css("color", "#ffc107");
        // $(".bgcolor").css("background-color","#ffc107");
        break
      case 5:
        $("#cardbody").html("the fifth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#0dcaf0");
        $(".text-color").css("color", "#0dcaf0");
        // $(".bgcolor").css("background-color","#0dcaf0");
        break
      case 6:
        $("#cardbody").html("the sixth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#AD4E82");
        $(".text-color").css("color", "#AD4E82");
        // $(".bgcolor").css("background-color","#AD4E82");
        break
      case 7:
        $("#cardbody").html("the seventh step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#02492F");
        $(".text-color").css("color", "#02492F");
        // $(".bgcolor").css("background-color","#02492F");
        break
      case 8:
        $("#cardbody").html("the eighth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#4D10EB");
        $(".text-color").css("color", "#4D10EB");
        // $(".bgcolor").css("background-color","#4D10EB");
        break
      case 9:
        $("#cardbody").html("the ninth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#688497");
        $(".text-color").css("color", "#688497");
        // $(".bgcolor").css("background-color","#688497");
        break
      case 10:
        $("#cardbody").html("the tenth step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "#582662");
        $(".text-color").css("color", "#582662");
        // $(".bgcolor").css("background-color","#582662");
        break
      default:
        $("#cardbody").html("the default step to getting the things you want out of llife is this: decide what you want");
        $("body, .bgcolor").css("background-color", "red");
        $(".text-color").css("color", "red");
        // $(".bgcolor").css("background-color","#red");
        break
    }
  }

})

