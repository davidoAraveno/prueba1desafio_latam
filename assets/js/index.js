////SMOOTH SCROOL//////

$(function(){
    $("a").click(function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var id = this.hash;

            $("html,body").animate({
                scrollTop: $(id).offset().top
            }, 800, function(){
                window.location.hash = id;
            });
        }
    })
})

//////MODAL////////

(function(){

    $(function(){
        $('#exampleModal').modal()
    })
}());


/////tooltip///////
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
