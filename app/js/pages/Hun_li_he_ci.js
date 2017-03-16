
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
var Hun_li_he_ci  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                type:'hl',
                'zhongwu_or_wanshang':'中午',
                'xiansheng':'梁山伯',
                'xiaojie':'祝英台' ,
                'xinlangdanwei':'北京信息科技大学',
                'xinniangdanwei':'中国音乐学院',
                'guanxi':'同学',
                'shenfen':'领导',
                'which_fang':'新娘方'
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
        console.log(parms)
        var iconUser = <span className="am-icon-user"></span>;
        
        var lable1 = '你如何称呼新人？'
        var lable2 = '新郎名字？'
        var lable3 = '新郎单位名称？'
        var lable4 = '新娘名字？'
        var lable5 = '新娘单位？'
        if(parms.shenfen=='领导'){
            
            if(parms.which_fang=='新郎方'){
             lable1 = '你如何称呼新人？eg:同事'
             lable2 = '新郎名字？'
             lable3 = '贵单位名称？'
             lable4 = '新娘名字？'
             lable5 = '新娘单位？'
            }else{
                lable1 = '你如何称呼新人？eg:同事'
                lable2 = '新郎名字？'
                lable3 = '新郎单位？'
                lable4 = '新娘名字？'
                lable5 = '贵单位名称？'
            }    
        }
        if(parms.shenfen=='父母'){
            if(parms.which_fang=='新郎方'){
             lable1 = '你如何称呼新人？eg:儿子'
             lable2 = '您儿子的名字？'
             lable3 = '您儿子的单位名称？'
             lable4 = '您儿媳的名字？'
             lable5 = '您儿媳的单位名称？'
            }else{
                lable1 = '你如何称呼新人？eg:女儿'
                lable2 = '您女婿的名字？'
                lable3 = '您女婿的单位名称？'
                lable4 = '您女儿的名字？'
                lable5 = '您女儿的单位名称？'
            }    
        }
        if(parms.shenfen=='朋友'){
            parms.guanxi = '朋友'
             lable1 = '你如何称呼新人？eg:朋友'
             lable2 = '新郎名字？'
             lable3 = '新郎单位名称？'
             lable4 = '新娘名字？'
             lable5 = '新娘单位？'
        }
        if(parms.shenfen=='新郎'){
            lable1 = ''
             lable2 = '你的名字？'
             lable3 = '你的单位名称？'
             lable4 = '你新娘的名字？'
             lable5 = '你新娘的单位名称？'
        }
        var which = 
        <div>
        <FormGroup>
                    <label>你是哪一方的？</label>
                    <Input type="radio" name="which_fang" label="新郎方" inline onClick = {(e)=>{parms.which_fang = '新郎方' ;this.setState({parms:parms})}} />
                    <Input type="radio" name="which_fang" label="新娘方" inline onClick = {(e)=>{parms.which_fang = '新娘方' ;this.setState({parms:parms})}}/>
        </FormGroup>
        <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = {lable1} inline  defaultValue={parms.guanxi}  onChange = {(e)=>{parms.guanxi = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.guanxi)} />        
        </div>
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <br/>
                <FormGroup>
                    <label>你的身份是？</label>
                    <Input type="radio" name="xingbie" label="领导" inline onClick = {(e)=>{parms.shenfen = '领导' ;this.setState({parms:parms})}} />
                    <Input type="radio" name="xingbie" label="父母" inline onClick = {(e)=>{parms.shenfen = '父母' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="xingbie" label="朋友" inline onClick = {(e)=>{parms.shenfen = '朋友' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="xingbie" label="新郎" inline onClick = {(e)=>{parms.shenfen = '新郎' ;this.setState({parms:parms})}}/>
                    <Input type="radio" name="xingbie" label="证婚人" inline onClick = {(e)=>{parms.shenfen = '证婚人' ;this.setState({parms:parms})}}/>
                </FormGroup>
                
                {(parms.shenfen=='领导'||parms.shenfen=='父母'||parms.shenfen=='朋友')?which:''}
                
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = {lable2} inline  defaultValue={parms.xiansheng}  onChange = {(e)=>{parms.xiansheng = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.xiansheng)} />
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = {lable3} inline  defaultValue={parms.xinlangdanwei}  onChange = {(e)=>{parms.xinlangdanwei = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.xinlangdanwei)} />
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = {lable4} inline  defaultValue={parms.xiaojie}  onChange = {(e)=>{parms.xiaojie = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.xiaojie)} />
                    <Input addonBefore={iconUser} addonAfter='必填' type="text" name="bf" label = {lable5} inline  defaultValue={parms.xinniangdanwei}  onChange = {(e)=>{parms.xinniangdanwei = e.target.value ;this.setState({parms:parms})}} validation = {this.is_good(parms.xinniangdanwei)} />
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
export default Hun_li_he_ci