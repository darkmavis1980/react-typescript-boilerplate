
import * as React from 'react';
import { hot } from "react-hot-loader/root";
interface Props {
   name: string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return <div><h1>Hello {name}</h1></div>;
  }
}

export default hot(App);
