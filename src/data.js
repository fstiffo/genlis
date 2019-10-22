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
