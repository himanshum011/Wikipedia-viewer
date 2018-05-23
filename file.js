var userInput;
$(document).ready(function(){

      $("form").on("submit",function(e){
		e.preventDefault();
		userInput=$(".hula").val();
		

	
    $.ajax({
		method:'GET',
		dataType: 'jsonp',
		url:'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+userInput+'&namespace=0&limit=10'
    })
	.done(function(result)
	{

		console.log(result[1]);
		$("#cont").html("");


		for(let i=0;i<result[1].length;i++)
		{
			
				
			    

				$("#cont").append(`<div class="container data">
										<a target="_blank" href="${result[3][i]}">
											<p class="title">${result[1][i]}</p>
										</a>
										<p class="content">
											${result[2][i]}
										</p>
									</div>`	
								);

				$(".data").addClass("animated zoomInUp");
		
		}
        
});


	});

	});