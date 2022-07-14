
//que1:: creat a button ,on click pf which you should be able to hide a paragraph text 
// ,creat a another button onclick of which this paragraph should be visible.

$(document).ready(function(){
    $('#btn1').click(function(){
        $('#para').hide();
    })
})
$(document).ready(function(){
    $('#btn2').click(function(){
        $('#para').show();
    })
})



function ajax(){ 
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todod/12',
    type: 'GET',
    success: function (data) {

     console.log();
    },

    error: function (err) {
      console.log( err);
     
    }
  })
};
$("#btn3").click(function(){
    ajax();
})




















