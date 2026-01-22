export type Choice = {
  label: string
  target: string
}

export type Node = {
  id: string
  src: string
  title?: string
  poster?: string
  captions?: string
  choices: Choice[]
}

export type Graph = {
  start: string
  nodes: Record<string, Node>
}
