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

var Hui_yi_tong_zhi  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'党员发展大会',
                p2:'全体党员',
                p3:'2016-10-1',
                p4:'评选党员积极分子',
                p5:'通过前几周的学习和考核评选出积极分子',
                p6:'党支部书记,副书记及全体学生党员',
                p7:'教三六阶',
                p8:'请大家带好笔和本做好笔记',
                p9:'计算机院办',
                p10:'2016-10-7',
                type:'Notice',
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
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议名称" inline  defaultValue={parms.p1}  onChange = {(e)=>{parms.p1 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p1)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议通知对象" inline  defaultValue={parms.p2}  onChange = {(e)=>{parms.p2 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p2)} />
                <DateTimeInput validation = {this.is_good(parms.p3)}format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="会议召开日期" dateTime= {parms.p3} onSelect={(e)=>{parms['p3'] = e ;this.setState({parms:parms})}}/>
                <DateTimeInput validation = {this.is_good(parms.p10)}format="YYYY-MM-DD" addonBefore={iconUser} addonAfter='必填' label="会议发布日期" dateTime= {parms.p10} onSelect={(e)=>{parms['10'] = e ;this.setState({parms:parms})}}/>                                
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议议题或主题" inline  defaultValue={parms.p4}  onChange = {(e)=>{parms.p4 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p4)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议主要内容" inline  defaultValue={parms.p5}  onChange = {(e)=>{parms.p5 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p5)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="参会人员列表" inline  defaultValue={parms.p6}  onChange = {(e)=>{parms.p6 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p6)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议地点" inline  defaultValue={parms.p7}  onChange = {(e)=>{parms.p7 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p7)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="注意事项" inline  defaultValue={parms.p8}  onChange = {(e)=>{parms.p8 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p8)} />
                <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label ="会议发布机构" inline  defaultValue={parms.p9}  onChange = {(e)=>{parms.p9 = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.p9)} />
                
                 <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View title = {this.props.title}  api_path='sc' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)
export default Hui_yi_tong_zhi