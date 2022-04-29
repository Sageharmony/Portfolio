
$( () => {

        $('#icon').on('click', () => {
            $('#modal').slideDown('slow', () => {
                $('#modal').css('display', 'block')
            })
        })

        $('#close').on('click', () => {
            $('#modal').css('display', 'none')
        })

        $('#skills').click(() => {
            $('#ul').css('display', 'block')
        })
        
        const newName = () =>{
            $('#nav-word').fadeOut(
                () => {
                    $('#nav-word').text("SAGE KOLPIN").fadeIn()
                }
            )
        }

        $(window).scrollTop($('#nav').addClass("sticky")
        ) 
        $(window).scroll(()=> {
            $('#nav-word').html($(this).scrollTop() > 250 ? 'Sage Kolpin':'Hello.');
          })

          // I learned the above trick from stack overflow and how to change words


    



        // -------------- Portfolio PAGE ---------------- //
        console.log($)
        //--- carosel ---- // 
        let currentImgIndex = 0
        let numOfImages = $('.carousel-images').children().length - 1
        $('.next').on('click', () => {
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
            if(currentImgIndex < numOfImages) {
                currentImgIndex ++
               } else {
                currentImgIndex = 0
               }
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
        })

        $('.previous').on('click', () =>{
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
            if(currentImgIndex > 0){
                currentImgIndex -- 
            } else {
                currentImgIndex == numOfImages
            }

            $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
        
        })


        $('.carousel-images').on('click', () => {
         $('#about').fadeIn('slow')
         $('#about').delay(3000).fadeOut('slow')
        })







    }) 