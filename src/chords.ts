export const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] 
export type Note = typeof NOTES[number]

export interface ChordType {
  suffix: string
  intervals: number[]
}

export const CHORD_TYPES: ChordType[] = [               ///escencialmente asignando los numeros con respecto de la root a un suffix
  // basicos
  { suffix: '',         intervals: [0, 4, 7] },
  { suffix: 'm',        intervals: [0, 3, 7] },
  { suffix: '5',        intervals: [0, 7] },
  { suffix: 'dim',      intervals: [0, 3, 6] },
  { suffix: 'aug',      intervals: [0, 4, 8] },
  { suffix: 'sus2',     intervals: [0, 2, 7] },
  { suffix: 'sus4',     intervals: [0, 5, 7] },
  { suffix: 'sus24',    intervals: [0, 2, 5, 7] },
  { suffix: 'mb5',      intervals: [0, 3, 6] },

  // septimas
  { suffix: 'maj7',     intervals: [0, 4, 7, 11] },
  { suffix: '7',        intervals: [0, 4, 7, 10] },
  { suffix: 'm7',       intervals: [0, 3, 7, 10] },
  { suffix: 'mMaj7',    intervals: [0, 3, 7, 11] },
  { suffix: 'dim7',     intervals: [0, 3, 6, 9] },
  { suffix: 'm7b5',     intervals: [0, 3, 6, 10] },
  { suffix: 'aug7',     intervals: [0, 4, 8, 10] },
  { suffix: 'augMaj7',  intervals: [0, 4, 8, 11] },
  { suffix: '7sus4',    intervals: [0, 5, 7, 10] },
  { suffix: '7sus2',    intervals: [0, 2, 7, 10] },
  { suffix: 'maj7b5',   intervals: [0, 4, 6, 11] },
  { suffix: 'maj7#5',   intervals: [0, 4, 8, 11] },

  // Sextas
  { suffix: '6',        intervals: [0, 4, 7, 9] },
  { suffix: 'm6',       intervals: [0, 3, 7, 9] },
  { suffix: '6/9',      intervals: [0, 2, 4, 7, 9] },
  { suffix: 'm6/9',     intervals: [0, 2, 3, 7, 9] },

  // novenas
  { suffix: 'add9',     intervals: [0, 2, 4, 7] },
  { suffix: 'madd9',    intervals: [0, 2, 3, 7] },
  { suffix: '9',        intervals: [0, 2, 4, 7, 10] },
  { suffix: 'maj9',     intervals: [0, 2, 4, 7, 11] },
  { suffix: 'm9',       intervals: [0, 2, 3, 7, 10] },
  { suffix: 'mMaj9',    intervals: [0, 2, 3, 7, 11] },
  { suffix: '9b5',      intervals: [0, 2, 4, 6, 10] },
  { suffix: '7b9',      intervals: [0, 1, 4, 7, 10] },
  { suffix: '7#9',      intervals: [0, 3, 4, 7, 10] },
  { suffix: 'maj7#9',   intervals: [0, 3, 4, 7, 11] },
  { suffix: '9sus4',    intervals: [0, 2, 5, 7, 10] },
  { suffix: 'add2',     intervals: [0, 2, 4, 7] },
  { suffix: 'madd2',    intervals: [0, 2, 3, 7] },

  // oncenas
  { suffix: '11',       intervals: [0, 2, 4, 5, 7, 10] },
  { suffix: 'maj11',    intervals: [0, 2, 4, 5, 7, 11] },
  { suffix: 'm11',      intervals: [0, 2, 3, 5, 7, 10] },
  { suffix: '9#11',     intervals: [0, 2, 4, 6, 7, 10] },
  { suffix: 'maj9#11',  intervals: [0, 2, 4, 6, 7, 11] },
  { suffix: '7#11',     intervals: [0, 4, 6, 7, 10] },
  { suffix: 'm9#11',    intervals: [0, 2, 3, 6, 7, 10] },
  { suffix: '11b9',     intervals: [0, 1, 4, 5, 7, 10] },

  // trecenas
  { suffix: '7(13)',    intervals: [0, 4, 7, 9, 10] },
  { suffix: 'm7(13)',   intervals: [0, 3, 7, 9, 10] },
  { suffix: '13',       intervals: [0, 2, 4, 5, 7, 9, 10] },
  { suffix: 'maj13',    intervals: [0, 2, 4, 5, 7, 9, 11] },
  { suffix: 'm13',      intervals: [0, 2, 3, 5, 7, 9, 10] },
  { suffix: '13b9',     intervals: [0, 1, 4, 7, 9, 10] },
  { suffix: '13#9',     intervals: [0, 3, 4, 7, 9, 10] },
  { suffix: '13#11',    intervals: [0, 2, 4, 6, 7, 9, 10] },
  { suffix: '13sus4',   intervals: [0, 2, 5, 7, 9, 10] },
  { suffix: 'maj13#11', intervals: [0, 2, 4, 6, 7, 9, 11] },

  // alteraciones y especiales
  { suffix: '7alt',     intervals: [0, 1, 3, 4, 6, 8, 10] },
  { suffix: '7b5',      intervals: [0, 4, 6, 10] },
  { suffix: '7#5',      intervals: [0, 4, 8, 10] },
  { suffix: '7b5b9',    intervals: [0, 1, 4, 6, 10] },
  { suffix: '7b5#9',    intervals: [0, 3, 4, 6, 10] },
  { suffix: '7#5b9',    intervals: [0, 1, 4, 8, 10] },
  { suffix: '7#5#9',    intervals: [0, 3, 4, 8, 10] },
  { suffix: '7b13',     intervals: [0, 4, 7, 8, 10] },
  { suffix: '7b9#11',   intervals: [0, 1, 4, 6, 7, 10] },
  { suffix: '7#9#11',   intervals: [0, 3, 4, 6, 7, 10] },
  { suffix: '13b5b9',   intervals: [0, 1, 4, 6, 9, 10] },
  { suffix: 'quartal',  intervals: [0, 5, 10, 15, 20] }
]

export interface chordResult{
    ///ejemplos
    name: string      /// Cmaj9
    root: Note       /// C
    suffix: string  //maj9
    notes: Note[]   //["C", "D", "E", "G", "B"]
}

export function identifyChord(selectedNotes: Note[]): chordResult | null {
  if (selectedNotes.length < 2) return null

  const semitones = selectedNotes.map(n => NOTES.indexOf(n))

  const sorted = [...CHORD_TYPES].sort(
    (a, b) => b.intervals.length - a.intervals.length
  )

  let bestMatch: chordResult | null = null
  let bestScore = 0

  for (const root of semitones) {
    for (const chordType of sorted) {
      const required = chordType.intervals.map(i => (root + i) % 12)
      const matched = semitones.filter(s => required.includes(s)).length
      const extra = semitones.filter(s => !required.includes(s)).length
      const coverage = matched / required.length
      const score = coverage - extra * 0.5

      if (matched >= 2 && coverage >= 0.6 && extra === 0 && score > bestScore) {
        bestScore = score
        bestMatch = {
          name: NOTES[root] + chordType.suffix,
          root: NOTES[root],
          suffix: chordType.suffix,
          notes: required.map(r => NOTES[r]),
        }
      }
    }
  }

  return bestMatch
}