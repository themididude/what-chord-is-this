import type { GuitarString } from './utils/guitarUtils'
import { cycleStringState, pressString, unpressString } from './utils/guitarUtils'
import type { Tuning } from './tunings'

interface Props {
  strings: GuitarString[]
  tuning: Tuning
  startFret: number
  onStringsChange: (strings: GuitarString[]) => void
  onStartFretChange: (fret: number) => void
}

export function GuitarNeck({ strings, tuning, startFret, onStringsChange, onStartFretChange }: Props) {
  const FRETS = 5

  function handleIndicatorTap(stringIndex: number) {
    const current = strings[stringIndex]
    if (current.state === 'pressed') {
      const updated = [...strings]
      updated[stringIndex] = unpressString()
      onStringsChange(updated)
    } else {
      const updated = [...strings]
      updated[stringIndex] = { state: cycleStringState(current.state), fret: null }
      onStringsChange(updated)
    }
  }

  function handleFretTap(stringIndex: number, fret: number) {
    const current = strings[stringIndex]
    const updated = [...strings]
    if (current.state === 'pressed' && current.fret === fret) {
      updated[stringIndex] = unpressString()
    } else {
      updated[stringIndex] = pressString(fret)
    }
    onStringsChange(updated)
  }

  function getIndicatorLabel(stringIndex: number) {
    const state = strings[stringIndex].state
    if (state === 'muted') return '—'
    if (state === 'open') return 'O'
    return String(strings[stringIndex].fret! + startFret - 1)
  }

  return (
    <div className="guitar-neck">
      <div className="fret-position">
        <span>Select the starting fret</span>
        <div className="fret-controls">
          <button onClick={() => onStartFretChange(Math.max(1, startFret - 1))}>−</button>
          <span className="fret-number">{startFret}</span>
          <button onClick={() => onStartFretChange(Math.min(17, startFret + 1))}>+</button>
        </div>
      </div>

      <div className="neck-grid">
        {[...strings].reverse().map((gs, reversedIndex) => {
          const si = strings.length - 1 - reversedIndex
          return (
            <div key={si} className="string-row">
              <span className="open-note">{tuning.notes[si]}</span>

              <button
                className={`string-indicator ${gs.state}`}
                onClick={() => handleIndicatorTap(si)}
              >
                {getIndicatorLabel(si)}
              </button>

              <div className="frets">
                {Array.from({ length: FRETS }, (_, fi) => {
                  const fretNum = fi + 1
                  const isActive = gs.state === 'pressed' && gs.fret === fretNum
                  return (
                    <button
                      key={fi}
                      className={`fret-cell ${isActive ? 'active' : ''} ${gs.state === 'muted' ? 'disabled' : ''}`}
                      onClick={() => handleFretTap(si, fretNum)}
                    >
                      {isActive && <span className="fret-dot" />}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}