import React from 'react';
import {
  Container,
  Input,
  FormGroup,
  ButtonToolbar,
  Tabs,
  Item,
  ModalTrigger,

} from 'amazeui-react';
import {Editor, EditorState} from 'draft-js';
import { withRouter } from 'react-router'
import { myConfig } from '../components/config.js';
import {post} from '../components/Call'
import View from '../components/View'
import Zhu_shou_ci from './Zhu_shou_ci'
import Hun_li_he_ci from './Hun_li_he_ci'
import Qiu_zhi_xin from './Qiu_zhi_xin'

class Team2 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[1].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="祝寿词">
                <Zhu_shou_ci title="祝寿词"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="婚礼贺词">
                <Hun_li_he_ci title="婚礼贺词"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="3" title="求职信">
                <Qiu_zhi_xin title="求职信"/>            
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  }
}
export default Team2