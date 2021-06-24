class Security {

    constructor(){
        this.title = createElement('h1')
        this.greet = createElement('h1')

        this.access1 = createInput("Code1")
        this.access1.position(400,220);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(400,250);
        this.button1.style('background', 'lightgrey');    

        this.x = createElement('h2')
        this.x.style('color','blue')
        this.x.html( " Question : What is 2-4+1 !!")
        this.x.position(400,170)
        
        this.button2 = createButton('Check');
        this.button2.position(-400,-200);

        this.access3 = createInput("Code1")
        this.access3.position(-100,-400);
        this.button3 = createButton('Check');
        this.button3.position(-100,-430);
//add code for creating and positioning the third input box and button
        this.access4 = createInput("Code1")
        this.access4.position(-100,-400);
        this.button4 = createButton('Check');
        this.button4.position(-100,-430);
        
        this.access5 = createInput("Code1")
        this.access5.position(-100,-400);
        this.button5 = createButton('Check');
        this.button5.position(-100,-430);

        this.access6 = createInput("Code1")
        this.access6.position(-100,-400);
        this.button6 = createButton('Check');
        this.button6.position(-100,-430);

        this.access7 = createInput("Code1")
        this.access7.position(-100,-400);
        this.button7 = createButton('Check');
        this.button7.position(-100,-430);

        this.access8 = createInput("Code1")
        this.access8.position(-100,-400);
        this.button8 = createButton('Check');
        this.button8.position(-100,-430);
    
        this.access9 = createInput("Code1")
        this.access9.position(-100,-400);
        this.button9 = createButton('Check');
        this.button9.position(-100,-430);

        this.access10 = createInput("Code1")
        this.access10.position(-100,-400);
        this.button10 = createButton('Check');
        this.button10.position(-100,-430);
    }

    display(){
        
        this.title.html(" Score :"+score)
        this.title.position(350, 50)
        this.title.style('color','red')

        this.greet.html(" Answer 10 Question Correctly And Win The Game ")
        this.greet.position(250, 400)
        this.greet.style('color','black')

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                background(bg3)
                this.title.style('color','red')
                this.button1.hide();
                this.access1.hide();
                this.x.hide();
                this.greet.hide();
                
                score = score+1;
        this.button2.position(400,200);
        this.button2.style('background', 'lightgrey');
        this.access2 = createInput("Code1")
        this.access2.position(400,170);
        this.access2.style('background', 'white'); 
        this.y = createElement('h2')
        this.y.style('color','yellow')
        this.y.html( " Question : What is the full form of RCB!! " )
        this.y.position(400,120)
        
        
       
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                background(bg4)
                
                this.button2.hide();
                this.access2.hide();
                this.y.hide();
                score = score+1;
               
        
        this.access3.position(400,170);
        this.access3.style('background', 'white');  

       
        this.button3.position(400,200);
        this.button3.style('background', 'lightgrey');
        this.z = createElement('h2')
        this.z.style('color','blue')
        this.z.html( " Type Anything  " )
        this.z.position(400,120)
        
        
            }
        });
//add code for what happens when the third button is pressed
        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                background(bg5)
                this.button3.hide();
                this.access3.hide();
                this.z.hide();

                score = score+1;
     
                this.access4.position(400,170);
                this.access4.style('background', 'white');  
        
               
                this.button4.position(400,200);
                this.button4.style('background', 'lightgrey');

                this.a = createElement('h2')
                this.a.style('color','blue')
                this.a.html( " Question : What Is The Name of This Player " )
                this.a.position(400,120)
    }
});

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
        background(bg6)
        this.button4.hide();
        this.access4.hide();
        this.a.hide();

        score = score+1;

        this.access5.position(330,170);
        this.access5.style('background', 'white');  

       
        this.button5.position(330,200);
        this.button5.style('background', 'lightgrey');

        this.b = createElement('h2')
        this.b.style('color','yellow')
        this.b.html( " Question : What is the Highest Run Chase Done In Ipl Till Now " )
        this.b.position(330,120)
}
});

this.button5.mousePressed(() => {
    if(system.authenticate(accessCode5,this.access5.value())){
        background(bg6)
        this.button5.hide();
        this.access5.hide();
        this.b.hide();

        score = score+1;

        this.access6.position(330,170);
        this.access6.style('background', 'white');  

       
        this.button6.position(330,200);
        this.button6.style('background', 'lightgrey');

        this.c = createElement('h2')
        this.c.style('color','yellow')
        this.c.html( " Question : Which Team Has Won 5 Ipl Cups (full name of team) " )
        this.c.position(330,120)
}
});

this.button6.mousePressed(() => {
    if(system.authenticate(accessCode6,this.access6.value())){
        background(bg7)
        this.button6.hide();
        this.access6.hide();
        this.c.hide();
        score = score+1;

        this.access7.position(170,170);
        this.access7.style('background', 'white');  

       
        this.button7.position(170,200);
        this.button7.style('background', 'lightgrey');

        this.d = createElement('h2')
        this.d.style('color','yellow')
        this.d.html( " Question : How Many Tigers Are Left in The World(SEARCH ON GOOGLE) !! " )
        this.d.position(170,120)
}
});

this.button7.mousePressed(() => {
    if(system.authenticate(accessCode7,this.access7.value())){
        background(bg8)
        this.button7.hide();
        this.access7.hide();
        this.d.hide();

        score = score+1;

        this.access8.position(330,170);
        this.access8.style('background', 'white');  

       
        this.button8.position(330,200);
        this.button8.style('background', 'lightgrey');

        this.e = createElement('h2')
        this.e.style('color','black')
        this.e.html( " Question : Who Invented 0 (ZERO) !! " )
        this.e.position(330,120)
}
});
this.button8.mousePressed(() => {
    if(system.authenticate(accessCode8,this.access8.value())){
        background(bg8)
        this.button8.hide();
        this.access8.hide();
        this.e.hide();

        score = score+1;

        this.access9.position(330,170);
        this.access9.style('background', 'white');  

       
        this.button9.position(330,200);
        this.button9.style('background', 'lightgrey');

        this.f = createElement('h2')
        this.f.style('color','black')
        this.f.html( " Question : How Many Years Are There In A Decade !! " )
        this.f.position(330,120)
}
});

this.button9.mousePressed(() => {
    if(system.authenticate(accessCode9,this.access9.value())){
        background(bg8)
        this.button9.hide();
        this.access9.hide();
        this.f.hide();

        score = score+1;

        this.access10.position(330,170);
        this.access10.style('background', 'white');  

       
        this.button10.position(330,200);
        this.button10.style('background', 'lightgrey');

        this.g = createElement('h2')
        this.g.style('color','black')
        this.g.html( " Question : What Is Your Current Score !! " )
        this.g.position(330,120)
}
});

this.button10.mousePressed(() => {
    if(system.authenticate(accessCode10,this.access10.value())){

        this.button10.hide();
        this.access10.hide();
        this.g.hide();
        this.title.hide();

        score = score+1;
 
}
});
    }
}