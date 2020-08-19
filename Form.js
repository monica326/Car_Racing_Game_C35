class Form{
 constructor(){}
 display(){
    var title=createElement('h2')
    title.html("car Racing Game");
    title.position(230,100);

    var input = createInput("name");
    var button = createButton("Play");
    var greeting = createElement("h3");

    input.position(300,300);
    button.position(350,350);
    
    button.mousePressed(function(){
        input.hide(); 
        button.hide(); 
        var name = input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update(name);
        player.updateCount(playerCount); 
        greeting.html("Hello " + name);
        greeting.position(130,160); }); 
         }
     }
        
       
        
 