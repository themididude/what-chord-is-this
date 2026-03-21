import { useState } from "react";
import type { Note } from "./chords";
import { identifyChord } from "./chords";
import { NoteSelector } from "./noteSelector";
import { GuitarNeck } from "./guitarNeck";
import { makeEmptyStrings, getNotesFromStrings } from "./utils/guitarUtils";
import type { GuitarString } from "./utils/guitarUtils";
import { DEFAULT_TUNING } from "./tunings";
import "./App.css";
import { PianoKeys } from "./PianoKeys";

type Mode = "notes" | "guitar" | "piano";

function App() {
  const [mode, setMode] = useState<Mode>("notes");
  const [selected, setSelected] = useState<Note[]>([]);
  const [pianoSelected, setPianoSelected] = useState<string[]>([]);
  const [strings, setStrings] = useState<GuitarString[]>(makeEmptyStrings());
  const [startFret, setStartFret] = useState(1);

  function handleToggle(note: Note) {
    setSelected((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  }

  function handlePianoToggle(note: string) {
    setPianoSelected((prev) =>
      prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]
    );
  }

  const activeNotes: Note[] =
    mode === "notes"
      ? selected
      : mode === "piano"
      ? [...new Set(pianoSelected.map((n) => n.replace(/\d/g, "") as Note))]
      : getNotesFromStrings(strings, DEFAULT_TUNING, startFret);

  const chord = identifyChord(activeNotes);
  
  console.log('notas activas:', activeNotes)

  return (
    <div className="app">
      <h1>what chord is this?</h1>

      <div className="mode-selector">
        <button
          className={mode === "notes" ? "mode-btn active" : "mode-btn"}
          onClick={() => setMode("notes")}
        >
          Note Mode
        </button>
        <button
          className={mode === "guitar" ? "mode-btn active" : "mode-btn"}
          onClick={() => setMode("guitar")}
        >
          Guitar Mode
        </button>
        <button
          className={mode === "piano" ? "mode-btn active" : "mode-btn"}
          onClick={() => setMode("piano")}
        >
          Piano
        </button>
      </div>

      <div className="chord-display">
        {activeNotes.length === 0 && <span className="hint">Select notes</span>}
        {activeNotes.length > 0 && !chord && <span className="unknown">?</span>}
        {chord && (
          <>
            <span className="chord-name">{chord.name}</span>
            <span className="chord-notes">{chord.notes.join(" · ")}</span>
          </>
        )}
      </div>

      {mode === "notes" && (
        <>
          <NoteSelector selected={selected} onToggle={handleToggle} />
          {selected.length > 0 && (
            <button className="clear-btn" onClick={() => setSelected([])}>
              clear
            </button>
          )}
        </>
      )}

      {mode === "guitar" && (
        <>
          <GuitarNeck
            strings={strings}
            tuning={DEFAULT_TUNING}
            startFret={startFret}
            onStringsChange={setStrings}
            onStartFretChange={setStartFret}
          />
          <button
            className="clear-btn"
            onClick={() => setStrings(makeEmptyStrings())}
          >
            clear
          </button>
        </>
      )}

      {mode === "piano" && (
        <>
          <PianoKeys selected={pianoSelected} onToggle={handlePianoToggle} />
          {pianoSelected.length > 0 && (
            <button className="clear-btn" onClick={() => setPianoSelected([])}>
              clear
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;