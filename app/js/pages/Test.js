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
var Test  =  withRouter(React.createClass( {
  getInitialState(){
        return {
                showModal: true,
            }
  },
  render() {
      var form1 = new FormData()
    return(
      <Container className="am-padding-vertical-lg">
        <h2>测试页面</h2>      
        <ModalTrigger
                modal={<View api_path='test' form_data = {form1} start_run = {this.state.showModal} title = {this.props.title} />}
                show={this.state.showModal}
                />
     </Container>
    )
  }
}))
export default Test