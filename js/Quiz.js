class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
 //   text("----------------------------",320, 65);
    Contestant.getPlayerInfo();

    //call getContestantInfo( ) here
  if(allcontestants !==undefined){
  
    fill("blue");
    textSize(20);
    text("*Note: Contestants who answered correct is highlighted in green",130,230)
  }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      debugger;
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
          }
  }

}
