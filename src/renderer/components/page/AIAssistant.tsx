import { Component, createSignal } from 'solid-js'

interface Props {
  msg: string
}

const AIAssistant: Component<Props> = (props: Props) => {
  const [count, setCount] = createSignal(0)
  return (
    <div>
    </div>
  )
}

export default AIAssistant
