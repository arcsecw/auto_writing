import React from 'react';
import {
  Container,
  Input,
  ButtonToolbar,
  Tabs,
  DateTimeInput,
  Button,
  ModalTrigger,
  Icon,
  FormGroup,
} from 'amazeui-react';

import {Editor, EditorState} from 'draft-js';

import { withRouter } from 'react-router'
import { myConfig } from '../components/config.js';
import {post} from '../components/Call'
import View from '../components/View'

var Qiu_zhi_xin  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'程序员',
                p2:'马云',
                p3:'杭州师范大学',
                p4:'英语',
                p5:'英语,数学,外语',
                p6:'熟练掌握数据结构与算法',
                p7:'六级',
                p8:'阿里巴巴集团',
                p9:'测试开发',
                p10:'在实习过程中不断认识自我修正自我',
                p11:'工作富有责任心',
                type:'CoverLetter',
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
        var iconUser = <Icon icon="user" />;
        var parms = this.state.parms
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <br/>
                 <FormGroup>
                    <label>您的英语等级？</label>
        
                    <Input type="radio" name="xingbie" label="CET四级" inline onClick = {(e)=>{parms.p7 = '四级' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="xingbie" label="CET六级" inline onClick = {(e)=>{parms.p7 = '六级' ;this.setState({parms:parms})}} />
                </FormGroup>
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你申请的职位？"  defaultValue={parms['p1']} onChange = {(e)=>{parms['p1']=e.target.value ; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你的姓名？"  defaultValue={parms['p2']} onChange = {(e)=>{parms['p2']=e.target.value ; this.setState({parms:parms}) }} validation = {this.is_good(this.state.parms['p2'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你的毕业学校？"  defaultValue={parms['p3']} onChange = {(e)=>{parms['p3']=e.target.value ; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你所学的专业？"  defaultValue={parms['p4']} onChange = {(e)=>{parms['p4']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p4'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你的主要课程？"  defaultValue={parms['p5']} onChange = {(e)=>{parms['p5']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p5'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你擅长的专业技能？"  defaultValue={parms['p6']} onChange = {(e)=>{parms['p6']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p6'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你实习过的公司？"  defaultValue={parms['p8']} onChange = {(e)=>{parms['p8']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p8'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="实习时候承担的主要工作？"  defaultValue={parms['p9']} onChange = {(e)=>{parms['p9']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p9'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="实习自我总结？"  defaultValue={parms['p10']} onChange = {(e)=>{parms['p10']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p10'])} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" label="你的自我评价？"  defaultValue={parms['p11']} onChange = {(e)=>{parms['p11']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p11'])} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path='sc' form_data = {this.state.form_data} start_run = {this.state.showModal} title = {this.props.title}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
export default Qiu_zhi_xin