
//开学典礼

import React from 'react';
import {
  Container,
  Input,
  FormGroup,
  ButtonToolbar,
  Tabs,
  Item,
  ModalTrigger,
  DateTimeInput,
} from 'amazeui-react';
import {Editor, EditorState} from 'draft-js';
import { withRouter } from 'react-router'
import { myConfig } from '../components/config.js';
import {post} from '../components/Call'
import View from '../components/View'
var Kai_xue_dian_li  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'首师大',  
                p2:'首都师范大学',
                p3:'北京',
                p4:'上午',
                p5:'2016-10-1',
                p6:'周校长',
                p7:'本校办学历史悠久，成绩突出',
                p8:'秋天',
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
         var parms = this.state.parms
        var iconUser = <span className="am-icon-user"></span>;
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="学校简称" inline  defaultValue={parms.p1}  onChange = {(e)=>{parms.p1 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p1)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="学校全称" inline  defaultValue={parms.p2}  onChange = {(e)=>{parms.p2 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p2)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="学校地点" inline  defaultValue={parms.p3}  onChange = {(e)=>{parms.p3 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p3)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="时间" inline  defaultValue={parms.p4}  onChange = {(e)=>{parms.p4 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p4)} />
                <DateTimeInput  validation = {this.is_good(parms.p5)} format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="典礼日期" dateTime= {parms.p5} onSelect={(e)=>{parms['p5'] = e ;this.setState({parms:parms})}}/>
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="参会领导" inline  defaultValue={parms.p6}  onChange = {(e)=>{parms.p6 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p6)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="学校简介" inline  defaultValue={parms.p7}  onChange = {(e)=>{parms.p7 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p7)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="典礼季节" inline  defaultValue={parms.p8}  onChange = {(e)=>{parms.p8 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p8)} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View  title = {this.props.title} api_path='kx' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
export default Kai_xue_dian_li