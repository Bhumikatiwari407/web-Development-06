function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor="yellow";
}
function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor="white";
}
function Bulb1RED(){
    document.getElementById("bulb1").style.backgroundColor="red";
}
function Bulb1GREEN(){
    document.getElementById("bulb1").style.backgroundColor="green";
}
function Bulb1BLUE(){
    document.getElementById("bulb1").style.backgroundColor="blue";
}

document.getElementById("bulbRed").addEventListener("click", Bulb1RED);
document.getElementById("bulbBlue").addEventListener("click", Bulb1BLUE);
document.getElementById("bulbGreen").addEventListener("click", Bulb1GREEN);
// document.getElementById("bulb1Color").addEventListener("change", ChangeBlubColor);

// function ChangeBlubColor(){
//     const color =document.getElementById("bulb1Color").value;
//     document.getElementById("ABCD").style.color = color;
// }
// function reset(){
//     window.location.reload();
// }
function ChangeBackGroundColor()
{
  const color = document.getElementById("bgCol").value;
  document.getElementById("box2").style.backgroundColor = color;
}
document.getElementById("bgCol").addEventListener("change", ChangeBackGroundColor);



function ChangeHeadingColor()
{
  const color = document.getElementById("hcol").value;
  document.getElementById("HCol").style.color = color;
}
document.getElementById("hcol").addEventListener("change", ChangeHeadingColor);



function ChangeParagraphColor()
{
  const color = document.getElementById("pcol").value;
  document.getElementById("PCol").style.color = color;
}
document.getElementById("pcol").addEventListener("change", ChangeParagraphColor);


function Reset()
{
    window.location.reload();
}