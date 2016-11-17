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
                p1:'北信科',
                p2:'北京信息科技大学',
                p3:'北京',
                p4:'上午',
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
                <Input type="text" label="学校简称"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="学校全称"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="学校地点"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="时间"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
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
class Task2 extends React.Component {
    render() {
        return (
            <div>
          走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
          </div>
        )
    }
}

class Team3 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[2].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="开学典礼">
                <Task1  title="开学典礼"/>            
            </Tabs.Item>
            
        </Tabs>
      </Container>
    );
  }
}
export default Team3