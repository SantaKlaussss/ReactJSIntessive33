import React, { Component } from 'react'
import { ChildComponent } from './ChildComponent';

type StateTypes = {
  count: number;
}

export class FirstComponent extends Component<{}, StateTypes> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<StateTypes>) {
    console.log('getSnapshotBeforeUpdate');
    
  }

  componentDidMount() {
    console.log('Я смантировался');
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<StateTypes>, snapshot?: any): void {
    console.log('Я обновился' , prevState.count, this.state.count);
  }

  componentWillUnmount(): void {
    console.log('Я размонтировался');
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('Я поймал ошибку', error, errorInfo);
  }
  render() {
    console.log('Я зарендерился');
    
    let increment = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    let decrement = () => {
      this.setState({
        count: this.state.count - 1
      })
    }

    return (
      <>
        <div
          style={{
            display: 'inline-block',
            margin: '50px',
            backgroundColor: 'lightblue',
            padding: '30px',
          }}
        >
          Классовый Component
          <input
            type="text"
            value={this.state.count}
            style={{
              marginTop: '10px',
              display: 'block',
            }}
          />
          <button onClick={increment}>Прибавить</button>
          <button onClick={decrement}>Убавить</button>
          <ChildComponent count={this.state.count} />
        </div>
      </>
    )
  }

};
