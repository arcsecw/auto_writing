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
var Task1  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                validation_start_date:'',
                validation_end_date:'',
                validation_sign_date:'',
                validation_name:'',
                validation_reason:'',
                start_date:'',
                end_date:'',
                sign_date:'',
                name:'',
                reason:'',
                api_path:'',
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
  is_date(date){
      if (date!=''){
            return "success"
        }else{
            return "error"            
        }
  },
    validation_all(){
        var a = [
            'validation_start_date',
            'validation_end_date',
            'validation_sign_date',
            'validation_name',
            'validation_reason',
        ]
        a.map((k)=>{
            var v = this.state[k]
            if(v==''){
                this.state[k]='error'
            }
        })
        for (let k of a){
            if (this.state[k]!='success')
            return false
        }
        return true
    },
    handle_submit(e){
        e.preventDefault();
        if (this.validation_all()){
            var form1 = new FormData()
            var submit_fileds = [
                'start_date',
                'end_date',
                'sign_date',
                'name',
                'reason',
            ]
            submit_fileds.map((k)=>{
                form1.append(k,this.state[k])
            })
            this.setState({form_data:form1},()=>{
                this.open()
                
            })
        }else{
            this.forceUpdate()
        }
    },
    render() {
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <DateTimeInput label="开始时间" id="doc-ipt-1" onSelect={(date)=>{this.setState({start_date:date,validation_start_date:this.is_date(date)});}} validation = {this.state.validation_start_date}/>                
                <DateTimeInput label="结束时间" id="doc-ipt-2" onSelect={(date)=>{this.setState({end_date:date,validation_end_date:this.is_date(date)})}} validation = {this.state.validation_end_date} />                
                <DateTimeInput label="下标时间"  id="doc-ipt-3"onSelect={(date)=>{this.setState({sign_date:date,validation_sign_date:this.is_date(date)})}} validation = {this.state.validation_sign_date}/>            
                <Input type="text" label="姓名" id="doc-ipt-4" placeholder="输入姓名" onChange = {(e)=>{this.setState({name:e.target.value,validation_name:this.is_date(e.target.value)})}} validation = {this.state.validation_name} />
                <Input type="text" label="原因" id="doc-ipt-5" placeholder="输入请假原因" onChange = {(e)=>{this.setState({reason:e.target.value,validation_reason:this.is_date(e.target.value)})}} validation = {this.state.validation_reason} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path={this.state.api_path} form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
class Task2 extends React.Component {
    render() {
        return (
            <div>
          走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
          </div>
        )
    }
}

class Team4 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
       
        <h2>{myConfig.pages[3].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="请假条">
                <Task1/>            
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="求职信">
                <Task2/>            
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  }
}
export default Team4