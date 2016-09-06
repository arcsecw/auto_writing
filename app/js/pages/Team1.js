import React from 'react';
import {
  Container,
  Input,
  FormGroup,
  ButtonToolbar,
  Tabs,
  Item,
} from 'amazeui-react';
import { myConfig } from '../components/config.js';
class Task1 extends React.Component {
    render() {
        return (
            <div>
          置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
            </div>
        )
    }
}
class Task2 extends React.Component {
    render() {
        return (
            <div>
                走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
            </div>
        )
    }
}

class Team1 extends React.Component {
  render() {
    return(
      <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[0].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="个人工作总结">
                <Task1/>
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="部门工作总结">
                <Task2/>                
            </Tabs.Item>
        </Tabs>
      </Container>
    )
  }
}
export default Team1