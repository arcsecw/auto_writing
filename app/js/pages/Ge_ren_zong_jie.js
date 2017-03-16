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
var Ge_ren_zong_jie  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'语文',
                p2:'教师',
                p3:'计算机科学与技术',
                p4:'数据结构',
                p5:'张老师',
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
      if(str==undefined){
          return 'error'
      }      
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
        var keywords=''
        if (this.validation_all()){
            var form1 = new FormData()
            for(let k in this.state.parms){
                keywords = keywords+this.state.parms[k]+','
            }
            console.log(keywords)
            form1.append('keywords',keywords)            
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
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="所任课程名" inline  defaultValue={parms.p1}  onChange = {(e)=>{parms.p1 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p1)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="身份" inline  defaultValue={parms.p2}  onChange = {(e)=>{parms.p2 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p2)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="学院" inline  defaultValue={parms.p3}  onChange = {(e)=>{parms.p3 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p3)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="专业" inline  defaultValue={parms.p4}  onChange = {(e)=>{parms.p4 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p4)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="姓名" inline  defaultValue={parms.p5}  onChange = {(e)=>{parms.p5 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p5)} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path='zj' form_data = {this.state.form_data} start_run = {this.state.showModal} title = {this.props.title}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
export default Ge_ren_zong_jie