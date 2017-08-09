//back end

function toKilo(pound){

    return pound / .453;
};
 function toLiter(gallon){

    return gallon * 3.78;
 };

function toGram(tableSpoon) {

    return tableSpoon * 14.18;
};
//front end


$(document).ready(function() {
  $("form#poundToKilo").submit(function(event) {
    event.preventDefault();
    var pound = parseFloat($("#poundInput").val());
    var kilo = toKilo(pound);
    $("#resultKilo").append(kilo);
    $(".printResults").show();
  });

  $("form#gallonToLiter").submit(function(event) {
    event.preventDefault();
    var gallon = parseFloat($("#gallonInput").val());
    var liter = toLiter(gallon);
    $("#resultLiter").append(liter);
    $(".printResults").show();
  });

  $("form#tableSpoonToGram").submit(function(event) {
    event.preventDefault();
    var tableSpoon = parseFloat($("#tableSpoonInput").val());
    var gram = toGram(tableSpoon);
    $("#resultGram").append(gram);
    $(".printResults").show();
  });
});
