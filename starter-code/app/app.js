
$.ajax("https://den-super-crud.herokuapp.com/books").done(function(data) {
    console.log(data);
    var myBooks = data.books;
    console.log(myBooks[0].title)
    for(let i = 0; i < myBooks.length; i++){
        $(books).append('<li>' + myBooks[i].title + '</li>')
        $(books).append('<li>' + myBooks[i].author + '</li>')
        $(books).append('<li>' + myBooks[i].releaseDate + '</li>')
        $(books).append('<li>' + '<img src=' + myBooks[i].image + '>' + '</li>')
        
    }

$('#new-book').on('submit', function(event){
    // event.preventDefault();
    var title = $('input#book-title').val();
    console.log(title)
    var author = $('input#book-author').val();
    console.log(author)
    var image = $('input#book-image').val();
    console.log(image)
    var release = $('input#book-release-date').val();
    console.log(release)

    $.ajax({ 
        url: "https://den-super-crud.herokuapp.com/books",
        type: 'post',
        dataType: 'JSON',
        data: {'title': title, 'image': image, 'release': release, 'author': author},
        })
    });
})   




