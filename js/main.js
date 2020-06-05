// main.js //

$(document).ready(()=>{
    $("submit").click(()=>{
        let userInput = $("#search").val()
        // alert(userInput)
        $.ajax({
            url:""
        })
        .done((res)=>{
            console.log("res", res.Search)
        })
    })
})



