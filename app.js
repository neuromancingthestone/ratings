
$('#add-rating').on('click', function(e){
//    console.log("HELLO");
    let title = $('#title').val();
    let rating = $('#rating').val();
    if(title.length < 2) {
        alert("Title must be at least 2 characters!");
        return false;
    }
    if(rating < 0 || rating > 10) {
        alert("Rating must be between 0 and 10!");
        return false;
    }
//    console.log(`Title: ${title} Rating: ${rating}`);
    $('tbody').append(`<tr><td>${title}</td><td>${rating}</td><td><button id="delete">Delete Me</button></td></tr>`);
});

$('tbody').on('click', '#delete', function(){
//    console.log("HELLO");
    $(this).parent().parent().remove();
});
