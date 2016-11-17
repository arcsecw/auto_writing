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

var Task1  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'上午',
                p2:'杨林',
                p3:'郑国伟',
                type: 'hl'
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="时间"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="新郎姓名"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="新娘姓名"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View  title = {this.props.title} api_path='hc' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)

var Task2  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'爷爷',
                p2:'八十大寿',
                p3:'80岁',
                p4:'八十年',
                type:'zs'
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="称呼"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="大寿"  placeholder ={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="年龄"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="时间"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path='hc' form_data = {this.state.form_data} start_run = {this.state.showModal} title = {this.props.title}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)

class Team2 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[1].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="祝寿词">
                <Task2 title="祝寿词"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="婚礼贺词">
                <Task1 title="婚礼贺词"/>            
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  }
}
export default Team2