//create circle shape class
class Shape{ 
  constructor (x1, y1, radius1, speedX, speedY){
    this.x = x1 
    this.y = y1 
    this.radius = radius1 
    this.speedX = speedX 
    this.speedY = speedY 
    this.age = 0
    this.color = [0,0,0]
  }
  
  update(){
    //move the circle 
    this.age++
    this.x += this.speedX 
    this.y += this.speedY 
  }
  
  display(){
    //draw the circle
    noFill()
    stroke(random(0,255))
    ellipse(this.x, this.y, this.radius)
  } 
} 




class ShapeSystem{
 
  //create array system to hold the shape 
  constructor(){
    this.shapes = []
  }
  
  //create shapes 
  createShape(){
     let circle1 = new Shape( 
     // random(0,width), 
     // random(0,height),
       mouseX, 
       mouseY,
      random(0,30), 
      random(-1,1),
      random(-1,1)  )
  
  //push shape to the array 
  this.shapes.push(circle1)
  
  }
  
  discardShapes(){
    
    for(let i = 0; i<this.shapes.length; i++){
      //if a shape is too old 
      if(this.shapes[i].age >50){
        //remove it from the array
        this.shapes.splice(i,1)
       }
    }
    
    //detect number of shapes 
    //if number of shapes > certain amount, delete shapes
    for(let i = 0; i<this.shapes.length; i++){
      if(this.shapes.length >10){
        this.shapes.splice(i,0)
      }
    }
  }

  update(){
    //for each shape, update its position based on speed 
    //call update on every shape 
    for(let i = 0; i<this.shapes.length; i++){
      this.shapes[i].update() 
    }
    
    
    
    
    
  }

  display(){
    //draw every shape in the array
    for(let i = 0; i< this.shapes.length; i++){
      this.shapes[i].display()
    }
  }
  
}





// let myCircle = new Shape(200,200,20,1,1)



let system = new ShapeSystem()

function setup() {
  createCanvas(600, 600);
 
 
}

function draw() {
//   myCircle.update()
//   myCircle.display()
 background(0,5)
 system.discardShapes()
 

  
}

function mousePressed(){
  // color change upon mouseclick
  // color of the stroke

  
}


function mouseDragged(){
  system.createShape()
  system.update()
  system.discardShapes()
  system.display()
}