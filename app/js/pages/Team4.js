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

//获取state里的所有参数map
var Task1  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'苗琳',
                p2:'高烧不退',
                p3:'2016.10.1',
                p4:'2016.10.7',
                p5:'7',
                p6:'小茴香',
                p7:'20160930',
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
                <Input type="text" label="领导称呼"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="请假原因"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="请假开始时间"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="请假结束时间"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <Input type="text" label="请假天数"  placeholder={this.state.parms['p5']} onChange = {(e)=>{this.state.parms['p5']=e.target.value}} validation = {this.is_good(this.state.parms['p5'])} />
                <Input type="text" label="请假人"  placeholder={this.state.parms['p6']} onChange = {(e)=>{this.state.parms['p6']=e.target.value}} validation = {this.is_good(this.state.parms['p6'])} />
                <Input type="text" label="落款日期"  placeholder={this.state.parms['p7']} onChange = {(e)=>{this.state.parms['p7']=e.target.value}} validation = {this.is_good(this.state.parms['p7'])} />
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

var Task3  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'程序员',
                p2:'bingham',
                p3:'北京信息科技大学',
                p4:'计算机应用技术',
                p5:'NLP',
                p6:'熟练掌握机器学习算法',
                p7:'英语六级',
                p8:'联想集团',
                p9:'开发测试工程师',
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="职位"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="姓名"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="学校"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="专业"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <Input type="text" label="主要课程"  placeholder={this.state.parms['p5']} onChange = {(e)=>{this.state.parms['p5']=e.target.value}} validation = {this.is_good(this.state.parms['p5'])} />
                <Input type="text" label="掌握技能"  placeholder={this.state.parms['p6']} onChange = {(e)=>{this.state.parms['p6']=e.target.value}} validation = {this.is_good(this.state.parms['p6'])} />
                <Input type="text" label="英语考试等级"  placeholder={this.state.parms['p7']} onChange = {(e)=>{this.state.parms['p7']=e.target.value}} validation = {this.is_good(this.state.parms['p7'])} />
                <Input type="text" label="实习公司"  placeholder={this.state.parms['p8']} onChange = {(e)=>{this.state.parms['p8']=e.target.value}} validation = {this.is_good(this.state.parms['p8'])} />
                <Input type="text" label="主要工作"  placeholder={this.state.parms['p9']} onChange = {(e)=>{this.state.parms['p9']=e.target.value}} validation = {this.is_good(this.state.parms['p9'])} />
                <Input type="text" label="实习总结"  placeholder={this.state.parms['p10']} onChange = {(e)=>{this.state.parms['p10']=e.target.value}} validation = {this.is_good(this.state.parms['p10'])} />
                <Input type="text" label="自我评价"  placeholder={this.state.parms['p11']} onChange = {(e)=>{this.state.parms['p11']=e.target.value}} validation = {this.is_good(this.state.parms['p11'])} />
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

var Task2  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'20',
                p2:'2016-11-15 09:00',
                p3:'北京信息科技大学',
                p4:'同学会筹备组',
                type:'Meeting',
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="毕业周年"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="聚会时间"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="聚会地点"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="落款"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View api_path='sc' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)

var Task5  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'北京信息科技大学',
                p2:'2016-11-15 09:00',
                p3:'报告厅',
                p4:'计算机学院',
                type:'Ceremony',
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="学校名称"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="毕业典礼时间"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="毕业典礼地点"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="落款"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <ButtonToolbar>
                    <Input  type = "submit" value="提交" standalone onClick={this.handle_submit} />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
                
                <ModalTrigger
                modal={<View title = {this.props.title} api_path='sc' form_data = {this.state.form_data} start_run = {this.state.showModal}/>}
                show={this.state.showModal}
                onClose={this.close}
                />
                </Container>
        )
    }
})
)


var Task4  =  withRouter(React.createClass( {
    getInitialState(){
        return {
                parms:{
                p1:'党员发展大会',
                p2:'全体党员',
                p3:'2016-11-15 09:00',
                p4:'评选党员积极分子',
                p5:'通过前几周的学习和考核评选出积极分子',
                p6:'党支部书记,副书记及全体学生党员',
                p7:'教三六阶',
                p8:'请大家带好笔和本做好笔记',
                p9:'计算机院办',
                p10:'2016-11-10 10:00',
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
        
        return (
                <Container>
                <form className="am-form" id = 'myform'>
                <Input type="text" label="会议名称"  placeholder={this.state.parms['p1']} onChange = {(e)=>{this.state.parms['p1']=e.target.value}} validation = {this.is_good(this.state.parms['p1'])} />
                <Input type="text" label="会议通知对象"  placeholder={this.state.parms['p2']} onChange = {(e)=>{this.state.parms['p2']=e.target.value}} validation = {this.is_good(this.state.parms['p2'])} />
                <Input type="text" label="会议召开日期"  placeholder={this.state.parms['p3']} onChange = {(e)=>{this.state.parms['p3']=e.target.value}} validation = {this.is_good(this.state.parms['p3'])} />
                <Input type="text" label="会议议题或主题"  placeholder={this.state.parms['p4']} onChange = {(e)=>{this.state.parms['p4']=e.target.value}} validation = {this.is_good(this.state.parms['p4'])} />
                <Input type="text" label="会议主要内容"  placeholder={this.state.parms['p5']} onChange = {(e)=>{this.state.parms['p5']=e.target.value}} validation = {this.is_good(this.state.parms['p5'])} />
                <Input type="text" label="参会人员列表"  placeholder={this.state.parms['p6']} onChange = {(e)=>{this.state.parms['p6']=e.target.value}} validation = {this.is_good(this.state.parms['p6'])} />
                <Input type="text" label="会议地点"  placeholder={this.state.parms['p7']} onChange = {(e)=>{this.state.parms['p7']=e.target.value}} validation = {this.is_good(this.state.parms['p7'])} />
                <Input type="text" label="注意事项"  placeholder={this.state.parms['p8']} onChange = {(e)=>{this.state.parms['p8']=e.target.value}} validation = {this.is_good(this.state.parms['p8'])} />
                <Input type="text" label="会议发布机构"  placeholder={this.state.parms['p9']} onChange = {(e)=>{this.state.parms['p9']=e.target.value}} validation = {this.is_good(this.state.parms['p9'])} />
                <Input type="text" label="会议发布日期" placeholder={this.state.parms['p10']} onChange = {(e)=>{this.state.parms['p10']=e.target.value}} validation = {this.is_good(this.state.parms['p10'])} />
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




class Team4 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
       
        <h2>{myConfig.pages[3].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="请假条">
                <Task1 title="请假条"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="同学聚会邀请函">
                <Task2 title="同学聚会邀请函"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="3" title="求职信">
                <Task3 title="求职信"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="4" title="会议通知">
                <Task4 title="会议通知"/>            
            </Tabs.Item>
            <Tabs.Item eventKey="5" title="毕业典礼邀请函">
                <Task5 title="毕业典礼邀请函"/>            
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  }
}
export default Team4