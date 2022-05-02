$(() => {
  $("#icon").on("click", () => {
    $("#modal").slideDown("slow", () => {
      $("#modal").css("display", "block");
    });
  });

  $("#close").on("click", () => {
    $("#modal").css("display", "none");
  });

  // --------- Resume Page ------------ // 

  $("#tech-skills").click(() => {
    $("#tech").fadeIn(1000)
  });
  $("#other-skills").click(() => {
    $("#other").fadeIn(1000)
  });

  $(window).scrollTop($("#nav").addClass("sticky"));
  $(window).scroll(() => {
    $("#nav-word").html($(this).scrollTop() > 250 ? "Sage Kolpin" : "welcome");
  });



  // -------------- Portfolio PAGE ---------------- //
  console.log($);
  //--- carosel ---- //
  let currentImgIndex = 0;
  let numOfImages = $(".carousel-images").children().length - 1;
  $(".next").on("click", () => {
    $(".carousel-images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex < numOfImages) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });

  $(".previous").on("click", () => {
    $(".carousel-images").children().eq(currentImgIndex).css("display", "none");
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex == numOfImages;
    }

    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });

  $(".carousel-images").on("click", () => {
    if(currentImgIndex == 0){
        $('#project2').hide()
        $('#project3').hide()
    $("#project1").fadeIn("slow"); 
    }
    if(currentImgIndex == 1){
        $('#project1').hide()
        $('#project3').hide()
        $('#project2').fadeIn("slow");
    }
    if(currentImgIndex == 2){
        $('#project1').hide()
        $('#project2').hide()
        $('#project3').fadeIn("slow");
    }
  });






});
