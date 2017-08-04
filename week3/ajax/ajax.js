//ID
var id = "7f4c4a2d";


//KEY
var key = "3f7a2c61f2d881016755246539df40fd";

var api = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=7f4c4a2d&appKey=3f7a2c61f2d881016755246539df40fd";

var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat" +
              "&appId=" + id + "&appKey=" + key;

$.ajax({
    url: foodURL,
    success: function(data){
        console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2> This " + name + " has " + cals + " kcal!!</h2>");
    }
})