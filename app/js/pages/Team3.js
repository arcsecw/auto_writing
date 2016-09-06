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
                <form className="am-form" target="_blank">
                <Input type="text" label="用户名" id="doc-ipt-1" placeholder="输入用户名" />
                <Input type="password" label="密码" id="doc-ipt-2" placeholder="输入密码" />
                <Input type="file" label="尊容" id="doc-ipt-3" help="选择一个文件" />
                <Input type="checkbox" label="选我选我选我" defaultChecked readOnly />
                <Input type="radio" name="doc-radio-1" label="单选框 - 选项 1" />
                <Input type="radio" name="doc-radio-1" label="单选框 - 选项 2" />

                {/* inline checkbox  */}
                <FormGroup>
                    <label>多选：</label>
                    <Input type="checkbox" name="doc-checkbox-1" label="选我" inline />
                    <Input type="checkbox" name="doc-checkbox-1" label="也可以选我" inline />
                    <Input type="checkbox" name="doc-checkbox-1" label="还可以选我" inline />
                </FormGroup>

                <FormGroup>
                    <label>单选：</label>
                    <Input type="radio" name="doc-radio-2" label="只能选我" inline />
                    <Input type="radio" name="doc-radio-2" label="或者选我" inline />
                    <Input type="radio" name="doc-radio-2" label="再或者我" inline />
                </FormGroup>

                <Input type="select" label="单选框">
                    <option value="v1">选项 1</option>
                    <option value="v2">选项 2</option>
                    <option value="v3">选项 3</option>
                    <option value="v4">选项 4</option>
                </Input>
                <Input type="select" label="多选框" multiple>
                    <option value="v1">选项 - 1</option>
                    <option value="v2">选项 - 2</option>
                    <option value="v3">选项 - 3</option>
                    <option value="v4">选项 - 4</option>
                </Input>
                <Input type="textarea" label="文本域" placeholder="说点神马..." />

                {/* 输入框形状 */}
                <Input label="圆角输入框" radius />
                <Input label="椭圆输入框" round />

                {/* 禁用状态 */}
                <Input label="禁止使用" placeholder="说点神马..." disabled />
                <Input type="textarea" label="禁止使用" placeholder="说点神马..." disabled />
                <ButtonToolbar>
                    <Input type="submit" value="提交" standalone />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
                </form>
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

class Team3 extends React.Component {
  render() {
    return (
       <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[2].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="祝寿词">
                <Task1/>            
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="婚礼贺词">
                <Task2/>            
            </Tabs.Item>
        </Tabs>
      </Container>
    );
  }
}
export default Team3