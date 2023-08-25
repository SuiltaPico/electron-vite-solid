import { Component, createSignal } from 'solid-js'

interface Props {
  msg: string
}

const HelloWorld: Component<Props> = (props: Props) => {
  const [count, setCount] = createSignal(0)
  return (
    <div>
      <h1>{props.msg}</h1>
      <div class="card">
        <button type="button" onClick={() => setCount(count() + 1)}>
          count is {count()}
        </button>
        <p>
          Edit
          <code>components/HelloWorld.tsx</code> to test HMR
        </p>
      </div>
    </div>
  )
}

export default HelloWorld
