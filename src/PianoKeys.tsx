
interface Props {
  selected: string[]
  onToggle: (note: string) => void
}

const WHITE_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const BLACK_NOTES: Record<string, string> = {
  'C': 'C#', 'D': 'D#', 'F': 'F#', 'G': 'G#', 'A': 'A#'
}

interface OctaveProps {
  octave: number
  selected: string[]
  onToggle: (note: string) => void
}

function Octave({ octave, selected, onToggle }: OctaveProps) {
  const isSelected = (note: string) => selected.includes(`${note}${octave}`)

  return (
    <div className="octave">
      {WHITE_NOTES.map(note => (
        <div key={note} className="white-key-wrap">
          <button
            className={`white-key ${isSelected(note) ? 'active' : ''}`}
            onClick={() => onToggle(`${note}${octave}`)}
          >
            <span className="key-label">{note}</span>
          </button>
          {BLACK_NOTES[note] && (
            <button
              className={`black-key ${isSelected(BLACK_NOTES[note]) ? 'active' : ''}`}
              onClick={() => onToggle(`${BLACK_NOTES[note]}${octave}`)}
            >
              <span className="key-label-black">{BLACK_NOTES[note]}</span>
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export function PianoKeys({ selected, onToggle }: Props) {
  return (
    <div className="piano-wrap">
      <Octave octave={4} selected={selected} onToggle={onToggle} />
      <Octave octave={5} selected={selected} onToggle={onToggle} />
    </div>
  )
}