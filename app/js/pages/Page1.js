import React from 'react';
import {
  Container,
  Input,
  FormGroup,
  ButtonToolbar,
  Tabs,
  Item,
} from 'amazeui-react';
import { myConfig } from '../components/config.js';
import Team1 from './Team1'
import Team2 from './Team2'
class Page1 extends React.Component {
  render() {
    var team_id = this.props.location.query.team
    switch(team_id){
      case '1':
        return <Team1/>
      case '2':
        return <Team2/>
      default:
      return (<Team1 />)
    }
  }
}

export default Page1;
