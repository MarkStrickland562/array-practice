$(document).ready(function() {

 var things = [];

  $("form#response1").submit(function(event) {
    event.preventDefault();

    var thing1 = $("input#Thing1").val();
    $('ul#list').prepend('<li>' + thing1 + '</li>');

    things.push(thing1);
	});


  $("form#response2").submit(function(event) {
    event.preventDefault();

    var thing2 = $("input#Thing2").val();
    $('ul#list').prepend('<li>' + thing2 + '</li>');

    things.push(thing2);

  });


  $("form#response3").submit(function(event) {
    event.preventDefault();

    var thing3 = $("input#Thing3").val();
    $('ul#list').prepend('<li>' + thing3 + '</li>');

    things.push(thing3);
    console.log(thing3);

    $('ul#list').prepend('<li>' + things+ '</li>');

  });




});
