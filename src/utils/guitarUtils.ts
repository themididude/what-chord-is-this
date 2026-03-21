import { NOTES } from '../chords'
import type { Note } from '../chords'
import type { Tuning } from '../tunings'

export type StringState = 'muted' | 'open' | 'pressed'

export interface GuitarString {
  state: StringState
  fret: number | null  // solo relevante cuando state === 'pressed'
}

export function cycleStringState(current: StringState): StringState {
  if (current === 'muted') return 'open'
  if (current === 'open') return 'muted'
  return 'muted'
}

export function pressString(fret: number): GuitarString {
  return { state: 'pressed', fret }
}

export function unpressString(): GuitarString {
  return { state: 'muted', fret: null }
}

export function getNoteAtFret(openNote: string, fret: number): Note {
  const openIndex = NOTES.indexOf(openNote as Note)
  return NOTES[(openIndex + fret) % 12]
}

export function getNotesFromStrings(
  strings: GuitarString[],
  tuning: Tuning,
  startFret: number
): Note[] {
  const notes: Note[] = []
  strings.forEach((gs, i) => {
    if (gs.state === 'muted') return
    const openNote = tuning.notes[i]
    const fret = gs.state === 'open' ? 0 : (gs.fret! + startFret - 1)
    const note = getNoteAtFret(openNote, fret)
    if (!notes.includes(note)) notes.push(note)
  })
  return notes
}

export function makeEmptyStrings(): GuitarString[] {
  return Array.from({ length: 6 }, () => ({ state: 'muted', fret: null }))
}