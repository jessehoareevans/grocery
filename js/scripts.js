$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var items = ["gro1", "gro2", "gro3", "gro4", "gro5", "gro6"];
    var inputItems = items.map(function(item) {
        return ($("input#" + item).val().toUpperCase());
        });
    inputItems.sort();
    inputItems.forEach(function(item){
      $(".listItems").append($("<ol>").text(item));
    });
  $(".input").hide();
  $(".list").show();
  $(".refresh").click(function(){
   location.reload();
  });
  });
});
