
$( () => {

        $('#icon').on('click', () => {
            $('#modal').css('display', 'block')
        })

            // = () => {
            //     $('#modal').css('display', 'none')
            // }

        $('#close').on('click', () => {
            $('#modal').css('display', 'none')
        })

        $('#skills').click(() => {
            $('#ul').css('display', 'block')
        })



        // -------------- RESUME PAGE ---------------- //
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




    }) 