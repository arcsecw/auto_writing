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
import Team3 from './Team3'
import Team4 from './Team4'
class Page1 extends React.Component {
  render() {
    var team_id = this.props.location.query.team
    switch(team_id){
      case '1':
        return <Team1/>
      case '2':
        return <Team2/>
      case '3':
        return <Team3/>
      case '4':
        return <Team4/>
      default:
      return (<Container><h1>this team not defined yet </h1></Container>)
    }
  }
}

export default Page1;
