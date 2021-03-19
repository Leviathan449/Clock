var h, m, s;
var hAngle, mAngle, sAngle

function setup() {
  createCanvas(800,400);

}

function draw() {
  background("gold");  

  translate (200,200)
  rotate(-90)
h = hour()
m = minute()
s = second()

sAngle = map(s,0,60 , 0 , 360) //one complete circle has 60 degrees
mAngle = map(m,0,60, 0, 360)
hAngle = map(h % 12,0,12,0,360)

//drawing seconds hand
push()
rotate(sAngle)
stroke("green")
strokeWeight (7)
line (0,0,100,0)
pop ()


//minutess hand
push()
rotate(mAngle)
stroke("yellow")
strokeWeight (6)
line(0,0,70,0)
pop()

//hours hand
push()
rotate(hAngle)
stroke("lime")
strokeWeight (5)
line(0,0,40,0)
pop()

//drawing the arcs
strokeWeight(10)
noFill()

//second
stroke("green")
arc(0,0,300,300,0,sAngle)

//minute
stroke("cyan")
arc(0,0,280,280,0,mAngle)

//hour
stroke("blue")
arc(0,0,250,250,0,hAngle)
}