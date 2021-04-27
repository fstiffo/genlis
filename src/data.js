const data = [
  {
    id: "1",
    texts: [
      "In un bosco viveva una lepre, una lepre altezzosa.",
      "Mentre saltellava con aria superba, improvvisamente vide una tartaruga che camminava tranquilla, lentamente."
    ],
    youtube: ["Errat23BYO0", "ESPwiH3de6A"],
    images: ["1.1.png", "1.2.png"],
    glosses: [
      "gls('1.1',[],[],[wh],[loc1_nprox,loc1_nprox],[],['bosco , ix-loc1_nprox vivere chi . lepre , lepre altezzoso'],	[],[])",
      "gls('1.2',[altezzoso],[],[],[loc2_nprox,loc2_nprox,loc2_nprox],[],['saltare_l , cominciare occhi_cl_veloce_vs_loc2_nprox , vedere ix-loc2_nprox camminare_t , tartaruga tranquillo camminare_t-lentamente'],[l,t,t,t],[])"
    ],
    syntax_lexicon: [
      {
        ref: [1, 1, 1],
        prolog:
          "seml(1,1,1-1,[prst,imp,ind,vivere,[lepre,lepre-[ (mod)-[altezzoso]],obl-[luogo,bosco]]])"
      },
      {
        ref: [1, 2, 2],
        prolog:
          "seml(1,2,2-2,coord(mentre,[act,imp,ind,saltare,[little_pro]],[act,pass_rem,ind,vedere,[little_pro,avv-[improvvisamente],[tartaruga-[ (mod)-tranquillo],fcomp-[camminare,attivita,statement,[little_pro,avv-[lentamente]]]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [1, 1],
        prolog:
          "seml(1,1,1-1,[prst,imp,ind,vivere,[[ndef,_,_,lepre],[def,_,_,lepre,[prop,altezzoso]],[ndef,_,_,bosco,luogo]]])"
      },
      {
        ref: [1, 2],
        prolog:
          "seml(1,2,2-2,coord(mentre,[act,imp,ind,saltare,[[top,_,_,pro]]],[act,pass_rem,ind,vedere,[[top,_,_,pro],adj(improvvisamente),[ndef,_,_,tartaruga-[ (mod)-tranquillo],[act,imp,ind,camminare,[[top,_,_,pro],adj(lentamente)]]]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,prst,vivere,1,1,1-1)",
        "turn(pro,act,saltare,1,2,2-2)",
        "turn(pro,act,vedere,1,2,2-2)"
      ],
      [
        "turn(lepre, act, vedere, 1, 2, 2-2)",
        "turn(lepre, act, saltare, 1, 2, 2-2)",
        "turn(lepre, prst, vivere, 1, 1, 1-1)"
      ]
    ],
    generated_text: [
      "nel bosco , viveva una lepre la lepre altezzosa [[slnc 600]]",
      "mentre saltellava vide improvvisamente una tranquilla tartaruga che camminava lentamente [[slnc 900]]"
    ],
    tts: ["1.1.mp3", "1.2.mp3"]
  },
  {
    id: "2",
    texts: [
      'La lepre le si avvicinò saltellando e le chiese con tono sprezzante: "Noi due possiamo fare una gara?'
    ],
    youtube: ["35UZ13sUWHA"],
    images: ["2.png"],
    glosses: [
      "gls('2',[altezzoso],[],[],[loc2_nprox,loc2_nprox,loc2_nprox],[guardare],['lepre , saltare_l vicino ix-3t . cominciare chiedere : noi-2 gara può'],[l,l],[l])"
    ],
    syntax_lexicon: [
      {
        ref: [2, 1, 3],
        prolog:
          "seml(2,1,3-4,coord(e,[act,pres,ind,avvicinarsi,[lepre,avv-[saltare]]],[dirs,pres,ind,chiedere,[little_pro,obl-[con,tono-[ (mod)-[sprezzante]]],qcomp-[potere,modal,question,[noi-2,vcomp-[fare,accompl,[gara]]]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [2, 1],
        prolog:
          "seml(2,1,3-4,coord(e,[act,pres,ind,avvicinarsi,[[def,_,_,lepre],adj(saltare)]],[dirs,pres,ind,chiedere,[[top,_,_,pro],[ndef,_,_,tono-[prop,sprezzante],con],[quest,pres,ind,potere,[[top,2,plur,noi],[fare,accompl,[[ndef,_,_,gara]]]]]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,avvicinarsi,2,1,3-4)",
        "turn(pro,dirs,chiedere,2,1,3-4)"
      ],
      [
        "turn(lepre, dirs, chiedere, 2, 1, 3-4)",
        "turn(lepre, act, avvicinarsi, 2, 1, 3-4)"
      ]
    ],
    generated_text: [
      "la lepre si avvicina saltellando e chiede con un tono sprezzante : noi 2 possiamo fare una gara ? [[slnc 600]]"
    ],
    tts: ["2.mp3"]
  },
  {
    id: "3",
    texts: ['La tartaruga perplessa domandò: "Che gara"?'],
    youtube: ["MRoJycpHuTk"],
    images: ["3.png"],
    glosses: [
      "gls('3',[perplesso],[],[wh],[loc7_prox],[guardare],['tartaruga : gara cosa'], [t],[t])"
    ],
    syntax_lexicon: [
      {
        ref: [3, 1, 4],
        prolog:
          "seml(3,1,4-6,[dirs,pres,ind,guardare,[tartaruga,avv-[perplesso],qcomp-[essere,stativo,question,[gara-[cosa]]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [3, 1],
        prolog:
          "seml(3,1,4-6,[dirs,pres,ind,guardare,[[def,_,_,tartaruga],adj(perplesso),[quest,pres,ind,essere,[[def0,quale,sing,gara]]]]])"
      }
    ],
    discourse_anaph: [
      ["turn(tartaruga,dirs,guardare,3,1,4-6)"],
      ["turn(tartaruga, dirs, guardare, 3, 1, 4-6)"]
    ],
    generated_text: [
      "la tartaruga chiede con aria perplessa : quale gara è ? [[slnc 600]]"
    ],
    tts: ["3.mp3"]
  },
  {
    id: "4",
    texts: ['"Correre una gara a chi arriva prima", rispose la lepre.'],
    youtube: ["Kqg_Gcx11OQ"],
    images: ["4.png"],
    glosses: [
      "gls('4',[],[],[],[],[],['gara correre arrivare primo chi'],[],[l])"
    ],
    syntax_lexicon: [
      {
        ref: [4, 1, 5],
        prolog:
          "seml(4,1,5-7,[dirs,pres,ind,dire,[lepre,vcomp-[correre,attivita,[gara,qcomp-[arrivare,stativo,statement,[chi,xcomp-[primo]]]]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [4, 1],
        prolog:
          "seml(4,1,5-7,[dirs,pres,ind,dire,[[def,_,_,lepre],[correre,attivita,[[def,_,_,gara],[quest,pres,ind,arrivare,[[top,_,sing,chi],[pred,primo]]]]]]])"
      }
    ],
    discourse_anaph: [
      ["turn(lepre,dirs,dire,4,1,5-7)"],
      ["turn(lepre, dirs, dire, 4, 1, 5-7)"]
    ],
    generated_text: [
      'la lepre replica : " correre la gara a chi arriva prima [[slnc 600]]'
    ],
    tts: ["4.mp3"]
  },
  {
    id: "5",
    texts: ['La tartaruga rispose: "Va bene, accetto la gara".'],
    youtube: ["1hA_IzYDTlA"],
    images: ["5.png"],
    glosses: [
      "gls('5',[],[],[],[],[],['tartaruga : va-bene , ix-1 gara accettare'],[t],[t])"
    ],
    syntax_lexicon: [
      {
        ref: [5, 1, 6],
        prolog:
          "seml(5,1,6-8,ipotas([dirs,pres,ind,dire,[tartaruga,interj-[va-bene]]],[dirs,pres,ind,accettare,[little_pro,gara]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [5, 1],
        prolog:
          "seml(5,1,6-8,ipotas([dirs,pres,ind,dire,[[def,_,_,tartaruga],[interj,[va-bene]]]],[dirs,pres,ind,accettare,[[top,_,_,pro],[def,_,_,gara]]]))"
      }
    ],
    discourse_anaph: [
      ["turn(tartaruga,dirs,dire,5,1,6-8)", "turn(pro,dirs,accettare,5,1,6-8)"],
      [
        "turn(tartaruga, dirs, accettare, 5, 1, 6-8)",
        "turn(tartaruga, dirs, dire, 5, 1, 6-8)"
      ]
    ],
    generated_text: [
      'la tartaruga dice : " va bene ! [[slnc 600]] accetto la gara [[slnc 600]]'
    ],
    tts: ["5.mp3"]
  },
  {
    id: "6",
    texts: ["Che giro faremo?"],
    youtube: ["wKQrIZJj9lw"],
    images: ["6.png"],
    glosses: ["gls('6',[],[],[wh],[],[],['fare-giro come'],[],[t])"],
    syntax_lexicon: [
      {
        ref: [6, 1, 7],
        prolog: "seml(6,1,7-10,[quest,fut,ind,fare,[little_pro,giro-[come]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [6, 1],
        prolog:
          "seml(6,1,7-10,[quest,fut,ind,fare,[[top,_,_,pro],[def0,quale,sing,giro]]])"
      }
    ],
    discourse_anaph: [
      ["turn(pro,quest,fare,6,1,7-10)"],
      ["turn(tartaruga, quest, fare, 6, 1, 7-10)"]
    ],
    generated_text: ["quale giro faremo ? [[slnc 600]]"],
    tts: ["6.mp3"]
  },
  {
    id: "7",
    texts: [
      'La lepre rispose: "Per partire, vedi quell’albero caduto? Partiremo da lì"',
      '"Poi cominciamo a correre e facciamo il giro del grosso albero in fondo."',
      "Poi continuiamo a correre fino alla vecchia casa abbandonata e quindi arriveremo qua."
    ],
    youtube: ["4k_yWlUp03E", "wy4Y1IfUpZQ", "1LM67UknrO0"],
    images: ["7.1.png", "7.2.1.png", "7.2.2.png"],
    glosses: [
      "gls('7.1',[],[],[topic],[loc3_nprox,loc3_nprox,loc3_nprox],[], ['lepre : partire , guardare ix-loc3_prox albero-caduto_cl , ix-loc3_prox partire ix-loc3_prox'],[],[l])",
      "gls('7.2.1',[],[],[],[loc4_dist,loc4_dist],[],['poi cominciare correre_l iniziare-giro ix-loc4_dist albero grosso ix-loc4_dist'],[],[l])",
      "gls('7.2.2',[],[],[],[loc5_dist,loc5_dist,loc5_dist,loc5_dist],[],['poi continuare-giro ix-loc5_dist casa ix-loc5_dist vecchio abbandonato ix-loc5_dist , poi finire-giro ix-loc3_prox'],[],[l])"
    ],
    syntax_lexicon: [
      {
        ref: [7, 1, 8],
        prolog:
          "seml(7,1,8-11,ipotas([dirs,pres,ind,dire,[lepre,vcomp-[per,partire,achievement,[]],fcomp-[guardare,attivita,perloc,[little_pro,albero, (mod)-[caduto]]]]],[act,fut,ind,partire,[little_pro,avv-[ix-loc3_prox]]]))"
      },
      {
        ref: [7, 2, 9],
        prolog:
          "seml(7,2,9-13,coord(e,subord(poi,act,pres,imperat,cominciare,[little_pro,vcomp-[a,correre,attivita,[]]]),[act,pres,ind,fare,[little_pro,giro,obl-[di,albero, (mod)-[grosso],avv-[ix-loc4_dist]]]]))"
      },
      {
        ref: [7, 3, 10],
        prolog:
          "seml(7,3,10-15,ipotas(subord(poi,act,pres,ind,continuare,[little_pro,vcomp-[a,correre,attivita,obl-[fino_a,casa,mods-[ (mod)-[vecchio], (mod)-[abbandonato]]]]]),subord(quindi,act,pres,ind,finire,[little_pro,giro,avv-[ix-loc3_prox]])))"
      }
    ],
    semantics_morphology: [
      {
        ref: [7, 1],
        prolog:
          "seml(7,1,8-11,ipotas([dirs,pres,ind,dire,[[def,_,_,lepre],[per,partire,achievement,[]],[act,pres,imperat,guardare,[[top,_,_,pro],[ndef,_,_,albero],[prop,caduto]]]]],[act,fut,ind,partire,[[top,_,_,pro],adj(qua)]]))"
      },
      {
        ref: [7, 2],
        prolog:
          "seml(7,2,9-13,coord(e,subord(poi,[act,pres,imperat,cominciare,[[top,_,_,pro],[a,correre,attivita,[]]]]),[act,pres,ind,fare,[[top,_,_,pro],[def,_,_,giro]]]))"
      },
      {
        ref: [7, 3],
        prolog:
          "seml(7,3,10-15,ipotas(subord(poi,[act,pres,ind,continuare,[[top,_,_,pro],[a,correre,attivita,[[def,_,_,casa-[prop,vecchio,prop,abbandonato],fino_a]]]]]),subord(quindi,[act,pres,ind,finire,[[top,_,_,pro],[def,_,_,giro],adj(qua)]])))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,dirs,dire,7,1,8-11)",
        "turn(pro,act,partire,7,1,8-11)",
        "turn(pro,act,cominciare,7,2,9-13)",
        "turn(pro,act,fare,7,2,9-13)",
        "turn(pro,act,continuare,7,3,10-15)",
        "turn(pro,act,finire,7,3,10-15)"
      ],
      [
        "turn(lepre, act, finire, 7, 3, 10-15)",
        "turn(lepre, act, continuare, 7, 3, 10-15)",
        "turn(lepre, act, fare, 7, 2, 9-13)",
        "turn(lepre, act, cominciare, 7, 2, 9-13)",
        "turn(lepre, act, partire, 7, 1, 8-11)",
        "turn(lepre, dirs, dire, 7, 1, 8-11)"
      ]
    ],
    generated_text: [
      'la lepre risponde : " per partire [[pbas 20.800; volm +5.0]] guarda [[volm -5.0]] un albero caduto partiremo qua [[slnc 600]]',
      "poi [[pbas 20.800; volm +5.0]] cominciamo [[volm -5.0]] a correre e fa il giro [[slnc 600]]",
      "poi continua a correre fino alla vecchia casa abbandonata [[slnc 600]] quindi finisce il giro qua [[slnc 600]]"
    ],
    tts: ["7.1.mp3", "7.2.1.mp3", "7.2.2.mp3"]
  },
  {
    id: "8",
    texts: ['La tartaruga rispose: "Va bene. La gara è adesso?"'],
    youtube: ["rTVBCxm4MdQ"],
    images: ["8.png"],
    glosses: [
      "gls('8',[],[],['y/n'],[],[],['tartaruga : va-bene , gara adesso'],[],[t])"
    ],
    syntax_lexicon: [
      {
        ref: [8, 1, 11],
        prolog:
          "seml(8,1,11-17,ipotas([dirs,pres,ind,dire,[tartaruga,interj-[va-bene]]],[quest,pres,ind,essere,[gara,avv-[adesso]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [8, 1],
        prolog:
          "seml(8,1,11-17,ipotas([dirs,pres,ind,dire,[[def,_,_,tartaruga],[interj,[va-bene]]]],[quest,pres,ind,essere,[[def,_,_,gara],adj(adesso)]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,dirs,dire,10,1,13-20)",
        "turn(tartaruga,quest,dire,10,2,14-21)"
      ],
      [
        "turn(tartaruga, quest, dire, 10, 2, 14-21)",
        "turn(tartaruga, dirs, dire, 10, 1, 13-20)"
      ]
    ],
    generated_text: [
      'la tartaruga risponde : " va bene ! [[slnc 600]] la gara è adesso ? [[slnc 600]]'
    ],
    tts: ["8.mp3"]
  },
  {
    id: "9",
    texts: ['No, domani mattina", replicò la lepre.'],
    youtube: ["e5PgM88eMJ8"],
    images: ["9.png"],
    glosses: ["gls('9',[],[],[],[],[],['no++ , domani mattina'],[],[l])"],
    syntax_lexicon: [
      {
        ref: [9, 1, 12],
        prolog:
          "seml(9,1,12-19,[dirs,pres,ind,dire,[lepre,interj-[no],avv-[domani],avv-[mattina]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [9, 1],
        prolog:
          "seml(9,1,12-19,[dirs,pres,ind,dire,[[def,_,_,lepre],[interj,[no]],adj(domani),adj(mattina)]])"
      }
    ],
    discourse_anaph: [
      ["turn(lepre,dirs,dire,9,1,12-19)"],
      ["turn(lepre, dirs, dire, 9, 1, 12-19)"]
    ],
    generated_text: [
      'la lepre risponde : " no ! [[slnc 600]] domani mattina [[slnc 600]]'
    ],
    tts: ["9.mp3"]
  },
  {
    id: "10",
    texts: [
      '"Sì, sì, va bene", disse la tartaruga.',
      '"L’appuntamento è qui?", chiese la tartaruga.'
    ],
    youtube: ["UTypeU6p-7Y", "9vtYvfQrmxA"],
    images: ["10.1.png", "10.2.png"],
    glosses: [
      "gls('10.1',[],[],[],[],[],['sì , va bene'],[],[t])",
      "gls('10.2',[],[],['y/n'],[loc3_nprox],[],['appuntamento ix_loc3_prox'],[],[t])"
    ],
    syntax_lexicon: [
      {
        ref: [10, 1, 13],
        prolog:
          "seml(10,1,13-20,[dirs,pres,ind,dire,[tartaruga,interj-[[sÏ,sÏ,va-bene]]]])"
      },
      {
        ref: [10, 2, 14],
        prolog:
          "seml(10,2,14-21,[quest,pres,ind,dire,[tartaruga,fcomp-[essere,stativo,question,[appuntamento,avv-[qui]]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [10, 1],
        prolog:
          "seml(10,1,13-20,[dirs,pres,ind,dire,[[def,_,_,tartaruga],[interj,[[sÏ,sÏ,va-bene]]]]])"
      },
      {
        ref: [10, 2],
        prolog:
          "seml(10,2,14-21,[quest,pres,ind,dire,[[def,_,_,tartaruga],[quest,pres,ind,essere,[[def,_,_,appuntamento],adj(qui)]]]])"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,dirs,dire,10,1,13-20)",
        "turn(tartaruga,quest,dire,10,2,14-21)"
      ],
      [
        "turn(tartaruga, quest, dire, 10, 2, 14-21)",
        "turn(tartaruga, dirs, dire, 10, 1, 13-20)"
      ]
    ],
    generated_text: [
      'la tartaruga risponde : " sì sì va bene ! [[slnc 600]]',
      "\" qui è l' appuntamento ? [[slnc 600]]"
    ],
    tts: ["10.1.mp3", "10.2.mp3"]
  },
  {
    id: "11",
    texts: ['"Sì sì, qui", disse la lepre.'],
    youtube: ["PnBOFmWvE44"],
    images: ["11.png"],
    glosses: [
      "gls('11',[],[],[],[loc3_nprox],[],['sì++ , ix-loc3_nprox'],[],[l])"
    ],
    syntax_lexicon: [
      {
        ref: [11, 1, 15],
        prolog:
          "seml(11,1,15-22,[dirs,pres,ind,dire,[lepre,interj-[[sÏ,sÏ]],avv-[qui]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [11, 1],
        prolog:
          "seml(11,1,15-22,[dirs,pres,ind,dire,[[def,_,_,lepre],[interj,[[sÏ,sÏ]]],adj(qui)]])"
      }
    ],
    discourse_anaph: [
      ["turn(lepre,dirs,dire,11,1,15-22)"],
      ["turn(lepre, dirs, dire, 11, 1, 15-22)"]
    ],
    generated_text: [
      'la lepre risponde : " sì sì ! [[slnc 600]] qui [[slnc 600]]'
    ],
    tts: ["11.mp3"]
  },
  {
    id: "12",
    texts: ['"Perfetto, grazie", disse la tartaruga.'],
    youtube: ["QFAAmD-8ZRg"],
    images: ["12.png"],
    glosses: ["gls('12',[],[],[],[],[],['bene , grazie'],[],[t])"],
    syntax_lexicon: [
      {
        ref: [12, 1, 16],
        prolog:
          "seml(12,1,16-23,[dirs,pres,ind,dire,[tartaruga,interj-[[va-bene,grazie]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [12, 1],
        prolog:
          "seml(12,1,16-23,[dirs,pres,ind,dire,[[def,_,_,tartaruga],[interj,[[va-bene,grazie]]]]])"
      }
    ],
    discourse_anaph: [
      ["turn(tartaruga,dirs,dire,12,1,16-23)"],
      ["turn(tartaruga, dirs, dire, 12, 1, 16-23)"]
    ],
    generated_text: ['la tartaruga replica : " va bene grazie ! [[slnc 600]]'],
    tts: ["12.mp3"]
  },
  {
    id: "13",
    texts: [
      "La tartaruga se ne andò/va a destra e la lepre zampettando a sinistra."
    ],
    youtube: ["rrm_5eIkbvM"],
    images: ["13.png"],
    glosses: [
      "gls('13',[],[],[],[],[],['tartaruga referente-va-dx_cl , lepre zampettare_cl referente-va-sx_cl'],[],[])"
    ],
    syntax_lexicon: [
      {
        ref: [13, 1, 17],
        prolog:
          "seml(13,1,17-24,coord(e,[act,pass_rem,ind,andarsene,[tartaruga,avv-[dx_cl]]],[act,pass_rem,ind,andarsene,[lepre,avv-[zampettare],avv-[sx_cl]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [13, 1],
        prolog:
          "seml(13,1,17-24,coord(e,[act,pass_rem,ind,andarsene,[[def,_,_,tartaruga],adj(a_destra)]],[act,pass_rem,ind,andarsene,[[def,_,_,lepre],adj(zampettare),adj(a_sinistra)]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,act,andarsene,13,1,17-24)",
        "turn(lepre,act,andarsene,13,1,17-24)"
      ],
      [
        "turn(lepre, act, andarsene, 13, 1, 17-24)",
        "turn(tartaruga, act, andarsene, 13, 1, 17-24)"
      ]
    ],
    generated_text: [
      "la tartaruga se ne andò a destra e la lepre se ne andò zampettando a sinistra [[slnc 600]]"
    ],
    tts: ["13.mp3"]
  },
  {
    id: "14",
    texts: [
      "Tutti gli animali del bosco che hanno visto, sapevano che domani mattina presto sarebbero (potuti accorrere) accorsi entusiasti per aspettare e vedere la gara."
    ],
    youtube: ["FoISEBUe1uM"],
    images: ["14.png"],
    glosses: [
      "gls('14',[],[],[],[loc6_nprox],[],['animale bosco tutti vedere , sapere domani mattina presto accorrere_cl vedere+ aspettare accorrere_cl'],[],[])"
    ],
    syntax_lexicon: [
      {
        ref: [14, 1, 18],
        prolog:
          "seml(14,1,18-26,[act,pres,ind,sapere,[animale-[tutti,spec-[bosco],fcomp-[vedere,attivita,statement,[little_pro]]],fcomp-[accorrere,achievement,statement,[little_pro,avv-[domani],avv-[mattina],avv-[presto]]],vcomp-[per,aspettare,attivita,[avv-[entusiasta]]],vcomp-[per,vedere,achievement,[gara,avv-[entusiasta]]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [14, 1],
        prolog:
          "seml(14,1,18-26,[act,pres,ind,sapere,[[coll,tutto,plur,animale,[spec,bosco],fcomp-[vedere,attivita,statement,[little_pro]]],[act,pass_rem,ind,accorrere,[[top,_,_,pro],adj(domani),adj(mattina),adj(presto)]],[per,aspettare,attivita,[adj(entusiasta)]],[per,vedere,achievement,[[def,_,_,gara],adj(entusiasta)]]]])"
      }
    ],
    discourse_anaph: [
      ["turn(animale,act,sapere,14,1,18-26)"],
      ["turn(animale, act, sapere, 14, 1, 18-26)"]
    ],
    generated_text: [
      "tutti gli animali che avevano visto sanno che sarebbero accorsi domani mattina presto per aspettare con spirito entusiasta per vedere la gara con spirito entusiasta [[slnc 600]]"
    ],
    tts: ["14.mp3"]
  },
  {
    id: "15",
    texts: [
      "La lepre venne per prima",
      'saltellando, e disse sprezzante: "La tartaruga non c’è? Ha paura e rinuncia?"'
    ],
    youtube: ["69F0Io-O86s", "K0f38avue_8"],
    images: ["15.1.png", "15.2.png"],
    glosses: [
      "gls('15.1',[],[],[],[],[],['lepre primo venire'],[],[])",
      "gls('15.2',[altezzoso],[],[retorica,retorica],[loc2_nprox],[],['saltare_l . tartaruga non c\\'è . ix-3t paura rinunciare'],[l],[l])"
    ],
    syntax_lexicon: [
      {
        ref: [15, 1, 19],
        prolog:
          "seml(15,1,19-27,[act,pass_rem,ind,venire,[lepre,xadj-[per,primo]]])"
      },
      {
        ref: [15, 2, 20],
        prolog:
          "seml(15,2,20-28,[coord(e,[adj,imp,ind,saltellare,[little_pro]],[dirs,pres,ind,dire,[little_pro,avv-[sprezzante]]],[neg,pres,ind,essere,[tartaruga,avv-[qui]]]),coord(e,[act,pres,ind,avere,[little_pro,[paura]]],[quest,pres,ind,rinunciare,[little_pro,[]]])])"
      }
    ],
    semantics_morphology: [
      {
        ref: [15, 1],
        prolog:
          "seml(15,1,19-27,[act,pass_rem,ind,venire,[[def,_,_,lepre],[pred,primo,per]]])"
      },
      {
        ref: [15, 2],
        prolog:
          "seml(15,2,20-28,[coord(e,[adj,imp,ind,saltellare,[[top,_,_,pro]]],[dirs,pres,ind,dire,[[top,_,_,pro],adj(sprezzante)]],[neg,pres,ind,essere,[[def,_,_,tartaruga],adj(qui)]]),coord(e,[act,pres,ind,avere,[[top,_,_,pro],[def0,_,_,paura]]],[quest,pres,ind,rinunciare,[[top,_,_,pro]]])])"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,venire,15,1,19-27)",
        "turn(pro,act,avere,15,2,20-28)",
        "turn(pro,quest,rinunciare,15,2,20-28)"
      ],
      [
        "turn(lepre, quest, rinunciare, 15, 2, 20-28)",
        "turn(lepre, act, avere, 15, 2, 20-28)",
        "turn(lepre, act, venire, 15, 1, 19-27)"
      ]
    ],
    generated_text: [
      "la lepre venne per prima [[slnc 600]]",
      "saltellava [[slnc 600]] e dice con aria sprezzante : [[pbas 20.600]] la tartaruga non è qui [[slnc 600]] ha paura e rinuncia ? [[slnc 600]]"
    ],
    tts: ["15.1.mp3", "15.2.mp3"]
  },
  {
    id: "16",
    texts: [
      "Poi, lentamente, la tartaruga arrivò:",
      'Camminando: "Io rinunciare per paura? No. Io alla gara ci partecipo".'
    ],
    youtube: ["yETh7L5F1Gg", "mY9j_N7GE2Q"],
    images: ["16.1.png", "16.2.png"],
    glosses: [
      "gls('16.1',[],[],[],[],[],['poi piano-piano tartaruga venire'],[],[])",
      "gls('16.2',[],[],['y/n'],[],[],['camminare_t . ix-1 paura rinunciare . no+ , ix-1 gara partecipare ix-1b'],[t],[])"
    ],
    syntax_lexicon: [
      {
        ref: [16, 1, 21],
        prolog:
          "seml(16,1,21-33,subord(poi,act,pass_rem,ind,venire,[tartaruga,avv-[piano_piano]]))"
      },
      {
        ref: [16, 2, 22],
        prolog:
          "seml(16,2,22-34,[dirs,pres,ind,dire,[little_pro,adj(camminare),qcomp-[rinunciare,achievement,question,[little_pro,obl-[per,paura]]]]])"
      },
      {
        ref: [16, 3, 23],
        prolog:
          "seml(16,3,23-35,ipotas([dirs,pres,ind,dire,[little_pro,interj-[no]]],[dirs,pres,ind,dire,[ix-1,fcomp-[partecipare,attivita,statement,[ix-1,obl-[a,gara],avv-[ix-B_1]]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [16, 1],
        prolog:
          "seml(16,1,21-33,subord(poi,[act,pass_rem,ind,venire,[[def,_,_,tartaruga],adj(piano_piano)]]))"
      },
      {
        ref: [16, 2],
        prolog:
          "seml(16,2,22-34,[dirs,pres,ind,dire,[[top,_,_,pro],[quest,pres,ind,rinunciare,[[top,_,_,pro],[def0,_,_,paura,per]]]]])"
      },
      {
        ref: [16, 3],
        prolog:
          "seml(16,3,23-35,ipotas([dirs,pres,ind,dire,[[top,_,_,pro],[interj,[no]]]],[dirs,pres,ind,dire,[[top,_,_,pro],[act,imp,ind,partecipare,[[top,_,_,pro],[def,_,_,gara,a],adj(ci)]]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,act,venire,16,1,21-33)",
        "turn(pro,dirs,dire,16,2,22-34)",
        "turn(pro,dirs,dire,16,3,23-35)",
        "turn(pro,dirs,dire,16,3,23-35)"
      ],
      [
        "turn(tartaruga, dirs, dire, 16, 3, 23-35)",
        "turn(tartaruga, dirs, dire, 16, 3, 23-35)",
        "turn(tartaruga, dirs, dire, 16, 2, 22-34)",
        "turn(tartaruga, act, venire, 16, 1, 21-33)"
      ]
    ],
    generated_text: [
      "poi la tartaruga venne piano piano [[slnc 600]]",
      'chiede : rinuncia per paura ? [[slnc 600]] risponde : " no ! [[slnc 600]] dice : [[pbas 20.600]] a la gara ci partecipava [[slnc 600]]'
    ],
    tts: ["16.1.mp3", "16.2.mp3"]
  },
  {
    id: "17",
    texts: ['"Va bene", rispose la lepre.'],
    youtube: ["HRXOnKLmQN4"],
    images: ["17.png"],
    glosses: ["gls('17',[],[],[],[],[],['va-bene'],[],[l])"],
    syntax_lexicon: [
      {
        ref: [17, 1, 24],
        prolog: "seml(17,1,24-37,[dirs,pres,ind,dire,[lepre,interj-[va-bene]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [17, 1],
        prolog:
          "seml(17,1,24-37,[dirs,pres,ind,dire,[[def,_,_,lepre],[interj,[va-bene]]]])"
      }
    ],
    discourse_anaph: [
      ["turn(lepre,dirs,dire,17,1,24-37)"],
      ["turn(lepre, dirs, dire, 17, 1, 24-37)"]
    ],
    generated_text: ['la lepre replica : " va bene ! [[slnc 600]]'],
    tts: ["17.mp3"]
  },
  {
    id: "18",
    texts: [
      "Le due si affiancarono.",
      "La lepre era a sinistra, sbuffava tanto, le orecchie all’indietro, guardando la tartaruga.",
      "La tartaruga guardava tranquillamente la lepre e si preparò alla partenza.\nLa tartaruga guardava tranquilla a sinistra la lepre."
    ],
    youtube: ["x-_QgY0Hwys", "UcAvNRQLaAwde6A", "n9pjKDPv4cI"],
    images: ["18.1.png", "18.2.png", "18.3.png"],
    glosses: [
      "gls('18.1',[],[],[],[],[],['referente1+referente2-si-affiancano_cl'],[],[])",
      "gls('18.2',[],[],[],[loc2_nprox,loc2_nprox],[sbuffare-guardare,sbuffare-guardare],['referente1_cl ix-3l lepre , zampel_cl , orecchie_l-vs-dietro , zampel_cl'],[l],[])",
      "gls('18.3',[],[],[],[loc7_prox],[prepararsi_alla_partenza],['tartaruga tranquillo guardare-vs-loc7_prox guardare-avanti zampet_cl'],[t],[])"
    ],
    syntax_lexicon: [
      {
        ref: [18, 1, 25],
        prolog: "seml(18,1,25-38,[act,pass_rem,ind,affiancarsi,[referenti_2]])"
      },
      {
        ref: [18, 2, 26],
        prolog:
          "seml(18,2,26-39,ipotas([act,imp,ind,stare,[lepre,[avv-[ix-l_3],avv-[zampettare]]]],[act,imp,ind,sbuffare,[little_pro,avv-[tanto],orecchie-[ (mod)-[verso,dietro]],vcomp-[guardare,attivita,[tartaruga]]]]))"
      },
      {
        ref: [18, 3, 27],
        prolog:
          "seml(18,3,27-41,[act,imp,ind,guardare,[tartaruga,avv-[a_sinistra],xadj-[tranquillo],lepre,vcomp-[zampettare,attivita,[]]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [18, 1],
        prolog:
          "seml(18,1,25-38,[act,pass_rem,ind,affiancarsi,[[def,_,plur,due]]])"
      },
      {
        ref: [18, 2],
        prolog:
          "seml(18,2,26-39,ipotas([act,imp,ind,stare,[[def,_,_,lepre],[adj(ix-l_3),adj(zampettare)]]],[act,imp,ind,sbuffare,[[top,_,_,pro],adj(tanto),[guardare,attivita,[[def,_,_,tartaruga]]]]]))"
      },
      {
        ref: [18, 3],
        prolog:
          "seml(18,3,27-41,[act,imp,ind,guardare,[[def,_,_,tartaruga],adj(a_sinistra),[pred,tranquillo],[def,_,_,lepre],[zampettare,attivita,[]]]])"
      }
    ],
    discourse_anaph: [
      [
        "turn(due,act,affiancarsi,18,1,25-38)",
        "turn(lepre,act,stare,18,2,26-39)",
        "turn(pro,act,sbuffare,18,2,26-39)",
        "turn(tartaruga,act,guardare,18,3,27-41)"
      ],
      [
        "turn(tartaruga, act, guardare, 18, 3, 27-41)",
        "turn(lepre, act, sbuffare, 18, 2, 26-39)",
        "turn(lepre, act, stare, 18, 2, 26-39)",
        "turn(due, act, affiancarsi, 18, 1, 25-38)"
      ]
    ],
    generated_text: [
      "i due si affiancarono [[slnc 600]]",
      "la lepre stava zampettando sbuffava tanto a guardare la tartaruga [[slnc 600]]",
      "la tartaruga guardava a sinistra tranquilla la lepre zampettare [[slnc 600]]"
    ],
    tts: ["18.1.mp3", "18.2.mp3", "18.3.mp3"]
  },
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
      'ora , arriva un gufo e dice : voi due siete pronti ? [[slnc 600]] [[pbas 20.800; volm +5.0]] cominciamo [[volm -5.0]] dice : " 3 [[slnc 200]] 2 [[slnc 200]] 1 [[slnc 400]] [[pbas 20.800; volm +5.0]] via [[volm -5.0; slnc 200]] ! [[slnc 600]] '
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
  },
  {
    id: "21",
    texts: [
      "La lepre correva e correva velocemente, e le sue orecchie vibravano.",
      'Guardò indietro e disse sprezzante: "La tartaruga è in fondo"'
    ],
    youtube: ["8bwVIbQXuLE", "ZMgnKO-Zv_8"],
    images: ["21.1.png", "21.2.png"],
    glosses: [
      "gls('21.1',[],[veloce],[],[],[],['lepre referente-corre_cl , correre_l , orecchie_l-in-movimento , correre_l'],[l],[]).",
      "gls('21.2',[aria_di_sufficienza],[],[],[],[],['guardare-indietro : tartaruga in-fondo ( dietro ) , PU1'],[],[l])."
    ],
    syntax_lexicon: [
      {
        ref: [21, 1, 32],
        prolog:
          "seml(21,1,32-49,coord(e,[act,imp,ind,correre,[lepre]],[act,imp,ind,correre,[little_pro,avv-[velocemente]]],[act,imp,ind,vibrare,[orecchie]]))"
      },
      {
        ref: [21, 2, 33],
        prolog:
          "seml(21,2,33-52,coord(e,[act,pass_rem,ind,guardare_indietro,[lepre]],[act,pass_rem,ind,dire,[little_pro,avv-[sprezzante],fcomp-[essere,stativo,statement,[tartaruga,avv-[dietro],avv-[in_fondo]]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [21, 1],
        prolog:
          "seml(21,2,33-52,coord(e,[act,pass_rem,ind,guardare_indietro,[lepre]],[act,pass_rem,ind,dire,[little_pro,avv-[sprezzante],fcomp-[essere,stativo,statement,[tartaruga,avv-[dietro],avv-[in_fondo]]]]]))"
      },
      {
        ref: [21, 2],
        prolog:
          "seml(21,2,33-52,coord(e,[act,pass_rem,ind,guardare_indietro,[[def,_,_,lepre]]],[act,pass_rem,ind,dire,[[top,_,_,pro],adj(sprezzante),[act,pres,ind,essere,[[def,_,_,tartaruga],adj(dietro),adj(in_fondo)]]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,correre,21,1,32-49)",
        "turn(pro,act,correre,21,1,32-49)",
        "turn(orecchie,act,vibrare,21,1,32-49)",
        "turn(lepre,act,guardare_indietro,21,2,33-52)",
        "turn(pro,act,dire,21,2,33-52)"
      ],
      [
        "turn(lepre, act, dire, 21, 2, 33-52)",
        "turn(lepre, act, guardare_indietro, 21, 2, 33-52)",
        "turn(orecchie, act, vibrare, 21, 1, 32-49)",
        "turn(lepre, act, correre, 21, 1, 32-49)",
        "turn(lepre, act, correre, 21, 1, 32-49)"
      ]
    ],
    generated_text: [
      "la lepre correva [[slnc 600]] e correva velocemente le orecchie vibravano [[slnc 600]]",
      "la lepre guardò indietro e disse sprezzante la tartaruga è dietro in fondo [[slnc 600]]"
    ],
    tts: ["21.1.mp3", "21.2.mp3"]
  },
  {
    id: "22",
    texts: [
      "Corse fino al grosso albero, lo superò, corse e arrivò alla vecchia casa abbandonata"
    ],
    youtube: ["LuUNkCAtRtI"],
    images: ["22.png"],
    glosses: [
      "gls('22',[],[veloce],[],[loc8_nprox,loc8_nprox],[],['correre_l,albero grosso ( albero grosso_cl sorpassare_cl ) correre_l , referente-in-movimento_cl arrivare casa vecchio abbandonato ix-loc8_nprox . ( casa_cl referente-in-movimento_cl )'],[l,l],[])."
    ],
    syntax_lexicon: [
      {
        ref: [22, 1, 34],
        prolog:
          "seml(22,1,34-54,ipotas(subord(poi,act,imp,ind,correre,[little_pro,obl-[fino_a,albero, (mod)-[grosso]]]),[act,pass_rem,ind,sorpassare,[little_pro,[albero, (mod)-[grosso]]]]))"
      },
      {
        ref: [22, 2, 35],
        prolog:
          "seml(22,2,35-56,coord(e,[act,imp,ind,correre,[little_pro]],[act,pass_rem,ind,arrivare,[little_pro,obl-[a,casa,mods-[ (mod)-[vecchio], (mod)-[abbandonato]]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [22, 1],
        prolog:
          "seml(22,1,34-54,ipotas(subord(poi,[act,imp,ind,correre,[[top,_,_,pro],[def,_,_,albero-[prop,grosso],fino_a]]]),[act,pass_rem,ind,sorpassare,[[top,_,_,pro],[[def,_,_,albero],[prop,grosso]]]]))"
      },
      {
        ref: [22, 2],
        prolog:
          "seml(22,2,35-56,coord(e,[act,imp,ind,correre,[[top,_,_,pro]]],[act,pass_rem,ind,arrivare,[[top,_,_,pro],[def,_,_,casa-[prop,vecchio,prop,abbandonato],a]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(pro,act,correre,22,1,34-54)",
        "turn(pro,act,sorpassare,22,1,34-54)",
        "turn(pro,act,correre,22,2,35-56)",
        "turn(pro,act,arrivare,22,2,35-56)"
      ],
      [
        "turn(lepre, act, arrivare, 22, 2, 35-56)",
        "turn(lepre, act, correre, 22, 2, 35-56)",
        "turn(lepre, act, sorpassare, 22, 1, 34-54)",
        "turn(lepre, act, correre, 22, 1, 34-54)"
      ]
    ],
    generated_text: [
      "poi correva fino all' albero grosso [[slnc 600]] sorpassò l' albero grosso [[slnc 600]] correva e arrivò alla vecchia casa abbandonata [[slnc 600]]"
    ],
    tts: ["22.mp3"]
  },
  {
    id: "23",
    texts: [
      'Saltellando disse: "Beh, la tartaruga è lontana. Mi metto a dormire un po’, dai".',
      "Di corsa va dietro alla casa, abbassa le orecchie per addormentarsi e dorme."
    ],
    youtube: ["v1enl_og2no", "GSzfSf0EDEI"],
    images: ["23.1.png", "23.2.png"],
    glosses: [
      "gls('23.1',[],[],[],[],[],['saltare_l . PU2 , tartaruga lontano , ix-1 cominciare addormentarsi un-po\\' , PU2'],[l],[l]).",
      "gls('23.2',[],[],[],[],[],['correre_l , ( casa_cl casa-dietro-andare_cl ) , dormire-addormentarsi . orecchie_l-abbassarsi , dormire'],[l,l],[])."
    ],
    syntax_lexicon: [
      {
        ref: [23, 1, 36],
        prolog:
          "seml(23,1,36-58,coord(e,[adj,imp,ind,saltellare,[little_pro]],[dirs,pres,ind,dire,[little_pro,fcomp-[essere,stativo,statement,[tartaruga,avv-[lontano]]]]],[act,pres,ind,cominciare,[io,vcomp-[a,dormire,achievement,[avv-[un_pÚ],interj-[PU]]]]]))"
      },
      {
        ref: [23, 2, 37],
        prolog:
          "seml(23,2,37-61,coord(e,[act,pass_rem,ind,andare,[little_pro,avv-[di_corsa],obl-[dietro,casa]]],[act,pass_rem,ind,abbassare,[little_pro,orecchie,vcomp-[per,dormire,attivita,[]]]]))"
      },
      {
        ref: [23, 3, 38],
        prolog:
          "seml(23,3,38-63,subord(e,act,pass_rem,ind,addormentarsi,[little_pro]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [23, 1],
        prolog:
          "seml(23,1,36-58,coord(e,[adj,imp,ind,saltellare,[[top,_,_,pro]]],[dirs,pres,ind,dire,[[top,_,_,pro],[act,pres,ind,essere,[[def,_,_,tartaruga],adj(lontano)]]]],[act,pres,ind,cominciare,[[top,_,sing,io],[a,dormire,achievement,[adj(un_pÚ),[interj,Dai]]]]]))"
      },
      {
        ref: [23, 2],
        prolog:
          "seml(23,2,37-61,coord(e,[act,pass_rem,ind,andare,[[top,_,_,pro],adj(di_corsa),[def,_,_,casa,dietro]]],[act,pass_rem,ind,abbassare,[[top,_,_,pro],[def,_,_,orecchie],[per,dormire,attivita,[]]]]))"
      },
      {
        ref: [23, 3],
        prolog:
          "seml(23,3,38-63,subord(e,[act,pass_rem,ind,addormentarsi,[[top,_,_,pro]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(pro,adj,saltellare,23,1,36-58)",
        "turn(pro,dirs,dire,23,1,36-58)",
        "turn(io,act,cominciare,23,1,36-58)",
        "turn(pro,act,andare,23,2,37-61)",
        "turn(pro,act,abbassare,23,2,37-61)",
        "turn(pro,act,addormentarsi,23,3,38-63)"
      ],
      [
        "turn(io, act, addormentarsi, 23, 3, 38-63)",
        "turn(io, act, abbassare, 23, 2, 37-61)",
        "turn(io, act, andare, 23, 2, 37-61)",
        "turn(io, act, cominciare, 23, 1, 36-58)",
        "turn(lepre, dirs, dire, 23, 1, 36-58)",
        "turn(lepre, adj, saltellare, 23, 1, 36-58)"
      ]
    ],
    generated_text: [
      "saltellava [[slnc 600]] e dice : [[pbas 20.600]] la tartaruga è lontana io comincio a dormire un pò : Dai ! [[slnc 600]]",
      "andò di corsa dietro la casa e abbassò le orecchie per dormire [[slnc 600]] e si addormentò [[slnc 600]]"
    ],
    tts: ["23.1.mp3", "23.2.mp3"]
  },
  {
    id: "24",
    texts: [
      "La tartaruga tranquilla camminava.",
      "Camminando, si avvicina al grosso albero e lo supera."
    ],
    youtube: ["htAXb4iB46U", "IfHKg_P0ufk"],
    images: ["24.1.png", "24.2.png"],
    glosses: [
      "gls('24.1',[],[],[],[],[],['tartaruga tranquillo camminare_t'],[t],[]).",
      "gls('24.2',[],[],[],[],[],['albero grosso camminare_t , ( albero_cl referente-in-movimento-vicino-albero_cl ) , camminare_t , ( albero_cl referente-albero-superare_cl ) , ( referente-albero-superato_cl )'],[t,t],[])."
    ],
    syntax_lexicon: [
      {
        ref: [24, 1, 39],
        prolog:
          "seml(24,1,39-64,[act,imp,ind,camminare,[tartaruga,xadj-[tranquillo]]])"
      },
      {
        ref: [24, 2, 40],
        prolog:
          "seml(24,2,40-65,coord(e,[act,imp,ind,avvicinarsi,[little_pro,avv-[camminare],obl-[a,albero, (mod)-[grosso]]]],[act,pass_rem,ind,superare,[little_pro,albero]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [24, 1],
        prolog:
          "seml(24,1,39-64,[act,imp,ind,camminare,[[def,_,_,tartaruga],[pred,tranquillo]]])"
      },
      {
        ref: [24, 2],
        prolog:
          "seml(24,2,40-65,coord(e,[act,imp,ind,avvicinarsi,[[top,_,_,pro],adj(camminare),[def,_,_,albero-[prop,grosso],a]]],[act,pass_rem,ind,superare,[[top,_,_,pro],[def,_,_,albero]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,act,camminare,24,1,39-64)",
        "turn(pro,act,avvicinarsi,24,2,40-65)",
        "turn(pro,act,superare,24,2,40-65)"
      ],
      [
        "turn(tartaruga, act, superare, 24, 2, 40-65)",
        "turn(tartaruga, act, avvicinarsi, 24, 2, 40-65)",
        "turn(tartaruga, act, camminare, 24, 1, 39-64)"
      ]
    ],
    generated_text: [
      "la tartaruga camminava tranquilla [[slnc 600]]",
      "si avvicinava camminando all' albero grosso e superò l' albero [[slnc 600]]"
    ],
    tts: ["24.1.mp3", "24.2.mp3"]
  },
  {
    id: "25",
    texts: [
      'arriva alla vecchia casa abbandonata e vede la lepre dormire. "Vabbeh", commenta.'
    ],
    youtube: ["QtT_fexmIwM"],
    images: ["25.png"],
    glosses: [
      "gls('25',[],[],['y/n'],[loc8_nprox,loc9_dist,loc9_dist],[],['cominciare casa vecchio abbandonato ix-loc8_nprox camminare_t , vedere lepre dormire ix-loc9_dist , PU3'],[t],[t])."
    ],
    syntax_lexicon: [
      {
        ref: [25, 1, 41],
        prolog:
          "seml(25,1,41-67,[act,pass_rem,ind,arrivare,[little_pro,obl-[accanto_a,casa,mods-[ (mod)-[vecchio], (mod)-[abbandonato]]]]])"
      },
      {
        ref: [25, 2, 42],
        prolog:
          "seml(25,2,42-68,coord(e,[act,pres,ind,vedere,[little_pro,lepre,vcomp-[dormire,attivita,[]]]],[dirs,pres,ind,dire,[little_pro,interj-[PUU]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [25, 1],
        prolog:
          "seml(25,1,41-67,[act,pass_rem,ind,arrivare,[[top,_,_,pro],[def,_,_,casa-[prop,vecchio,prop,abbandonato],accanto_a]]])"
      },
      {
        ref: [25, 2],
        prolog:
          "seml(25,2,42-68,coord(e,[act,pres,ind,vedere,[[top,_,_,pro],[def,_,_,lepre],[dormire,attivita,[]]]],[dirs,pres,ind,dire,[[top,_,_,pro],[interj,VabbË]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(pro,act,arrivare,25,1,41-67)",
        "turn(pro,act,vedere,25,2,42-68)",
        "turn(pro,dirs,dire,25,2,42-68)"
      ],
      [
        "turn(tartaruga, dirs, dire, 25, 2, 42-68)",
        "turn(tartaruga, act, vedere, 25, 2, 42-68)",
        "turn(tartaruga, act, arrivare, 25, 1, 41-67)"
      ]
    ],
    generated_text: [
      "arrivò accanto alla vecchia casa abbandonata [[slnc 600]] vede la lepre dormire e dice : Vabbè ! [[slnc 600]]"
    ],
    tts: ["25.mp3"]
  },
  {
    id: "26",
    texts: ["Continua a camminare e arriva quasi vicino all’albero caduto."],
    youtube: ["-N-laf6UgRk"],
    images: ["26.png"],
    glosses: [
      "gls('26',[],[],[],[loc3_prox,loc3_prox],[],['camminare_t . ( albero_cl referente-inmovimento-supera-albero_cl ) , arrivare quasi vicino albero_caduto_cl ix-loc3_prox , camminare_t'],[t,t],[])."
    ],
    syntax_lexicon: [
      {
        ref: [26, 1, 43],
        prolog:
          "seml(26,1,43-70,coord(e,[act,imp,ind,camminare,[tartaruga]],[act,pass_rem,ind,arrivare,[little_pro,avv-[quasi],obl-[vicino_a,albero, (mod)-[caduto]]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [26, 1],
        prolog:
          "seml(26,1,43-70,coord(e,[act,imp,ind,camminare,[[def,_,_,tartaruga]]],[act,pass_rem,ind,arrivare,[[top,_,_,pro],adj(quasi),[def,_,_,albero-[prop,caduto],vicino_a]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,act,camminare,26,1,43-70)",
        "turn(pro,act,arrivare,26,1,43-70)"
      ],
      [
        "turn(tartaruga, act, arrivare, 26, 1, 43-70)",
        "turn(tartaruga, act, camminare, 26, 1, 43-70)"
      ]
    ],
    generated_text: [
      "la tartaruga camminava e è arrivato quasi vicino all' albero caduto [[slnc 600]]"
    ],
    tts: ["26.mp3"]
  },
  {
    id: "27",
    texts: [
      "La lepre dormiva, si risvegliò e si stiracchiò e disse: \"Dov'è la tartaruga? È ancora in fondo? Vediamo ...",
      "Lì non c'è, lì in fondo non c'è ... Guardò da un lato. \"Non c'è, e in fondo non c'è\". Guardò altrove.",
      "Oh, è arrivata vicino all'albero caduto!\""
    ],
    youtube: ["c98HXN8_S-U", "CI_iz6N8LnY", "LEMrNsIS8_I"],
    images: ["27.1.png", "27.2.png", "27.3.png"],
    glosses: [
      "gls('27.1',[],[],[wh,retorica],[loc8_prox,loc10_ndist],[],['ix-loc8_nprox lepre dormire . svegliarsi , stiracchiarsi . tartaruga dove . ancora ix-loc10_ndist . vedere+'],[l],[l]).",
      "gls('27.2',[],[],[],[loc11_nprox,loc12_dist,loc12_dist,loc13_dist],[],['guardare . non-c\\'è . in-fondo guardare non-c\\'è , guardare-altrove'],[l,l,l],[l,l]).",
      "gls('27.3',[sorpreso],[],[],[],[],['arrivare albero_caduto_cl vicino camminare_t'],[],[l])."
    ],
    syntax_lexicon: [
      {
        ref: [27, 1, 44],
        prolog:
          "seml(27,1,44-72,ipotas([act,imp,ind,dormire,[lepre]],coord(e,[act,pass_rem,ind,svegliarsi,[little_pro]],[act,pass_rem,ind,stiracchiarsi,[little_pro]])))"
      },
      {
        ref: [27, 2, 45],
        prolog:
          "seml(27,2,45-75,ipotas([dirs,pres,ind,dire,[little_pro,qcomp-[essere,stativo,question,[tartaruga,avv-[dove]]],qcomp-[essere,stativo,question,[little_pro,avv-[ancora],avv-[ix-loc9_ndist]]]]],[act,fut,ind,vedere,[little_pro-[plur]]]))"
      },
      {
        ref: [27, 3, 46],
        prolog:
          "seml(27,3,46-77,coord(e,[act,imp,ind,guardare,[little_pro,obl-[di,lato]]],[neg,pres,ind,essere,[little_pro,avv-[in_fondo]]]))"
      },
      {
        ref: [27, 4, 47],
        prolog:
          "seml(27,4,47-79,[act,pass_rem,ind,guardare,[little_pro,avv-[altrove]]])"
      },
      {
        ref: [27, 5, 48],
        prolog:
          "seml(27,5,48-80,ipotas([dirs,pres,ind,dire,[little_pro,interj-[SORPRESA]]],[act,pass_rem,ind,arrivare,[tartaruga,avv-[quasi],obl-[vicino_a,albero, (mod)-[caduto]]]])))"
      }
    ],
    semantics_morphology: [
      {
        ref: [27, 1],
        prolog:
          "seml(27,1,44-72,ipotas([act,imp,ind,dormire,[[def,_,_,lepre]]],coord(e,[act,pass_rem,ind,svegliarsi,[[top,_,_,pro]]],[act,pass_rem,ind,stiracchiarsi,[[top,_,_,pro]]])))"
      },
      {
        ref: [27, 2],
        prolog:
          "seml(27,2,45-75,ipotas([dirs,pres,ind,dire,[[top,_,_,pro],[quest,pres,ind,essere,[[def,_,_,tartaruga],adj(dove)]],[quest,pres,ind,essere,[[top,_,_,pro],adj(ancora),adj(l‡)]]]],[act,fut,ind,vedere,[[top,_,plur,pro]]]))"
      },
      {
        ref: [27, 3],
        prolog:
          "seml(27,3,46-77,coord(e,[act,imp,ind,guardare,[[top,_,_,pro],[def0,_,_,lato,di]]],[neg,pres,ind,essere,[[top,_,_,pro],adj(in_fondo)]]))"
      },
      {
        ref: [27, 4],
        prolog:
          "seml(27,4,47-79,[act,pass_rem,ind,guardare,[[top,_,_,pro],adj(altrove)]])"
      },
      {
        ref: [27, 5],
        prolog:
          "seml(27,5,48-80,ipotas([dirs,pres,ind,dire,[[top,_,_,pro],[interj,Oh]]],[act,pass_rem,ind,arrivare,[[def,_,_,tartaruga],adj(quasi),[def,_,_,albero-[prop,caduto],vicino_a]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,dormire,27,1,44-72)",
        "turn(pro,act,svegliarsi,27,1,44-72)",
        "turn(pro,act,stiracchiarsi,27,1,44-72)",
        "turn(pro,dirs,dire,27,2,45-75)",
        "turn(pro,act,vedere,27,2,45-75)",
        "turn(pro,act,guardare,27,3,46-77)",
        "turn(pro,neg,essere,27,3,46-77)",
        "turn(pro,act,guardare,27,4,47-79)",
        "turn(pro,dirs,dire,27,5,48-80)",
        "turn(tartaruga,act,arrivare,27,5,48-80)"
      ],
      [
        "turn(tartaruga, act, arrivare, 27, 5, 48-80)",
        "turn(lepre, dirs, dire, 27, 5, 48-80)",
        "turn(lepre, act, guardare, 27, 4, 47-79)",
        "turn(lepre, neg, essere, 27, 3, 46-77)",
        "turn(lepre, act, guardare, 27, 3, 46-77)",
        "turn(lepre, act, vedere, 27, 2, 45-75)",
        "turn(lepre, dirs, dire, 27, 2, 45-75)",
        "turn(lepre, act, stiracchiarsi, 27, 1, 44-72)",
        "turn(lepre, act, svegliarsi, 27, 1, 44-72)",
        "turn(lepre, act, dormire, 27, 1, 44-72)"
      ]
    ],
    generated_text: [
      'la lepre dormiva [[slnc 600]] si svegliò e si stiracchiò [[slnc 600]] dice : " dove è la tartaruga ? [[slnc 600]] è ancora là ? [[slnc 600]] vedremo [[slnc 600]]',
      "guardava di lato e non è in fondo [[slnc 600]] guardò altrove [[slnc 600]]",
      "dice : \" Oh ! [[slnc 600]] la tartaruga è arrivata quasi vicino all' albero caduto [[slnc 600]]"
    ],
    tts: ["27.1.mp3", "27.2.mp3", "27.3.mp3"]
  },
  {
    id: "28",
    texts: ["La lepre si mise a correre a più non posso."],
    youtube: ["XCtNErcIKPg"],
    images: ["28.png"],
    glosses: [
      "gls('28',[],[veloce],[],[],[],['lepre cominciare correre correre_l'],[l],[])."
    ],
    syntax_lexicon: [
      {
        ref: [28, 1, 49],
        prolog:
          "seml(28,1,49-82,[act,pres,ind,correre,[lepre,avv-[OCCHI_SOCCHIUSI_DENTI_VISIBILI]]])"
      }
    ],
    semantics_morphology: [
      {
        ref: [28, 1],
        prolog:
          "seml(28,1,49-82,[act,pres,ind,correre,[[def,_,_,lepre],adj(a_pi˘_non_posso)]])"
      }
    ],
    discourse_anaph: [
      ["turn(lepre,act,correre,28,1,49-82)"],
      ["turn(lepre, act, correre, 28, 1, 49-82)"]
    ],
    generated_text: ["la lepre corre a più non posso [[slnc 600]]"],
    tts: ["28.mp3"]
  },
  {
    id: "29",
    texts: [
      'La tartaruga guardò indietro. "Oh", esclamò. Alzò il suo guscio e proseguì più velocemente.'
    ],
    youtube: ["pmB4fqs2iKs"],
    images: ["29.png"],
    glosses: [
      "gls('29',[sopreso],[],[],[loc13_dist],[],['ix-loc13_dist tartaruga guardare-indietro . guscio-alzare_cl , camminare.velocemente_t'],[t],[])."
    ],
    syntax_lexicon: [
      {
        ref: [29, 1, 50],
        prolog:
          "seml(29,1,50-83,coord(e,[act,imp,ind,guardare,[tartaruga,avv-[indietro]]],[act,pres,ind,esclamare,[little_pro,interj-[SORPRESA]]]))"
      },
      {
        ref: [29, 2, 51],
        prolog:
          "seml(29,2,51-85,coord(e,[act,pass_rem,ind,alzare,[little_pro,guscio,avv-[OCCHI_APERTI_LABBRA_STRETTE]]],[act,pass_rem,ind,camminare,[little_pro,avv-[velocemente]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [29, 1],
        prolog:
          "seml(29,1,50-83,coord(e,[act,imp,ind,guardare,[[def,_,_,tartaruga],adj(indietro)]],[act,pres,ind,esclamare,[[top,_,_,pro],[interj,Oh]]]))"
      },
      {
        ref: [29, 2],
        prolog:
          "seml(29,2,51-85,coord(e,[act,pass_rem,ind,alzare,[[top,_,_,pro],[def,_,_,guscio],adj(energicamente)]],[act,pass_rem,ind,camminare,[[top,_,_,pro],adj(velocemente)]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(tartaruga,act,guardare,29,1,50-83)",
        "turn(pro,act,esclamare,29,1,50-83)",
        "turn(pro,act,alzare,29,2,51-85)",
        "turn(pro,act,camminare,29,2,51-85)"
      ],
      [
        "turn(tartaruga, act, camminare, 29, 2, 51-85)",
        "turn(tartaruga, act, alzare, 29, 2, 51-85)",
        "turn(tartaruga, act, esclamare, 29, 1, 50-83)",
        "turn(tartaruga, act, guardare, 29, 1, 50-83)"
      ]
    ],
    generated_text: [
      "la tartaruga guardava indietro e esclama : Oh ! [[slnc 600]] alzò il guscio energicamente e camminò velocemente [[slnc 600]]"
    ],
    tts: ["29.mp3"]
  },

  {
    id: "30",
    texts: [
      "La lepre rincorre la tartaruga e la raggiunge, ma la tartaruga taglia il traguardo per prima e vince.",
      "La lepre piena di vergogna se ne andò."
    ],
    youtube: ["InJwrsmOBaU", "rMVTJTBtTCE"],
    images: ["30.1.png", "30.2.png"],
    glosses: [
      "gls('30.1',[],[],[],[],[],['referente2_cl referente1_rincorre_referente2_cl , referente1_raggiunge_referente2_cl ) . primo tartaruga . primo ( referente1+referente2-al-traguardo_cl ) . nastro superare . finito'],[t,l,t],[]).",
      "gls('30.2',[con_vergogna],[],[],[],[],['lepre saltare_l arrivare vergogna camminare_l andarsene'],[l,l],[])."
    ],
    syntax_lexicon: [
      {
        ref: [30, 1, 52],
        prolog:
          "seml(30,1,52-87,coord(e,[act,imp,ind,rincorrere,[referente_1,referente_2]],[act,pass_rem,ind,raggiungere,[little_pro,referente_2]]))"
      },
      {
        ref: [30, 2, 53],
        prolog:
          "seml(30,2,53-89,coord(e,subord(ma,act,pass_rem,ind,tagliare,[tartaruga,traguardo,xadj-[per,primo]]),[act,pass_rem,ind,vincere,[little_pro]]))"
      },
      {
        ref: [30, 3, 54],
        prolog:
          "seml(30,3,54-91,coord(e,[act,pass_rem,ind,arrivare,[lepre,avv-[saltellare]]],[act,pass_rem,ind,andarsene,[little_pro,obl-[con,vergogna]]]))"
      }
    ],
    semantics_morphology: [
      {
        ref: [30, 1],
        prolog:
          "seml(30,1,52-87,coord(e,[act,imp,ind,rincorrere,[[def,_,_,lepre],[def,_,_,tartaruga]]],[act,pass_rem,ind,raggiungere,[[top,_,_,pro],[def,_,_,tartaruga]]]))"
      },
      {
        ref: [30, 2],
        prolog:
          "seml(30,2,53-89,coord(e,subord(ma,[act,pass_rem,ind,tagliare,[[def,_,_,tartaruga],[def,_,_,traguardo],[pred,primo,per]]]),[act,pass_rem,ind,vincere,[[top,_,_,pro]]]))"
      },
      {
        ref: [30, 3],
        prolog:
          "seml(30,3,54-91,coord(e,[act,pass_rem,ind,arrivare,[[def,_,_,lepre],adj(saltellare)]],[act,pass_rem,ind,andarsene,[[top,_,_,pro],[def0,_,_,vergogna,con]]]))"
      }
    ],
    discourse_anaph: [
      [
        "turn(lepre,act,rincorrere,30,1,52-87)",
        "turn(pro,act,raggiungere,30,1,52-87)",
        "turn(tartaruga,act,tagliare,30,2,53-89)",
        "turn(pro,act,vincere,30,2,53-89)",
        "turn(lepre,act,arrivare,30,3,54-91)",
        "turn(pro,act,andarsene,30,3,54-91)"
      ],
      [
        "turn(lepre, act, andarsene, 30, 3, 54-91)",
        "turn(lepre, act, arrivare, 30, 3, 54-91)",
        "turn(tartaruga, act, vincere, 30, 2, 53-89)",
        "turn(tartaruga, act, tagliare, 30, 2, 53-89)",
        "turn(lepre, act, raggiungere, 30, 1, 52-87)",
        "turn(lepre, act, rincorrere, 30, 1, 52-87)"
      ]
    ],
    generated_text: [
      "la lepre rincorreva la tartaruga e la raggiunse [[slnc 600]] ma la tartaruga tagliò il traguardo per prima e vinse [[slnc 600]]",
      "la lepre arrivò saltellando e se ne andò con vergogna [[slnc 600]]"
    ],
    tts: ["30.1.mp3", "30.2.mp3"]
  }
];

export default data;
