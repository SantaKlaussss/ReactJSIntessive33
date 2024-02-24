import React, { Component } from 'react'
import { ChildComponent } from './ChildComponent';

type StateTypes = {
  value: string | number;
}

export class FirstComponent extends Component<{}, StateTypes> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }

  inputRef = React.createRef<HTMLInputElement>()

  increment = () => {
    if (typeof this.state.value === 'number' || this.state.value === '') {
      this.setState({
        value: Number(this.state.value) + 1
      })
    }
  }

  decrement = () => {
    if (typeof this.state.value === 'number' || this.state.value === '') {
      this.setState({
        value: Number(this.state.value) - 1
      })
    }
  }

  changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  focusInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    this.inputRef.current?.focus()
  }

  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          margin: '50px',
          backgroundColor: 'lightblue',
          padding: '30px',
        }}
      >
        Классовый Component
        <form action='' method=''>
          <label htmlFor='data'>Введите данные: </label>
          <input
            ref={this.inputRef}
            name='data'
            type='text'
            onChange={this.changeValue}
            value={this.state.value}
            style={{
              marginTop: '10px',
              display: 'inlineBlock',
            }}
          />
          <div>
            <button type='button' onClick={this.decrement}>Убавить 1</button>
            <button type='button' onClick={this.increment}>Прибавить 1</button>
            <input type='submit' onClick={this.handleSubmit} disabled={this.state.value === 'реакт'} />
            <button type='button' onClick={this.focusInput}>Focus on Input</button>
          </div>
        </form>
        <ChildComponent value={this.state.value} />
      </div>
    )
  }
};
