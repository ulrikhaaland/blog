import { openai } from "./config";

export interface ExplanationEval {
  good: boolean;
  reason: string;
  reasonImproved?: string;
}

export const createExplanationChatCompletetion = async (
  explanation: string
): Promise<ExplanationEval> => {
  let response;

  try {
    response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [
        {
          role: "system",
          content:
            "You are an expert in epistemology: The theory of knowledge, which explains how we know what we know.",
        },
        {
          role: "user",
          content:
            'This is a blog post outlining the principles of what constitutes a good explanation: 1. Vanskelig å variere\n\nEn god forklaring er vanskelig å variere: Du kan ikke enkelt endre dens innhold uten å ødelegge det den påstår å forklare.\n\nEksempel: Hvorfor vokser planter mot solen?\n\n God Forklaring: Grunnen til at planter vokser mot solen skyldes en prosess kalt fototropisme, der planteceller på siden bort fra lyset forlenges. Dette gjør det enklere for planten å kapre lys, som sammen med karbondioksid og vann driver en prosess kalt fotosyntese: dannelsen av glukose (plantemat) og oksygen (både et biprodukt av fotosyntese og en nødvending komponent for cellulær respirasjon i planter).\n\nEn god forklaring gjør det vanskeligere for deg å lure deg selv. For om du prøver å variere dens innhold, f.eks. ved å si at lys ikke er en nødvendig del av fotosyntese, så vil hele forklaring kollapse. Da redegjør den ikke lenger for hvorfor planter vokser mot lys.\n\nEt av kjennetegnene på en god forklaring er den intime koblingen mellom detaljene den inneholder og det den påstår å forklare. En god forklaring er som et korthus, forsiktig stablet, enhver endring i struktur fører til kollaps.\n\nDårlig Forklaring: Planter vokser mot sollys fordi de elsker solen og vil være nærmere den.\n\nDette forklarer ingenting. Det er foreløpig ikke mulig å finne ut om planter faktisk elsker solen. For å elske er en følelse, og en følelse er en kvale: den subjektive delen av en opplevelse. Og for dette har vi ingen gode forklaringer.\n\nMen vi trenger ingen teori om den subjektive delen av en opplevelse for å dømme denne forklaringen dårlig. Fordi den er lett å variere. Som betyr at vi enkelt kan endre innholdet uten å ødelegge forklaringen. Vi kunne like gjerne sagt at planter vokser mot lyset fordi det gir dem gode følelser, eller fordi det er gøy.\n\nEn forklaring er dårlig når det ikke finnes noe bindeledd mellom innholdet i forklaringen og det den prøver å forklare.\n\n2. Testbar\n\nEn god forklaring skal være testbar. Noe som betyr at den kan granskes, evalueres og bli falsifisert (motbevist) gjennom observasjoner i den virkelige verden.\n\nEksempel: Hvorfor er trening sunt?\n\nGod Forklaring: Trening hjelper til med å forbedre hjerte- og karsystemets helse ved å øke hjertefrekvensen, noe som igjen hjelper til med å styrke hjertemuskelen og forbedre blodstrømmen.\n\nDette kan testes. Du kan snøre på deg løpeskoene å sjekke om hjertefrekvensen øker. Og hvis den ikke øker, så blir ikke hjertet belastet. Og hvis hjertet ikke blir belastet så har det ingen grunn til å vokse seg sterkere i etterkant — for å tåle mer belastning.\n\nDetaljene i en god forklaring henger så tett sammen at hvis én av påstandene viser seg å ikke stemme så ødelegges hele forklaringen.\n\nDårlig forklaring: Trening forbedrer hjerte- og karsystemets helse fordi det får deg til å føle deg bra, og å føle seg bra er alltid sunt.\n\nEn god forklaring må være testbar, men det betyr ikke at en forklaring er god bare fordi den kan testes. Vi tester ikke forklaringer bare fordi vi kan; vi gjør det fordi de allerede kvalifiserer som gode forklaringer — fordi de er vanskelig å variere. Og denne er ikke det.\n\nFor denne kan vi variere til hva enn vi måtte ønske: "Trening forbedrer hjerte- og karsystemets helse fordi det får deg til å føle deg X, og å føle seg X er alltid sunt."\n\nNår et bredt utvalg av alternative forklaringer kan redegjøre for samme fenomen er det irrasjonelt å foretrekke én av dem fremfor de andre. Vi lever i en verden hvor det er tusen måter å ta feil for hver måte å ha rett. Hvor det er mye vanskeligere å bygge opp enn å rive ned. Dette fremhever viktigheten ved å kunne skille mellom rett og galt; å kunne skille mellom en god og dårlig forklaring.\n\n3. Forutsigbarhet\n\nEn god forklaring gir forutsigbarhetskraft. Den gjør det mulig for oss å lage nøyaktige forutsigelser om fremtidige hendelser basert på dens innhold.\n\nSom eksempel, la oss igjen vurdere den gode forklaringen om hvorfor planter vokser mot solen: Det er fordi lys er en nødvendig del av fotosyntese og sørger for at planten får energien som trengs for vekst.\n\nFor denne kan vi variere til hva enn vi måtte ønske: "Trening forbedrer hjerte- og karsystemets helse fordi det får deg til å føle deg X, og å føle seg X er alltid sunt."\n\nDenne forklaringen gir deg makt over fremtiden. Kanskje du har en plante som er i ferd med å vokse seg for stor. Du vet at lys er en vital del av vekstprosessen. Du bestemmer deg for å la planten stå i skyggen.\n\nGode forklaringer gir oss innsikt i fremtidige hendelser uten å eksplisitt nevne dem.\n\nEkstra — ikke avgjørende, men viktig å forstå.\n\n4. Sparsomellig\n\nGode forklaringer skal være så enkle som mulig uten å ofre forklaringskraft. Dette prinsippet, også kjent som Occams barberblad, antyder at når det er flere forklaringer tilgjengelig for et fenomen, er den enkleste ofte det beste. Dette skyldes at enklere forklaringer inneholder færre antagelser, og for hver antagelse øker feilmarginen.\n\nEksempel: Hvorfor skjelver vi når vi fryser?\n\nGod Forklaring: Når vi fryser skjelver vi fordi kroppen vår prøver å generere varme for å opprettholde sin normale temperatur.\n\nUnødvendig Komplisert Forklaring: Når vi fryser, skjelver vi fordi kroppen vår prøver å generere varme for å opprettholde sin normale temperatur, og denne skjelvingen er også en måte for kroppen vår å kommunisere til andre rundt oss at vi er kalde.\n\nTilføyelsen av kommunikasjon og signalisering til andre er unødvendig for å forklare hvorfor vi skjelver når vi fryser. Det tilfører kompleksitet og flere antagelser uten å bidra til den sentrale forklaringen om kroppens forsøk på å generere varme. Her antyder Occams barberblad at den enklere forklaringen er å foretrekke.\n\n5. Korrespondanse\n\nNår vi søker en forklaring, er det fordi vi har et problem: en konflikt mellom idéer. Vi kan se at noe foregår, men vi vet ikke hvorfor, så vi søker et svar. Men vi har ikke lyst på hvilket som helst svar, vi har lyst på en forklaring som samsvarer med spørsmålet vi stiller. Når vi lurer på hva det er til middag, så vil vi ikke at svaret skal være molekyler.\n\nHer er to eksempler på forklaringer med god og dårlig korrespondanse.\n\nEksempel 1: Hvordan skaffer man venner?\n\nGod korrespondanse: For å få venner kan du finne felles interesser, være åpen og imøtekommende, lytte aktivt til andre, og vise vennlighet og empati.\n\nDette svaret fokuserer på spesifikke handlinger som kan føre til vennskap.\n\nDårlig korrespondanse: For å finne venner samhandler du med andre mennesker ved å utveksle ord og ikke-verbale signaler. Du tolker ansiktsuttrykk og kroppsspråk, og reagerer på følelser og ideer.\n\nSelvom svaret er sant, så korresponderer det ikke med spørsmålet som blir stilt. Det fokuserer heller på de lave nivåene av menneskelig interaksjon.\n\nEksempel 2: Hvorfor gikk selskapets salg ned forrige kvartal?\n\nGod korrespondanse: Selskapets salg gikk ned forrige kvartal på grunn av økt konkurranse, redusert etterspørsel og mangel på effektive markedsføringsstrategier.\n\nDårlig korrespondanse: Selskapet presterte ikke bra, og markedsforholdene var ikke gunstige.\n\nDet er mulig å svare sant uten å forklare noe som helst. Det kalles politikk.\n\nSå der har du det. En god forklaring er vanskelig å variere (uten å ødelegge det den påstår å forklare). Den er testbar (kan granskes gjennom observasjoner i den virkelige verden). Og den gir forutsigbarhet (sier noe om fremtiden uten å nevne fremtiden). En god forklaring burde være sparsommelig (så enkel som mulig uten å ofre forklaringskraft). Og ha korrespondanse (møte spørsmålet på samme nivå).',
        },
        {
          role: "user",
          content:
            'Using the information in my blog post about good and bad explanations evaluate this explanation as good or bad. The first word of your response should be a binary "Good." or "Bad." based on your evaluation of the explanation. After that proceed with explaining why you have deemed it as either good or bad.\n\nFirst I want you to think step by step, using English. Then using your English reasoning you answer in Norwegian. \n\nIf the explanation is "Bad." provide an improved explanation that fits the criteria. If the explanation is "Good." but can be improved, give the improved explanation. Omit the improvement if you are not absolutely sure it really is an improved explanation\n\nThe format:\nBinary evaluation, I.e "Good." or "Bad."\n\nEnglish Reasoning: [English Answer]\n\nNorwegian Reasoning: [Norwegian Answer]\n\nEnglish Improved: [Improved Explanation] or "N/A."\n\nNorwegian Improved: [Improved Explanation in Norwegian] or "N/A."\n\nIt is crucial to follow the format and to use the exact keywords e.g "English Improved:".\n\nRemember, principle 4 and 5 does not have to be fulfilled for the explanation to qualify as good, but it does help if they are fulfilled.' +
            explanation,
        },
        {
          role: "assistant",
          content: "Let's think step by step.",
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });
  } catch (e) {
    console.log(process.env.REACT_APP_OPEN_AI_API_KEY);
    console.log(e);
    throw new Error("Error in GPT-3 request");
  }

  const message = response.data.choices[0].message?.content;

  if (message === undefined) {
    throw new Error("No message returned from GPT-3");
  }

  const indexOfNR = message.indexOf("Norwegian Reasoning:");

  const indexOfEI = message.indexOf("English Improved:");

  const indexOfNI = message.indexOf("Norwegian Improved:");

  const reason = message.substring(indexOfNR + 21, indexOfEI - 2);

  let reasonImproved;

  reasonImproved = message.substring(indexOfNI + 20);

  if (reasonImproved?.includes("N/A.")) {
    reasonImproved = undefined;
  }

  const e: ExplanationEval = {
    good: message.substring(0, 5) === "Good.",
    reason: reason,
    reasonImproved: reasonImproved,
  };

  return e;
};

// You are ChatGPT, a large language model trained by OpenAI.
// You answer as concisely as possible for each response (e.g. don't be verbose).
// If you are generating a list, do not have too many items.
// Keep the number of items short. Knowledge cutoff: 2021-09. Current date: 2023-01-31.
