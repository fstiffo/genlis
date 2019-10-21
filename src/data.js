const data = [
  {
    id: "19",
    text:
      'Chi arriva ora? Un gufo. "Siete pronte? Cominciamo! 3, 2, 1 ... Via"!',
    youtube: "https://youtu.be/z5neFa-QRpg",
    glosses:
      "gls('19',[],[],[wh,'y/n',foc],[],[],['venire chi . gufo . voi-due pronto . cominciare . 3,2,1 . via'],[],[g]).",
    syntax_lexicon: [
      {
        id: [19, 1, 28],
        prolog:
          "seml(19,1,28-42,coord(e,[prst,pres,ind,arrivare,[gufo,avv-[ora]]],[dirs,pres,ind,dire,[little_pro,qcomp-[essere,stativo,question,[voi-[due],xcomp-[pronto]]]]]))"
      },
      {
        id: [19, 2, 29],
        prolog:
          "seml(19,2,29-44,ipotas([perloc,pres,imperat,cominciare,[little_pro-[plur]]],[dirs,pres,ind,dire,[little_pro,interj-[3 2 1 ... via]]]))"
      }
    ],
    semantics_morphology: [
      {
        id: [19, 1],
        prolog:
          "seml(19,1,28-42,coord(e,[prst,pres,ind,arrivare,[[ndef,_,_,gufo],adj(ora)]],[dirs,pres,ind,dire,[[top,_,_,pro],[quest,pres,ind,essere,[[top,due,plur,voi],[pred,pronto]]]]]))"
      },
      {
        id: [19, 2],
        prolog:
          "seml(19,2,29-44,ipotas([perloc,pres,imperat,cominciare,[[top,_,plur,pro]]],[dirs,pres,ind,dire,[[top,_,_,pro],[interj,[3 2 1 ... via]]]]))"
      }
    ],
    discourse_anaph: [
      "turn(gufo,prst,arrivare,19,1,28-42)",
      "turn(pro,dirs,dire,19,1,28-42)",
      "turn(pro,perloc,cominciare,19,2,29-44)",
      "turn(pro,dirs,dire,19,2,29-44)",
      "turn(gufo, dirs, dire, 19, 2, 29-44)",
      "turn(gufo, perloc, cominciare, 19, 2, 29-44)",
      "turn(gufo, dirs, dire, 19, 1, 28-42)",
      "turn(gufo, prst, arrivare, 19, 1, 28-42)"
    ],
    generated_text: [
      "ora arriva un gufo e dice : voi due siete pronti",
      'cominciamo dice: " 3 2 1 ... via'
    ],
    tts: "19.mp3"
  }
];
