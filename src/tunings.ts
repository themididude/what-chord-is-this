export interface Tuning {
  name: string
  notes: string[]  // de cuerda 6 a cuerda 1 (grave a agudo)
}

export const TUNINGS: Tuning[] = [
  { name: 'Standard', notes: ['E', 'B', 'G', 'D', 'A', 'E'] },
]

export const DEFAULT_TUNING = TUNINGS[0]