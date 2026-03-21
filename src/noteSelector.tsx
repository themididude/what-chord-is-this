import { NOTES } from './chords'
import type { Note } from './chords'

interface Props {
  selected: Note[]
  onToggle: (note: Note) => void
}

export function NoteSelector({ selected, onToggle }: Props) {
  return (
    <div className="note-selector">
      {NOTES.map(note => (
        <button
          key={note}
          className={selected.includes(note) ? 'note-btn active' : 'note-btn'}
          onClick={() => onToggle(note)}
        >
          {note}
        </button>
      ))}
    </div>
  )
}