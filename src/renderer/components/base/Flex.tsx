import { Component, JSX } from 'solid-js'

export const Row = (
  props: Component<{
    gap: number
  }>
) => {
  return (
    <div
      {...combindProps(props, 'flex', {
        ...propsToStyle(props.gap, 'gap', (it) => `${toFloat(it) / 4}rem`),
      })}
    ></div>
  )
}

export const Column = (
  props: Omit<DivProp, 'style'> & {
    gap?: number | string
    style?: JSX.CSSProperties
  }
) => {
  return (
    <div
      {...{
        ...combindProps(props, 'flex flex-col', {
          ...propsToStyle(props.gap, 'gap', (it) => `${toFloat(it) / 4}rem`),
        }),
      }}
    ></div>
  )
}
