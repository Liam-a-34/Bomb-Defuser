

$("#play-button").on("click", function(){
    location.assign("./bomb.html")
})

$("#manual-button").on("click", function(){
    location.assign("./manual.html")
})

$("#manual-back-button").on("click", function(){
    location.assign("./index.html")
})

$("#button1").on("click", function(){

    $("#button2").css("background-color", "#af9967")
    $("#button3").css("background-color", "#af9967")
    $("#button4").css("background-color", "#af9967")
    $("#button5").css("background-color", "#af9967")

    $("#button2").css("z-index", "4")
    $("#button3").css("z-index", "3")
    $("#button4").css("z-index", "2")
    $("#button5").css("z-index", "1")

    $(this).css("background-color", "#f1d592")
    $(this).css("z-index", "6")
    $("#manual-image").attr("src", "/wires-manual.PNG")
})

$("#button2").on("click", function(){

    $("#button1").css("background-color", "#af9967")
    $("#button3").css("background-color", "#af9967")
    $("#button4").css("background-color", "#af9967")
    $("#button5").css("background-color", "#af9967")

    $("#button1").css("z-index", "5")
    $("#button3").css("z-index", "3")
    $("#button4").css("z-index", "2")
    $("#button5").css("z-index", "1")

    $(this).css("background-color", "#f1d592")
    $(this).css("z-index", "6")
    $("#manual-image").attr("src", "/button-manual.PNG")
})

$("#button3").on("click", function(){

    $("#button2").css("background-color", "#af9967")
    $("#button1").css("background-color", "#af9967")
    $("#button4").css("background-color", "#af9967")
    $("#button5").css("background-color", "#af9967")

    $("#button1").css("z-index", "5")
    $("#button2").css("z-index", "4")
    $("#button4").css("z-index", "2")
    $("#button5").css("z-index", "1")

    $(this).css("background-color", "#f1d592")
    $(this).css("z-index", "6")
    $("#manual-image").attr("src", "/hex-manual.PNG")
})

$("#button4").on("click", function(){

    $("#button2").css("background-color", "#af9967")
    $("#button3").css("background-color", "#af9967")
    $("#button1").css("background-color", "#af9967")
    $("#button5").css("background-color", "#af9967")

    $("#button1").css("z-index", "5")
    $("#button2").css("z-index", "4")
    $("#button3").css("z-index", "3")
    $("#button5").css("z-index", "1")

    $(this).css("background-color", "#f1d592")
    $(this).css("z-index", "6")
    $("#manual-image").attr("src", "/binary-manual.PNG")
})

$("#button5").on("click", function(){

    $("#button2").css("background-color", "#af9967")
    $("#button3").css("background-color", "#af9967")
    $("#button4").css("background-color", "#af9967")
    $("#button1").css("background-color", "#af9967")

    $("#button1").css("z-index", "5")
    $("#button2").css("z-index", "4")
    $("#button3").css("z-index", "3")
    $("#button4").css("z-index", "2")

    $(this).css("background-color", "#f1d592")
    $(this).css("z-index", "6")
    $("#manual-image").attr("src", "/math-manual.PNG")
})