export interface Tuning {
  name: string
  notes: string[]  // de cuerda 6 a cuerda 1 (grave a agudo)
}

export const TUNINGS: Tuning[] = [
  { name: 'Standard', notes: ['E', 'A', 'D', 'G', 'B', 'E'] },
]

export const DEFAULT_TUNING = TUNINGS[0]