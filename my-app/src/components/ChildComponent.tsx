import React, { FC } from 'react'

let someList: number[] = [1, 2, 3, 4, 5]

type Props = {
  value: string | number
}
export const ChildComponent: FC<Props> = (props: Props) => {
  return (
    <>
      <div>Функциональный компонент</div>
      <span> Вот данные из родительского компонента: {props.value}</span>
      {someList.map((item) => (
        <div 
          key={item} 
          style={{
            display: 'block',
            margin: '50px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            fontSize: '20px'
          }}
        >
          {item}
        </div>
      ))}
    </>
  )
}
