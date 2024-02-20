import React, { FC } from 'react'

type Props = {
  count: number
}
export const ChildComponent:FC<any> = (props: Props) => {
  return (
    <>
      <div>ChildComponent</div>
      <span> Вот данные из родительского компонента: {props.count}</span>
    </>
  )
}
