import React from 'react';

export default class CountPeople extends React.Component {
  constructor(props) { super(props); this.state = { entrycount: 0, exitcount: 0 }; }
  UpdateEntry = () => this.setState((previous) => ({ entrycount: previous.entrycount + 1 }));
  UpdateExit = () => this.setState((previous) => ({ exitcount: previous.exitcount + 1 }));
  render() { return <main><h1>Mall People Counter</h1><p>People entered: <strong>{this.state.entrycount}</strong></p><p>People exited: <strong>{this.state.exitcount}</strong></p><button onClick={this.UpdateEntry}>Login</button><button onClick={this.UpdateExit}>Exit</button></main>; }
}
