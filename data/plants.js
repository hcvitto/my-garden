import shop from './const';

const plants = [
  {
    id: '1',
    slug: 'orazio',
    type: 'Ficus benjamin',
    name: 'Orazio',
    origin: 'Originaria delle zone tropicali dell’Asia',
    images: { main: 'ficus.jpg', small: '' },
    arrrivalData: {
      boughtFrom: shop.imbriani,
      date: '25 dicembre 2018',
      height: '',
      image: '',
    },
    repotted: '20 marzo 2021',
    cares: {
      soil: 'Necessita di terreni acidi, ma riesce a sopravvivere anche in zone con terriccio neutro',
      water: 'Necessita di umidità; soprattutto durante l’estate, abbondare con le innaffiature (anche due volte a settimana) e la vaporizzazione sulle foglie su cui sono presenti degli stomi che si possono aprire per assorbire i liquidi.',
      light: 'Posizionarlo in zone luminose al riparo dai raggi diretti del sole e lontano da correnti d\'aria. Temperatura ideale: tra i 18°e i 22°',
      fertilization: 'Una volta al mese in primavera ed estate ed una volta ogni due mesi in autunno ed inverno con concime liquido in soluzione bilanciata (azoto, fosforo e potassio in parti uguali)',
      repotting: 'Il rinvaso si può fare in qualsiasi periodo dell\' anno circa ogni due-tre anni',
      pruning: 'Verso fine estate / inizio autunno, non nei periodi di crescita e gemmazione. Individuando e potando solo i rami morti e spezzati, senza foglie. Mai potare rami vivi, danneggereste i tessuti viventi della pianta.'
    },
    curiosity: 'La pianta produce un liquido irritante per la pelle e per gli occhi.'
  },
  {
    id: '2',
    slug: 'bombolo',
    type: 'Aloe vera',
    name: 'Bombolo',
    origin: 'Originaria dell’America del Sud, in particolare della Repubblica Dominicana',
    images: { main: 'aloe-vera.jpg', small: '' },
    arrrivalData: {
      boughtFrom: shop.claudia,
      date: '6 giugno 2020',
      height: '',
      image: '',
    },
    repotted: '20 marzo 2021',
    cares: {
      soil: 'Predilige i climi caldi e secchi e cresce spontanea su terreni aridi e calcarei, leggermente acidi e ben drenati.',
      water: 'Richiede poca acqua, sopratutto durante l\'inverno. Durante l\'inverno sarà sufficiente innaffiare una volta al mese nel periodo primaverile e autunnale, mentre in estate sarà bene fornire l’acqua una volta a settimana.',
      light: 'Richiede molta luce ma non sole diretto. Non tollera temperature troppo rigide',
      fertilization: 'E\' sufficiente fornire del fertilizzante una volta l’anno, poco prima dell’arrivo della primavera',
      repotting: 'Tra marzo e aprile'
    },
    curiosity: 'Perfetta come antinfiammatorio, cicatrizzante e coagulante naturale; è conosciuta da millenni per le sue proprietà curative'
  },
  {
    id: '3',
    slug: 'potty',
    type: 'Pothos',
    name: 'Potty',
    origin: 'Originaria delle isole del Pacifico',
    images: { main: '', small: '' },
    arrrivalData: {
      boughtFrom: shop.imbriani,
      date: '25 dicembre 2018',
      height: '',
      image: '',
    },
    repotted: '20 marzo 2021',
    cares: {
      soil: 'Terriccio universale',
      water: 'Nel periodo primaverile-estivo la pianta del va annaffiata abbondantemente avendo però l\'accortezza di aspettare che il terreno sia asciutto prima della successiva irrigazione. Nel periodo autunno/invernale si segue la stessa regola. E\' buona norma procurare umidità alla pianta con frequenti nebulizzazione alla chioma con acqua a temperatura ambiente (tre-quattro volte la settimana nel periodo estivo) e sempre di mattina, per evitare che le gocce d\'acqua, concentrando la luce del sole, provochino delle scottature. Nel periodo invernale vanno ridotte in proporzione alla temperatura.',
      light: 'Posizioni abbastanza luminose, non colpite dai raggi diretti del sole',
      fertilization: 'E\' preferibile concimare il pothos una volta al mese con concimi liquidi diluiti nell\'acqua di annaffiatura.',
      repotting: 'Il pothos si rinvasa ogni anno a marzo - aprile senza però eccedere con le dimensioni del vaso perchè in questo modo la pianta favorirebbe lo sviluppo dell\'apparato radicale a scapito di quello aereo. In genere si procede al rinvaso quando la terra inizia a essere insufficiente in relazione allo sviluppo delle radici vale a dire quando quest\'ultime iniziano a fuoriuscire dal vaso.',
      pruning: 'Di solito la pianta non si pota ma si può attuare la cimatura degli apici vegetativi nei mesi di maggio e giugno nel caso si desideri avere uno sviluppo compatto e cespuglioso.'
    },
    curiosity: ''
  },
  {
    id: '4',
    slug: 'mestolina',
    type: 'Fittonia',
    name: 'Mestolina',
    origin: 'Originaria del Brasile e del Perù',
    images: { main: 'fittonia.jpg', small: '' },
    arrrivalData: {
      boughtFrom: shop.viridea,
      date: 'settembre 2020',
      height: '',
      image: '',
    },
    repotted: '',
    cares: {
      soil: 'Fertile a base di torba. Oppure una miscela formata da una parte di terra di foglie e due parti di torba.',
      water: 'Due tre volte la settimana durante l’estate, annaffiature che durante l’ inverno si possono ridurre ad una sola volta a settimana. Si deve evitare di lasciare asciugare troppo il terreno tra un’annaffiatura e l’altra. L’umidità che deve essere sempre elevatissima; è opportuno coltivare la pianta su un sottovaso profondo riempito di argilla espansa da mantenere sempre umida. Va vaporizzata spesso con acqua non calcarea, almeno a giorni alterni, per tutto l’arco dell’anno, per fornirle la necessaria umidità.',
      light: 'Luce solare filtrata lontano da fonti di calore e riparata da correnti d’aria fredda',
      fertilization: 'Durante il periodo caldo (da maggio a settembre) va concimata con un concime liquido ogni 20 giorni. La concimazione si effettua con un prodotto per piante verdi direttamente nell’acqua d’annaffiatura.',
      repotting: 'Si rinvasa  in primavera, ogni 2-3 anni utilizzando dei contenitori più ampi e non troppo alti con una parte di terra di foglie e due parti di torba, o con una parte di terriccio universale e una parte di sabbia di fiume.',
      pruning: 'Produce radici all’altezza dei nodi dei fusti quindi la moltiplicazione è molto semplice: durante la primavera si taglia la parte  di fusto che contiene le radici e si pianta in una composta come indicato per le piante adulte. Si tiene la piantina in una posizione non troppo illuminata, ad una temperatura intorno ai 21°C e mantenendo la composta sempre umida. NAsceranno le nuove foglie, che una volta irrobustite possono essere trattate come le piante adulte'
    },
    curiosity: 'La Fittonia è una pianta che invecchia velocemente. E’ quindi bene provvedere a moltiplicarla regolarmente. La moltiplicazione della Fittonia si può fare per talea o per divisione del fusto.'
  },
  {
    id: '5',
    slug: 'io-sono-antemo',
    type: 'Mesembriantemo',
    name: 'Io sono Antemo',
    origin: 'Originaria dell\'Africa meridionale',
    images: { main: '', small: '' },
    arrrivalData: {
      boughtFrom: shop.segrate,
      date: '4 aprile 2021',
      height: '',
      image: '',
    },
    repotted: '4 aprile 2021',
    cares: {
      soil: 'Misto di tipo universale e sabbia, molto ben drenato',
      water: 'D\'inverno se sono all\'aperto si può evitare di bagnarle, alla ripresa vegetativa annaffiare il mesembriantemo solo quando il terreno è ben asciutto.',
      light: 'Pieno sole, meglio se riparata dal vento. Teme il freddo ed ama il caldo, per cui d\'inverno può essere opportuno spostare i vasi al coperto, purché in posizione luminosa.',
      fertilization: 'Non necessaria. Se coltivati in vaso (e non rinvasati) può essere opportuno somministrare alla ripresa vegetativa una modesta quantità di concime granulare a lenta cessione.',
      repotting: 'Il rinvaso non è necessario nelle specie annuali, mentre può essere consigliabile per le piante di qualche anno molto cresciute, scegliendo sempre contenitori con poca terra',
      pruning: 'Vanno recisi solo i fusti secchi e per favorire la fioritura vanno eliminati i fiori appassiti cimando gli apici con forbici ben affilate e disinfettate.'
    },
    curiosity: ''
  },
  {
    id: '6',
    slug: 'cica-cica',
    type: 'Cycas',
    name: 'Cica-cica',
    origin: '',
    images: { main: 'https://i1.wp.com/beautifulexotic.it/wp-content/uploads/2020/09/fittonia-1756174_1920.jpg?resize=840%2C420&ssl=1', small: '' },
    arrrivalData: {
      boughtFrom: '',
      date: '2015',
      height: '',
      image: '',
    },
    repotted: 'marzo 2021',
    cares: {
      soil: 'Fertile e ben drenante perché queste piante non tollerano assolutamente i ristagni idrici. (terriccio fertile, torba, sabbia o perlite)',
      water: 'Annaffiature bisettimanali, solo quando il terreno si asciuga',
      light: 'Possono essere esposte sia al sole diretto che in zone non troppo soleggiate, l’importante è che ci sia la luce e che sia piuttosto intensa',
      fertilization: 'In primavea, utilizzando un concime organico a lenta cessione così da consentire alla pianta un’acquisizione graduale',
      repotting: 'Si effettua ogni 3-4 anni quando le radici hanno oramai occupato tutto lo spazio a loro disposizione, e lo si fain primavera o in estate. E\' opportuno ricordarsi  di non utilizzare vasi di grandi dimensioni ma solo appena più grandi del precedente',
      pruning: 'Si eliminano le foglie più secche che si trovano in basso, cercando di rimuoverle il più possibile vicino al tronco.'
    },
    curiosity: 'Presentano un elevato rischio di tossicità.'
  },
  {
    id: '7',
    slug: 'ciucca',
    type: 'Yucca',
    name: 'ciucca',
    origin: 'Ambienti caldi e secchi dell’America Settentrionale e Centrale',
    images: { main: '', small: '' },
    arrrivalData: {
      boughtFrom: shop.claudia,
      date: 'primaversa 2020',
      height: '',
      image: '',
    },
    repotted: 'marzo 2021',
    cares: {
      soil: 'Terriccio universale bilanciato; per migliorare il drenaggio aggiungiamo al terreno una buona quantità di sabbia o di lapillo.',
      water: 'Durante la stagione vegetativa, da marzo ad ottobre, annaffiare abbondantemente, attendendo sempre che il terreno asciughi bene tra un\'annaffiatura e l\'altra. Quando le temperature scendono diradare le annaffiature; in inverno si annaffia sporadicamente.',
      light: 'Prediligono temperature abbastanza fresche, quindi in estate è consigliabile posizionarle in luogo semiobreggiato, e ben areato; durante i mesi invernali ricordiamo ri vaporizzare frequentemente la chioma con acqua demineralizzata.',
      fertilization: 'Nel periodo vegetativo, da aprile a ottobre, fornire del concime specifico per piante verdi, ogni 15-20 giorni, mescolato all\'acqua delle annaffiature',
      repotting: 'Ogni 1-2 anni in Marzo-aprile, scegliendo un contenitore di poco più grande rispetto al precedente (+2/4 cm di diametro).',
      pruning: 'Quando la foglia è completamente secca si può strapparla alla base con un colpo secco.'
    },
    curiosity: 'Nelle coste del Caribe (Caraibi- Isole Vergini), si produce un pane sottile e croccante  chiamato cazabe'
  },
  {
    id: '8',
    slug: '',
    type: 'Sarracenia',
  },
  {
    id: '9',
    slug: '',
    type: 'Dionea',
  },
  {
    id: '10',
    slug: '',
    type: 'Lavanda',
  },
  {
    id: '11',
    slug: '',
    type: 'Zucca',
  },
  {
    id: '12',
    slug: '',
    type: 'Menta piperita',
  },
  {
    id: '13',
    slug: '',
    type: 'Salvia',
  },
  {
    id: '14',
    slug: '',
    type: 'Chamadorea elegans',
  },
  {
    id: '15',
    slug: '',
    type: 'Aglaonema',
  },
  {
    id: '16',
    slug: '',
    type: 'Basilico',
  },
  {
    id: '18',
    slug: '',
    type: 'Calathea',
  },
  {
    id: '19',
    slug: '',
    type: 'Anthurium',
  },
  {
    id: '20',
    slug: '',
    type: 'Sansevieria',
  },
];

export default plants;

// {
//   id: '',
//   slug: '',
//   type: '',
//   name: '',
//   origin: '',
//   images: { main: '', small: '' },
//   arrrivalData: {
//     boughtFrom: shop[0],
//     date: '',
//     height: '',
//     image: '',
//   },
//   repotted: '',
//   cares: {
//     soil: '',
//     water: '',
//     light: '',
//     fertilization: '',
//     repotting: '',
//     pruning: ''
//   },
//   curiosity: ''
// },

