$.ajax({
    url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=Frozen'
}).then(
    (data)=>{
        console.log(data);
    },
    ()=>{
        console.log('bad request');
    }
);
$(()=>{

    $('form').on('submit', (event)=>{
    
            event.preventDefault();
    
            const userInput = $('input[type="text"]').val();
    
            $.ajax({
                url:'https://www.omdbapi.com/?apikey=YOUR-API-KEY-HERE&t=' + userInput
            }).then(
                (data)=>{
                    $('#title').html(data.Title);
                    $('#year').html(data.Year);
                    $('#rated').html(data.Rated);
                },
                ()=>{
                    console.log('bad request');
                }
            );
        })
 
    
})