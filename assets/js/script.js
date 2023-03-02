let buttonTexts = ["Detonate, Abort"]
let buttonColors = ["white", "blue", "red"]
let multiplier = 0;
let clickCount = 0;
let strikes = 0;
let wire1 = $("#wire1")
let wire2 = $("#wire2")
let wire3 = $("#wire3")
let wire4 = $("#wire4")
var hexAnswer;
let binaryCounter = 0;
$("#button-click").prop("volume", 0.25)

function randomize(){

let wireColors = ["wire-red", "wire-yellow", "wire-blue", "wire-white", "wire-green"]
let chosenLength;

    let randomLength  = Math.floor(Math.random() * 2)

    if(randomLength == 0){
        chosenLength = 3;
    } else {
        chosenLength = 4;
    }

    if(chosenLength == 3){
        $("#wire4").css("display", "none")
    }

    for(let i = 0; i < chosenLength +1; i++){

        let randomIndex = Math.floor(Math.random() * wireColors.length)
        let wireColor = wireColors[randomIndex]

        $(`#wire${i}`).addClass(wireColor)

        wireColors.splice(randomIndex, 1)
    }


    let buttonColors = ["blue", "red", "white"]
    let randomButtonColor = Math.floor(Math.random() * buttonColors.length)
    let buttonTexts = ["Detonate", "Abort"]
    let randomButtonText = Math.floor(Math.random() * 2)

    $("#big-button").addClass(buttonColors[randomButtonColor])
    $("#big-button").html(buttonTexts[randomButtonText])

    let hexDigit1;
    let hexDigit2;
    let hexDigit3;
    let hexDigit4;

    let hexArr1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let hexArr2 = ["61", "62", "63", "64", "65", "66", "67", "68", "69", "6A", "6B", "6C", "6D", "6E", "6F", "70", "71", "72", "73", "74", "75", "76","77", "78", "79", "7A"]


    for(let i = 1; i < 5; i++){
        let randomHex = Math.floor(Math.random() * hexArr1.length)

        if(i == 1){
            hexDigit1 = randomHex
        }
        if(i == 2){
            hexDigit2 = randomHex
        }
        if(i == 3){
            hexDigit3 = randomHex
        }
        if(i == 4){
            hexDigit4 = randomHex
        }
    }

    $("#hex-text-box").html(`${hexArr2[hexDigit1]} ${hexArr2[hexDigit2]} ${hexArr2[hexDigit3]} ${hexArr2[hexDigit4]}`)

    hexAnswer = `${hexArr1[hexDigit1]}${hexArr1[hexDigit2]}${hexArr1[hexDigit3]}${hexArr1[hexDigit4]}`
    console.log(hexAnswer)

    for(let i = 1; i < 8; i++){
        let randomBinary = Math.floor(Math.random() * 2)

        if(randomBinary == 0){
            $(`#binary-bar${i}`).addClass("bar-black")
        }
        if(randomBinary == 1){
            $(`#binary-bar${i}`).addClass("bar-white")
        }
    }

}

function buttonPuzzle(color, text, count){

    if(color == "blue" && text == "Detonate" && count == 1){
        $(".correct-button").css("background-color", "rgb(4, 250, 4)")
        console.log("Correct")
        return;
    }
    if(color == "red" && count == 2){
        $(".correct-button").css("background-color", "rgb(4, 250, 4)")
        console.log("Correct")
        return;
    }
    if(text == "Abort" && count == 3){
        $(".correct-button").css("background-color", "rgb(4, 250, 4)")
        console.log("Correct")
        return;
    }
    if(color == "white" && count == 4){
        $(".correct-button").css("background-color", "rgb(4, 250, 4)")
        console.log("Correct")
        return;
    } 

    $(".correct-button").css("background-color", "red")
    $("#wrong-buzzer")[0].play()
    return multiplier = 0;

}

function wirePuzzle(chosenWire){

    let color1 = wire1.attr("class").split(" ")[1]
    let color2 = wire2.attr("class").split(" ")[1]
    let color3 = wire3.attr("class").split(" ")[1]
    let color4 = wire4.attr("class").split(" ")[1]

    if($(".wire-set").children().length == 3){
        if((color1 != "wire-red" && color2 != "wire-red" && color3 != "wire-red") && chosenWire == "wire1"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        if((color1 == "wire-white" || color2 == "wire-white" || color3 == "wire-white") && chosenWire == "wire2"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        if((color1 == "wire-blue" || color2 == "wire-blue" || color3 == "wire-blue")){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        $(".correct-bar").css("background-color", "red")
        $("#wrong-buzzer")[0].play()
    }
    if($(".wire-set").children().length == 4){
        if((color1 != "wire-green" && color2 != "wire-green" && color3 != "wire-green" && color4 != "wire-green") && chosenWire == "wire1"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        if((color1 != "wire-blue" && color2 != "wire-blue" && color3 != "wire-blue" && color4 != "wire-blue") && chosenWire == "wire2"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        if((color1 != "wire-white" && color2 != "wire-white" && color3 != "wire-white" && color4 != "wire-white") && chosenWire == "wire3"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        if(chosenWire == "wire4"){
            $(".correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
        }
        $(".correct-bar").css("background-color", "red")
        $("#wrong-buzzer")[0].play()
    }


}

function hexPuzzle(answer){
    if(answer == hexAnswer){
        $(".hex-correct-bar").css("background-color", "rgb(4, 250, 4)")
            return;
    } else {
        $(".hex-correct-bar").css("background-color", "red")
        $("#wrong-buzzer")[0].play()
    }
}

function binaryPuzzle(){

    let binary1 = $("#binary-bar1").attr("class").split(" ")[1]
    let binary2 = $("#binary-bar2").attr("class").split(" ")[1]
    let binary3 = $("#binary-bar3").attr("class").split(" ")[1]
    let binary4 = $("#binary-bar4").attr("class").split(" ")[1]
    let binary5 = $("#binary-bar5").attr("class").split(" ")[1]
    let binary6 = $("#binary-bar6").attr("class").split(" ")[1]
    let binary7 = $("#binary-bar7").attr("class").split(" ")[1]
    let blackCount = 0;
    let whiteCount = 0;

    for(let i = 1; i < 8; i++){

        if($(`#binary-bar${i}`).hasClass("bar-black")){
            blackCount++
            console.log(`Black: ${blackCount}`)
        } else if($(`#binary-bar${i}`).hasClass("bar-white")){
            whiteCount++
            console.log(`White: ${whiteCount}`)
        }

    }

    if((binary1 == "bar-black" && binary2 == "bar-black" && binary3 == "bar-black" && binary4 == "bar-black" && binary5 == "bar-black" && binary6 == "bar-black" && binary7 == "bar-black") && binaryCounter == 1){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")
        return;
    }
    if((binary2 == "bar-white" && binary7 == "bar-black") && binaryCounter == 2){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")
        return;
    }
    if((binary1 == "bar-white" && binary2 == "bar-white") && binaryCounter == 3){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")
        return;  
    }
    if((binary1 == "bar-black" && binary7 == "bar-black") && binaryCounter == 4){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")  
        return;
    }
    if((binary1 == "bar-white" && binary2 == "bar-white" && binary3 == "bar-white") && binaryCounter == 5){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")  
        return;
    }
    if((binary1 == "bar-white" && binary2 == "bar-white" && binary3 == "bar-white" && binary4 == "bar-white") && binaryCounter == 6){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)") 
        return; 
    }
    if(blackCount > 3 && binaryCounter == 7){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")
        return; 
    }
    if(whiteCount > 5 && binaryCounter == 8){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)") 
        return;
    }
    if(whiteCount == 7 && binaryCounter == 9){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)")
        return;  
    }
    if(binaryCounter == 10){
        $("#binary-correct-bar").css("background-color", "rgb(4, 250, 4)") 
        return;  
    }
    $("#binary-correct-bar").css("background-color", "red")
    $("#wrong-buzzer")[0].play()
    binaryCounter = 0;
}

$("#big-button").on("click", () => {
    console.log(`multiplier: ${multiplier}`)
    $("#button-click")[0].play()
    return multiplier += 1
})

$("#up-arrow").on("click", () => {
    $("#button-click")[0].play()
    if(multiplier === 3 || multiplier === 4){
        let color = $("#big-button").attr("class")
        let text = $("#big-button").html()
        buttonPuzzle(color, text, multiplier)
    } else {
        $(".correct-button").css("background-color", "red")
        $("#wrong-buzzer")[0].play()
        return multiplier = 0;
    }
})

$("#down-arrow").on("click", () => {
    $("#button-click")[0].play()
    if(multiplier < 3){
        let color = $("#big-button").attr("class")
        let text = $("#big-button").html()
        buttonPuzzle(color, text, multiplier)
    } else {
        $(".correct-button").css("background-color", "red")
        $("#wrong-buzzer")[0].play()
        return multiplier = 0;
    }
})

$(".wire").on("click", function() {
    let selectedWire = $(this).attr("id")
    console.log(selectedWire)
    wirePuzzle(selectedWire)
})

$(".hex-button").on("click", () => {
    $("#button-click")[0].play()
    var hexResponse = $(".hex-input").val()

    hexPuzzle(hexResponse)
})

$("#binary-button-red").on("click", function(){
    $("#button-click")[0].play()
    return ++binaryCounter;
})

$("#binary-button-green").on("click", () => {
    $("#button-click")[0].play()
    binaryPuzzle()
})

randomize()