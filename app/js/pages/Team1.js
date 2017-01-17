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
import Kai_xue_dian_li from './Kai_xue_dian_li'
import Bi_ye_dian_li from './Bi_ye_dian_li'
import Ge_ren_zong_jie from './Ge_ren_zong_jie'
import Bu_men_zong_jie from './Bu_men_zong_jie'
import Qing_jia_tiao from './Qing_jia_tiao'
import Ju_hui from './Ju_hui'
import Hui_yi_tong_zhi from './Hui_yi_tong_zhi'
import Dian_li_yao_qing from './Dian_li_yao_qing'
class Team1 extends React.Component {
  render() {
    return(
      <Container className="am-padding-vertical-lg">
        <h2>{myConfig.pages[0].des}</h2>      
        <Tabs animation = 'slide'>
            <Tabs.Item eventKey="1" title="开学典礼">
                <Kai_xue_dian_li  title="开学典礼"/>
            </Tabs.Item>
            <Tabs.Item eventKey="2" title="毕业典礼">
                <Bi_ye_dian_li  title="毕业典礼"/>
            </Tabs.Item>
            <Tabs.Item eventKey="3" title="个人总结">
                <Ge_ren_zong_jie  title="个人总结"/>
            </Tabs.Item>
            <Tabs.Item eventKey="4" title="部门总结">
                <Bu_men_zong_jie  title="部门总结"/>
            </Tabs.Item>
            <Tabs.Item eventKey="5" title="请假条">
                <Qing_jia_tiao  title="请假条"/>
            </Tabs.Item>
            <Tabs.Item eventKey="6" title="同学聚会">
                <Ju_hui  title="同学聚会"/>
            </Tabs.Item>
            <Tabs.Item eventKey="8" title="会议通知">
                <Hui_yi_tong_zhi  title="会议通知"/>
            </Tabs.Item>
            <Tabs.Item eventKey="9" title="典礼邀请">
                <Dian_li_yao_qing  title="典礼邀请"/>
            </Tabs.Item>
            
        </Tabs>
      </Container>
    )
  }
}
export default Team1