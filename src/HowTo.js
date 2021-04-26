import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";

const HowTo = () => {
  return (
    <>
      <h3>How To</h3>
      <Figure>
        <Figure.Image src="/imgs/flowchart.png" />
        <Figure.Caption>
          Flowchart of the algorithm to generate TTS from glosses
        </Figure.Caption>
      </Figure>
      <Figure>
        <Figure.Image src="/imgs/additions.png" />
        <Figure.Caption>Details of algorythm steps 3 and 4</Figure.Caption>
      </Figure>
      <Row flex>
        <Col>
          <p>
            The generation algorithm is basically a “core” grammar algorithm
            with peripheral rules for exceptions. The generation is organized
            around the following steps:
          </p>
          <ol>
            <li>
              a subdivision at utterance level between simple sentence and
              complex sentence
            </li>
            <ul>
              <li>
                o complex sentence input includes coordinate sentences,
                subordinate sentences which can be both in turn simple sentences
                with a discourse marker at the beginning
              </li>
            </ul>
            <li>
              simple sentences are then organized into three different types
              based on diathesis: active, passive; but also based on speech act
              types, a separate call for questions or exclamations which may
              require a specific sentence organization
            </li>
            <li>
              each simple sentence generates the subject and then calls the rest
              of the sentence; in case sentence type is question, a check is
              made to see if the subject is constituted by a wh- word; empty
              subject pronouns are classified as “little_pro”
            </li>
            <li>
              all nominal expressions - both SUBJect and OBJect and OBLiques –
              can be modified by simple modifiers, multiple modifiers, and
              relative clauses. All of them are structurally attached to the
              nominal head because they are semantically and morphologically
              dependent on the head. In fact, adjectivals require feature
              agreement which need to be restricted before generation in order
              to prevent failures; as to relative clauses, their internal
              arguments may require the same type of information, in particular
              in case the argument controlled by the relative pronoun – which
              may be unexpressed – is the SUBJect. Relative clauses may also be
              governed by an adjunct relation but this is not the case in our
              story. In order to realize the appropriate word forms, the
              morphological features of the nominal head governing the relative
              clause are passed to the clause level as BINDER bundle of features
              which may be used by the Verb Complex and realized as SUJBect or
              OBJect features.
            </li>
            <li>
              the remaining generation component is governed by the choice of
              verb type which has three possible options: copulative, transitive
              and intransitive. The verb complex receives semantic and
              morphological information from the subject if present be it a
              nominal or pronominal head, or simply an empty subject which
              however may have morphological features, person, number and
              possibly gender
            </li>
            <li>
              choosing the correct verbal complement structure may be dependent
              on subject semantic categories which are also passed to the verbal
              complex. Semantic features are checked by matching
              subcategorization information stored in the lexicon for each
              possible structural outcome. For instance, a verb like DIRE has
              the following entries in our lexicon:
              <br />
              <code>
                Gramm_cat=trans, Semantic_cat=riport_dir,
                <br />
                FIRST=[sn/sogg/actor/[umano, informa, astratto],
                vcomp/prop/di/[sogg=sogg/actor]],
                <br />
                SECOND=[sn/sogg/actor/[umano, informa, astratto],
                sn/ogg/tema_nonaff/[informa, astratto]]
                <br />
                THIRD=[sn/sogg/actor/[umano, informa, astratto],
                sp/ogg2/esperiente/a/[umano], f/fcomp/prop/[sogg=sogg/agente,
                sogg=x]]
                <br />
                FOURTH=[sn/sogg/actor/[umano, informa,astratto], f/fcomp/propq/[
                sogg=sogg/agente, sogg=x]]]
              </code>
              .
              <br />
              As can be noticed, there are four separate complement structures
              <code>
                (vcomp=INFINITIVAL, ogg=DIRECT_OBJECT,
                ogg2=INDIRECT_OBJECT(dative) + f/fcomp=SENTENTIAL_OBJECT,
                f/fcomp=SENTENTIAL_OBJECT)
              </code>
              , which are however characterized by the same grammatical
              category, TRANSITIVE, and the same conceptual and semantic
              category, RIPORT_DIR, that is a reportive verb that can be used
              also for direct speech introduction. This also applies to other
              verbs that may undergo “intrasitivization” like MANGIARE, but also
              to verbs with different complement structures but identical
              categorizations, like CONSIDERARE and DIPINGERE:
              <br />
              <br />
              <code>
                FIRST=considerare, trans, soggettivo,sn-sogg, esperiente,
                [umano], sn-ogg, [nn], tema_bound, [_], ncomp-[sogg=ogg], [nn],
                prop, [_]
                <br />
                SECOND=considerare, trans, soggettivo, sn-sogg, esperiente,
                [umano], sn-ogg, [_], tema_bound, [_], xcomp, [_], prop, [_]
              </code>
              <br />
              <br />
              <code>
                FIRST=dipingere, trans, attivita, sn-sogg, agente, [umano],
                sn-ogg, [_], tema_aff, [oggetto]
                <br />
                SECOND=dipingere, trans, risultato, sn-sogg, agente, [umano],
                sn-ogg, [_], tema_aff, [oggetto], acomp, [_], prop, [_]
              </code>
              <br />
              <br />
              where we see for CONSIDERARE open complements like NCOMP(a nominal
              predicative complement) or XCOMP a label for generic open
              complements including infinitivals); and (no) open complement
              controlled by the OBJECT nominal for DIPINGERE. All open
              complements require morphological features to match, so that the
              call for complement structures has to impose agreement for those
              features, This can be different for other verbs where grammatical
              category may vary as is the case for ACCENNARE that goes from
              intransitive to transitive:
              <br />
              <br />
              <code>
                pred_vs(accennare, intr, attivita, sn-sogg, actor, [umano],
                sp-ogg2, a, tema_nonaff, [oggetto], nn, [nn], nn, nn).
                <br />
                pred_vs(accennare, trans, attivita, sn-sogg, actor, [umano],
                sp-ogg2, a, tema_nonaff, [umano], f, [nn], prop,
                [sogg=sogg/actor, sogg=x]).
              </code>
              <br />
              <br />
              Or for a verb like APPARIRE that goes from copulative to
              unaccusative or SCAPPARE from unaccusative to intrasitive:
              <br />
              <br />
              <code>
                FIRST=apparire, cop, stato, sn-sogg, actor, [animato, umano],
                ncomp, [_], prop, [_],
                <br />
                <br />
                SECOND=apparire, inac, risultato, sn-sogg, actor, [evento,
                animato, umano]
                <br />
                <br />
                FIRST=scappare, inac, achiev, sn-sogg, tema_aff, [animato,
                umano]
                <br />
                <br />
                SECOND=scappare, intr, attivita, sn-sogg, agente, [animato,
                umano], sp-obl, da, malef, [animato, umano, ferocious, evento,
                attivita, luogo]
              </code>
              <br />
              <br />
              The call for verbal complex and complement structures will be
              different in these cases so that when none of the expected
              complement is met by the generator a failure will ensue and
              another call will be attempted.
              <br />
              Our lexicon is organized around a limited number of entries,
              around 1000 for most frequent lexical entries according frequency
              dictionaries, and another extended set of manually annotated
              entries, around 9000 for the remaining less frequent but always
              non rare entries which have a different feature and argument
              organization. Here is the set of lexical entries for ABBANDONARE,
              reported as the verb root ABBANDON, followed by the paradigm class
              – 1st conjugation -, a label for the now estended grammatical
              class that includes “inherent reflexive”, and an extended set of
              semantic and conceptual classes.
              <br /> <br />
              <code>
                FIRST=abbandon,1,refl_in,activ,hyper,
                [np/subj1/agent/[rifl,+hum], pp/obj2/goal/a/[+abst]]). <br />
                SECOND=abbandon,1,refl_in,activ,hyper,
                [np/subj1/agent/[rifl,+hum], pp/obl/locat/su/[-ani,-abst]]
                <br />
                THIRD=abbandon,1,tr,accomp,posit,
                [np/subj1/theme_unaff/[-hum,+abst],
                np/obj1/theme_aff/[+ani,+hum]] <br />
                FOURTHabbandon,1,tr,achiev,posit, [np/subj1/agent/[+hum,+ani],
                np/obj1/theme_unaff/[-ani], pp/obl/locat/su/[-ani,-abst]] <br />
                FIFTH=abbandon,1,tr,achiev,posit, [np/subj1/agent/[+hum,+ani],
                np/obj1/theme_unaff/[+ani,+hum], pp/obl/locat/a/[]]
              </code>
              <br />
              <br />
              As can be seen, we can have a two place argument structure but
              also a three place one with obliques; a semantic classification
              for HYPER, and another one for POSIT (positional) involving
              locatives; Accomplishments, Achievements and Activities. In
              particular Aspectual categories are very important – as said above
              - in the choice of verbal morphology regarding Tense and Mood;
              while semantic and conceptual class may also be relevant in case a
              sentential complement is present as will be clarified below.
            </li>
            <li>
              Generating the verbal complex together with its complements and
              adjuncts.
            </li>
            <li>
              Generating the verbal complex requires precise morphological
              information as to the Tense and Mood to be realized. In
              particular, simple vs composite verbal complex may be realized
              which in turn require specification of the appropriate auxiliary
              verb: ESSERE for passive, reflexive, inherent reflexive and
              unaccusative classes, AVERE for active transitive and intransitive
              classes. In turn morphological information from the SUBJect is
              also required in case of auxiliary ESSERE in order to generate the
              appropriate past participle. The same is required from the OBJect
              in case of pronominalization processes of the nominal head into a
              clitic pronoun, which however requires decisions that can only be
              made by a full-fledged pronoun resolution system that is not yet
              available. <br />
              As to Person, this may be available in case the SUBJect was
              lexically expressed. Empty pronouns on the contrary do not realize
              Person feature which is by default set to 3rd. Special cases are
              constituted by Imperative mood and Direct Speech. Imperative mood
              requires 2nd person to be realized if the command or instruction
              is addressed directly to the interlocutor: there are instructions
              being addressed by the rabbit to the turtle using imperative. But
              there are also commands addressed by the owl to both competitors,
              the rabbit and the turtle, to start the race. In this second case,
              2nd person plural is required. However, also 1st person plural is
              acceptable. Introducing 2nd person is not an easy task and we
              haven’t been able yet to find a linguistically motivated trigger
              to do it. <br />
              When the verb is finally selected and lexically realized it is
              checked for agreement with SUBJect morphological features. This
              may cause failures until the appropria verb form is produced.
            </li>
            <li>The following call is the one for complements and adjuncts.</li>
            <li>
              The input guides the selection according to its shape: nominal and
              sentential complements are made up of a four or five slots list,
              while an oblique may be constituted by a list containing five or
              six slots; a simple modifier has only two or three slots. Finally
              adverbials or interjections are made up of one or two slots but
              contain a special label as unique identifiers.
              <br />
              Sentential complements may be simple sentences preceded by a
              complementizer which is locally generated; or they may be direct
              questions. In this second case a question mark is added at the
              end. The two complement types are marked by a special label
              identifier FCOMP and QCOMP.
              <br />A special case may be constituted by wh- questions as
              sentential complements, requiring a local wh- expression to be
              generated before the verb also in case it is an adjunct – i.e.
              WHEN, HOW, WHERE. These pronouns would be positioned after the
              verb in the logical form build from semantic forms. So they need
              to be raised, i.e. removed from the complement structure and
              generated in the appropriate position.
            </li>
            <li>
              Peripheral rules are required to generate special stylistically
              marked structures, like Subject Locative Inversion with
              presentative structures, and complements realized as clitics which
              need to be positioned before the verb. In both cases we
              implemented the rules to act at the end of the generation process.
              The SUBJect – Locative is used for the first sentence of the
              story, when the rabbit is presented and appears on the scene as
              living in the woods. This is a typical introductory sentence for
              many fables or children stories and has all the required
              linguistic features: the protagonist is unknown and is realized as
              an indefinite nominal structure; the verb is unaccusative or
              intransitive, in this case VIVERE used intransitively; the
              sentence is completed by presence of a Locative adjunct, “NEL
              BOSCO”. The main linguistic elements are all generated in their
              base structure, they are identified and displaced in order to
              produce a presentation structure where the Locative comes in first
              position followed by the verb complex and then comes the subject
              nominal and the rest of the sentence, which in this case is an
              apposition.
              <br />
              The second case of peripheral rule is the one involving a clitic
              pronoun CI for a locative or a dative repeated in the same
              complement structure, and the governing verb PARTECIPARE. The
              clitic is generated after the verb and then it is scrambled before
              it.
            </li>
            <li>
              Structures that required special rules to be implemented include
              so-called Open Complements/Adjuncts
            </li>
            <li>
              Open Complements/Adjuncts are predicative complements of
              copulative verbs, as in SIAMO PRONTI; Open Adjuncts are state
              adjectives like TRANQUILLO which require gender/number agreement
              with the SUBJect as in LA TARTARUGA GUARDAVE TRANQUILLA. Both
              cases requires SUBJect morphological features to be visible in the
              Complement/Adjunct section of the generator in order to select or
              restrict the appropriate word form.
            </li>
          </ol>

          <p />
        </Col>
      </Row>
    </>
  );
};

export default HowTo;
