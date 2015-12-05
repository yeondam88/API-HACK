$(document).ready(function(){
    function getResults(query){
      var params = {
          k: '182247-Thinkful-6C8VQS9K',
          type: 'movies',
          info: 1,
          q: query
      };
      var result = $.ajax({
          /* update API end point */
          url: "https://www.tastekid.com/api/similar",
          data: params,
          dataType: "jsonp",
          /*set the call type GET / POST*/
          type: "GET",
      })
      /* if the call is successful (status 200 OK) show results */
      .done(function (result) {
          /* if the results are meeningful, we can just console.log them */
          console.log(result.Similar.Results);
          $.each(result.Similar.Results, function (index, item) {
  					  console.log(item.wTeaser);
              // var searchString = item.Name;
              // console.log(item.Name);
              // console.log(item.Type);
              showResultItems( item.Name, item.wUrl);
              // $('.results').append(inspiration);
          });
      })
      /* if the call is NOT successful show errors */
      .fail(function (jqXHR, error, errorThrown) {
          console.log(jqXHR);
          console.log(error);
          console.log(errorThrown);
      });
    }
    function addItem() {
        var query = $('#search').val();
        getResults(query);
      }
    $('#submit-btn').on('click', addItem);
    
    function showResultItems( Name, wTeaser, yUrl ){
      var displayResult = "<li>" + Name + "</li>" + "<br>" + "<p>" + wTeaser + "</p>" + "<br>" + "<p>" + yUrl + "</p>";
      console.log(displayResult);
      $('#results ul').append(displayResult);
    }
}); 
