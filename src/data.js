const data = [
  {
    id: "19",
    texts: [
      'Chi arriva ora? Un gufo. "Siete pronte? Cominciamo! 3, 2, 1 ... Via"!'
    ],
    youtube: ["z5neFa-QRpg"],
    images: ["19.png"],
    glosses: [
      "gls('19',[],[],[wh,'y/n',foc],[],[],['venire chi . gufo . voi-due pronto . cominciare . 3,2,1 . via'],[],[g])."
    ],
    syntax_lexicon: [
      {
        ref: [19, 1, 28],
        prolog:
          "seml(19,1,28-42,coord(e,[prst,pres,ind,arrivare,[gufo,avv-[ora]]],[dirs,pres,ind,dire,[little_pro,qcomp-[essere,stativo,question,[voi-[due],xcomp-[pronto]]]]]))"
      },
      {
        ref: [19, 2, 29],
        prolog:
          "seml(19,2,29-44,ipotas([perloc,pres,imperat,cominciare,[little_pro-[plur]]],[dirs,pres,ind,dire,[little_pro,interj-[3 2 1 ... via]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [19, 1],
        prolog:
          "seml(19,1,28-42,coord(e,[prst,pres,ind,arrivare,[[ndef,_,_,gufo],adj(ora)]],[dirs,pres,ind,dire,[[top,_,_,pro],[quest,pres,ind,essere,[[top,due,plur,voi],[pred,pronto]]]]]))"
      },
      {
        ref: [19, 2],
        prolog:
          "seml(19,2,29-44,ipotas([perloc,pres,imperat,cominciare,[[top,_,plur,pro]]],[dirs,pres,ind,dire,[[top,_,_,pro],[interj,[3 2 1 ... via]]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(gufo,prst,arrivare,19,1,28-42)",
        "turn(pro,dirs,dire,19,1,28-42)",
        "turn(pro,perloc,cominciare,19,2,29-44)",
        "turn(pro,dirs,dire,19,2,29-44)"
      ],
      [
        "turn(gufo, dirs, dire, 19, 2, 29-44)",
        "turn(gufo, perloc, cominciare, 19, 2, 29-44)",
        "turn(gufo, dirs, dire, 19, 1, 28-42)",
        "turn(gufo, prst, arrivare, 19, 1, 28-42)"
      ]
    ],
    generated_text: [
      "ora , arriva un gufo e dice : voi due siete pronti ? [[slnc 600]]",
      '[[pbas 20.800; volm +5.0]] cominciamo [[volm -5.0]] dice : " 3 [[slnc 200]] 2 [[slnc 200]] 1 [[slnc 400]] [[pbas 20.800; volm +5.0]] via [[volm -5.0; slnc 200]] ! [[slnc 600]] '
    ],
    tts: ["19.mp3"]
  },
  {
    id: "20",
    texts: [
      "La lepre parte come un fulmine e scompare.",
      "E anche la tartaruga si incammina."
    ],
    youtube: ["tv2JR1uMCTg", "yqiORaFRJDA"],
    images: ["20.1.png", "20.2.png"],
    glosses: [
      "gls('20.1',[],[],[],[],[],['lepre referente1+referente2-fermi_cl referente1-supera_velocemente-reference2_cl andarsene'],[],[])",
      "gls('20.2',[],[],[],[],[],['tartaruga , uguale , camminare_t'],[t],[])"
    ],
    syntax_lexicon: [
      {
        ref: [20, 1, 30],
        prolog:
          "seml(20,1,30-46,coord(e,[act,pass_rem,ind,superare,[lepre,tartaruga,avv-[velocemente]]],[act,pass_rem,ind,andarsene,[little_pro]]))"
      },
      {
        ref: [20, 2, 31],
        prolog:
          "seml(20,2,31-48,subord(e_anche,act,pass_rem,ind,incamminarsi,[tartaruga]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [20, 1],
        prolog:
          "seml(20,1,30-46,coord(e,[act,pass_rem,ind,superare,[[def,_,_,lepre],[def,_,_,tartaruga],adj(velocemente)]],[act,pass_rem,ind,andarsene,[[top,_,_,pro]]]))"
      },
      {
        ref: [20, 2],
        prolog:
          "seml(20,2,31-48,subord(e_anche,[act,pass_rem,ind,incamminarsi,[[def,_,_,tartaruga]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,superare,20,1,30-46)",
        "turn(pro,act,andarsene,20,1,30-46)",
        "turn(tartaruga,act,incamminarsi,20,2,31-48)"
      ],
      [
        "turn(tartaruga, act, incamminarsi, 20, 2, 31-48)",
        "turn(lepre, act, andarsene, 20, 1, 30-46)",
        "turn(lepre, act, superare, 20, 1, 30-46)"
      ]
    ],
    generated_text: [
      "la lepre superò la tartaruga velocemente e se ne andò [[slnc 600]]",
      "e anche la tartaruga si incamminò [[slnc 600]]"
    ],
    tts: ["20.1.mp3", "20.2.mp3"]
  }
];

export default data;
