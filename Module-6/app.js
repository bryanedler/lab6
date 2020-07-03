
const express= require('express');
const bodyParser= require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var never=0;var barely=0;var sometimes=0;var often=0;var veryEasy=0;var fairlyEasy=0;var difficult=0;var veryDifficult=0;
var helpful=0;var helpfulBut=0;var nthelpful=0;var complicated=0;var appealing=0;var acceptable=0;var disturbing=0;
var annoying=0;var likes="";var dislikes="";

app.get('/survey', function(req, res){
   res.render('survey');
});

app.post('/survey', function(req, res){
  var array= Object.entries(req.body);
  var intriesArray= [];
  var valuesArray= [];
  var arr= [];

console.log(array);
  for (var x = 0; x < array.length; x++){
    if (x>1) {


    if (array[x][1]=='never'){
      never += 1;
      intriesArray[x]='never';
      valuesArray[x]= never;
    }
     if (array[x][1]=='barely'){
      barely += 1;
      intriesArray[x]='barely';
      valuesArray[x]= barely;
    }
     if (array[x][1]=='often'){
      often += 1;
      intriesArray[x]='often';
      valuesArray[x]= often;
    }
     if (array[x][1]=='sometimes'){
      sometimes += 1;
      intriesArray[x]="sometimes";
      valuesArray[x]= sometimes;
    }
     if (array[x][1]=='veryeasy'){
      veryEasy += 1;
      intriesArray[x]="veryEasy";
      valuesArray[x]= veryEasy;
    }
     if (array[x][1]=='fairlyeasy'){
      fairlyEasy += 1;
      intriesArray[x] ='fairlyEasy';
      valuesArray[x]= fairlyEasy;
    }
     if (array[x][1]=='difficult'){
      difficult += 1;
      intriesArray[x]='difficult';
      valuesArray[x]= difficult;
    }
     if (array[x][1]=='verydifficult'){
      veryDifficult += 1;
      intriesArray[x]='veryDifficult';
      valuesArray[x]= veryDifficult;
    }
     if (array[x][1]=='helpful'){
      helpful += 1;
      intriesArray[x]='helpful';
      valuesArray[x]= helpful;
    }
     if (array[x][1]=='helpfulbut'){
      helpfulBut += 1;
      intriesArray[x]='helpfulBut';
      valuesArray[x]= helpfulBut;
    }
     if (array[x][1]=='nothelpful'){
      nthelpful += 1;
      intriesArray[x]='nthelpful';
      valuesArray[x]= nthelpful;
    }
     if (array[x][1]=='toocomplicated'){
      complicated += 1;
      intriesArray[x]='complicated';
      valuesArray[x]= complicated;
    }
     if (array[x][1]=='appealing'){
      appealing += 1;
      intriesArray[x]='appealing';
      valuesArray[x]= appealing;
    }
     if (array[x][1]=='acceptable'){
      acceptable += 1;
      intriesArray[x]='acceptable';
      valuesArray[x]= acceptable;
    }
     if (array[x][1]=='disturbing'){
      disturbing += 1;
      intriesArray[x]='disturbing';
      valuesArray[x]= disturbing;
    }
     if (array[x][1]=='annoying'){
      annoying += 1;
      intriesArray[x]='annoying';
      valuesArray[x]= annoying;
    }
     if (array[x][0]=='likes'){console.log(array[x][1]);

      likes += array[x][1] + '. ' ;
      intriesArray[x]='likes';
      valuesArray[x]= likes;

    }
     if (array[x][0]=='dislikes'){console.log(array[x][1]);
       dislikes += array[x][1] + '. ' ;

      intriesArray[x]= 'dislikes';
      valuesArray[x]= dislikes;
    }

    }
  }
  for (var i = 0; i < intriesArray.length; i++) {
    arr[i]=[];
    for (var j = 0; j < 2; j++) {
      arr[i][0]=intriesArray[i];
      arr[i][1]=valuesArray[i];
    }
  }

  let obj = Object.fromEntries(arr);
console.log(obj);


  // arr= intriesArray.concat(valuesArray);
  // let length = arr.length;

// console.log(intriesArray); console.log(valuesArray);


 res.render('analysis', {data: obj});
 //res.redirect("/survey");
});

app.listen(3000, function(){
  console.log('my server is runinng!');
});
