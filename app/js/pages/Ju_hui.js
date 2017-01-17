import React from 'react';
import {
  Container,
  Input,
  ButtonToolbar,
  Tabs,
  DateTimeInput,
  Button,
  ModalTrigger,
} from 'amazeui-react';

import {Editor, EditorState} from 'draft-js';

import { withRouter } from 'react-router'
import { myConfig } from '../components/config.js';
import {post} from '../components/Call'
import View from '../components/View'

var Ju_hui  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'20',
                p2:'2016-11-15 09:00',
                p3:'北京信息科技大学',
                p4:'同学会筹备组',
                type:'Meeting',
                },
                form_data:{},
                showModal: false,
            }
  },
   close() {
    this.setState({showModal: false,form_data:{}});
  },
  open() {
    this.setState({showModal: true});
  },
  is_good(str){
      if(str.length>0){
          return 'success'
      }
      return 'error'
  },
    validation_all(){
        var a = this.state.parms
        for (let k in a ){
            if(this.is_good(a[k])=='error'){
                return false
            }
        }
        return true
    },
    handle_submit(e){
        e.preventDefault();
        if (this.validation_all()){
            var form1 = new FormData()
            for(let k in this.state.parms){
                form1.append(k,this.state.parms[k])
            }
            this.setState({form_data:form1},()=>{
                this.open()
            })
        }else{
            this.forceUpdate()
        }
    },
    render() {
        var parms = this.state.parms
        var iconUser = <span className="am-icon-user"></span>;
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="毕业周年" inline  defaultValue={parms.p1}  onChange = {(e)=>{parms.p1 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p1)} />
                <DateTimeInput validation = {this.is_good(parms.p2)} format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="聚会时间" dateTime= {parms.p2} onSelect={(e)=>{parms['p2'] = e ;this.setState({parms:parms})}}/>
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="聚会地点" inline  defaultValue={parms.p3}  onChange = {(e)=>{parms.p3 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p3)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="落款" inline  defaultValue={parms.p4}  onChange = {(e)=>{parms.p4 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p4)} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path='sc' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
export default Ju_hui