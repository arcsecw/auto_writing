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
} from 'amazeui-react';

import {Editor, EditorState} from 'draft-js';

import { withRouter } from 'react-router'
import { myConfig } from '../components/config.js';
import {post} from '../components/Call'
import View from '../components/View'
var Qing_jia_tiao  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'刘禅',
                p2:'高烧不退',
                p3:'2016-10-1',
                p4:'2016-10-7',
                p5:'7',
                p6:'诸葛亮',
                p7:'2016-9-30',
                type:'Qjt',
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
         var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(this.state.parms.p3);
        var secondDate = new Date(this.state.parms.p4);
        var d = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))+1;
        this.state.parms.p5 = d.toString()
        console.log(this.state.parms)
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
                <DateTimeInput format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="请假开始时间" dateTime= {parms.p3} onSelect={(e)=>{parms['p3'] = e ;this.setState({parms:parms})}} validation = {this.is_good(parms.p3)}/>
                <DateTimeInput format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="请假结束时间" dateTime={parms.p4} onSelect={(e)=>{parms['p4'] = e ;this.setState({parms:parms})}} validation = {this.is_good(parms.p4)}/>
                <DateTimeInput format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="落款日期" dateTime={parms.p7} onSelect={(e)=>{parms['p7'] = e ;this.setState({parms:parms})}}validation = {this.is_good(parms.p7)} />
                <Input type="text" addonBefore={iconUser} addonAfter='必填' label="你如何称呼领导？"  defaultValue={parms['p1']} onChange = {(e)=>{parms['p1']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" addonBefore={iconUser} addonAfter='必填' label="请假原因"  defaultValue={parms['p2']} onChange = {(e)=>{parms['p2']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(parms['p2'])} />
                <Input type="text" addonBefore={iconUser} addonAfter='必填' label="请假人"  defaultValue={parms['p6']} onChange = {(e)=>{parms['p6']=e.target.value; this.setState({parms:parms})}} validation = {this.is_good(parms['p6'])} />
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
export default Qing_jia_tiao