var canvas = new fabric.Canvas ("mycanvas")
var playerx = 10
var playery = 10
var blockwidth = 30
var blockheight = 30
var playerobject = ""
var blockobject = ''

function player_update () {
    // from URL contains 2 arguments-1.Pic url 2. Function (Img) is used to upload that image in canvas
    // (Img)- is the object for the image set by default
    // the object (Img) is assigned to playerobject variable.
    fabric.Image.fromURL ("player.png", function (Img) {
    playerobject=Img
    playerobject.scaleToWidth (150)
    playerobject.scaleToHeight (150)
    playerobject.set ({
        top:playery,
        left:playerx
    })
    canvas.add (playerobject)
    } 
    )

}