export const levels = [
  { id: 'A1', label: 'Fillestar', color: '#F3B340', title: 'Përshëndetjet', description: 'Përshëndetje dhe prezantime të thjeshta.', words: [['Guten Morgen', 'Mirëmëngjes'], ['Danke', 'Faleminderit'], ['Wie heißt du?', 'Si quhesh?']], question: 'Si thuhet “Faleminderit”?', options: ['Bitte', 'Danke', 'Hallo'], correct: 'Danke' },
  { id: 'A2', label: 'Bazë', color: '#E8784D', title: 'Në qytet', description: 'Pyetje për drejtimin dhe vendndodhjen.', words: [['Wo ist der Bahnhof?', 'Ku është stacioni?'], ['geradeaus', 'drejt'], ['links', 'majtas']], question: 'Çfarë do të thotë “links”?', options: ['djathtas', 'majtas', 'drejt'], correct: 'majtas' },
  { id: 'B1', label: 'Mesatar', color: '#588C7E', title: 'Planet e së ardhmes', description: 'Shpreh dëshirat dhe planet.', words: [['Ich möchte reisen.', 'Do të doja të udhëtoja.'], ['nächste Woche', 'javën tjetër'], ['weil', 'sepse']], question: 'Çfarë do të thotë “nächste Woche”?', options: ['javën tjetër', 'dje', 'vitin tjetër'], correct: 'javën tjetër' },
  { id: 'B2', label: 'Mesatar+', color: '#4C6FAE', title: 'Shprehja e mendimit', description: 'Argumento një qëndrim me qartësi.', words: [['Meiner Meinung nach', 'Sipas mendimit tim'], ['einerseits', 'nga njëra anë'], ['andererseits', 'nga ana tjetër']], question: 'Si thuhet “Sipas mendimit tim”?', options: ['Meiner Meinung nach', 'Trotzdem', 'Außerdem'], correct: 'Meiner Meinung nach' },
  { id: 'C1', label: 'Avancuar', color: '#8066A8', title: 'Diskutim formal', description: 'Përdor shprehje të sakta në diskutim.', words: [['in Bezug auf', 'në lidhje me'], ['darüber hinaus', 'për më tepër'], ['die Voraussetzung', 'parakushti']], question: 'Çfarë do të thotë “die Voraussetzung”?', options: ['përfundimi', 'parakushti', 'kundërshtimi'], correct: 'parakushti' },
  { id: 'C2', label: 'Mjeshtëri', color: '#C05D7A', title: 'Nuancat e gjuhës', description: 'Dallo kuptimet në kontekste të ndërlikuara.', words: [['nichtsdestotrotz', 'megjithatë'], ['die Feinheit', 'nuanca'], ['sich erschließen', 'të bëhet i kuptueshëm']], question: 'Çfarë do të thotë “nichtsdestotrotz”?', options: ['rrjedhimisht', 'megjithatë', 'ndërkohë'], correct: 'megjithatë' },
] as const;

export type Level = typeof levels[number];
export const examsProductId = 'all_exams';
export const levelProductId = (level: Level) => `level_${level.id.toLowerCase()}`;

// Display prices only. The purchase screen must use localized Play Console prices.
export const prices = { level: '30 €', exams: '20 €' } as const;
