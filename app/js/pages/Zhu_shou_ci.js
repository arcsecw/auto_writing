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
var Zhu_shou_ci  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                type:'zs',
                'xingbie':'男性',
                'shenfen':'主持人',
                'bf':'皇叔',
                'nl':'七十',
                'xm':'诸葛亮',
                'jbdz':'皇宫',
                'jtzz':'成都',
                'fyrbf':'臣子',
                'zbxm':'刘备',
                'jj':'秋天',
                'qtxm':'张飞,关羽',
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
    /** 
     长辈辈分	%(bf)s
    年龄	%(nl)s
    姓名	%(xm)s
    举办地址	%(jbdz)s
    //家庭住址	%(jtzz)s
    晚辈辈分	%(fyrbf)s
    //其他祝寿人姓名	%(qtxm)s
    长辈名字	%(zbxm)s
    季节	%(jj)s
    */
    render() {
        var parms = this.state.parms
        console.log(parms)
        var iconUser = <span className="am-icon-user"></span>;
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <br/>
                <FormGroup>
                    <label>你的性别是？</label>
                    <Input type="radio" name="xingbie" label="男性" inline onClick = {(e)=>{parms.xingbie = '男性' ;this.setState({parms:parms})}} />
                    <Input type="radio" name="xingbie" label="女性" inline onClick = {(e)=>{parms.xingbie = '女性' ;this.setState({parms:parms})}} />
                </FormGroup>
                <FormGroup>
                    <label>寿宴举办的季节？</label>
                    <Input type="radio" name="jj" label="春天" inline onClick = {(e)=>{parms.jj = '春天' ;this.setState({parms:parms})}} />
                    <Input type="radio" name="jj" label="夏天" inline onClick = {(e)=>{parms.jj = '夏天' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="jj" label="秋天" inline onClick = {(e)=>{parms.jj = '秋天' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="jj" label="冬天" inline onClick = {(e)=>{parms.jj = '冬天' ;this.setState({parms:parms})}}/>
                </FormGroup>
                <FormGroup>
                    <label>你以什么身份参加本次活动？</label>
                    <Input type="radio" name="shenfen" label="晚辈" inline onClick = {(e)=>{parms.shenfen = '晚辈' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="shenfen" label="主持人" inline onClick = {(e)=>{parms.shenfen = '主持人' ;this.setState({parms:parms})}} />
                </FormGroup>
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = '你如何尊称寿星？' inline  defaultValue={parms.bf}  onChange = {(e)=>{parms.bf = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.bf)} />
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="nl" label = {'你的《'+parms.bf+'》过多少大寿'} inline  defaultValue={parms['nl']} onChange = {(e)=>{parms.bf = e.target.value ;this.setState({parms:parms})}}  validation = {this.is_good(parms.nl)} />
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="jbdz" label = '你们打算在哪儿举办寿宴？' inline  defaultValue={parms.jbdz}  onChange = {(e)=>{parms.jbdz = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.jbdz)}/>
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="jtzz" label = '你的家庭住址？' inline  defaultValue={parms.jtzz}  onChange = {(e)=>{parms.jtzz = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.jtzz)}/>
                    <Input addonBefore={iconUser} addonAfter='选填' type="text" name="fyrbf" label = '你是老寿星的？' inline  defaultValue={parms.fyrbf}  onChange = {(e)=>{parms.fyrbf = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.fyrbf)}/>
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="qtxm" label = '还有其他像你一样的祝寿人么？' inline  defaultValue={parms.qtxm}  onChange = {(e)=>{parms.qtxm = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.qtxm)}/>
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="zbxm" label = '寿星的名字叫做？' inline  defaultValue={parms.zbxm}  onChange = {(e)=>{parms.zbxm = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.zbxm)}/>
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
export default Zhu_shou_ci