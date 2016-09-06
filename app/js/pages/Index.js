import React from 'react';
import {
  Container,
} from 'amazeui-react';
class Index extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ask-banner">
        <Container>
          <h1>一、	人员安排</h1>
          <p>
          1.	教师个人工作总结（部门工作总结）
          李江龙，崔梦娇，郑国伟
          </p>
          <p>          
          2.	开学典礼致辞（毕业典礼致辞）
          张恒，苗琳，王文超
          </p>
          <p>
          3.	祝寿词，婚礼贺词
          陈玉敬，刘海龙，李长磊，杨林
          </p>
          4.	求职信，请假条，公示、通知、邀请函、复函、请示
          朱丽雅，王浩，夏冰，朱星嘉
          <h1>二、	工作安排</h1>
          <p>
          1.	9月-10月
          前期调研，各小组制定实现计划，实现各模块基本功能
          </p>
          <p>
          2.	11月
          项目集成，测试，完成项目语料任务
          </p>
          3.	12月1日-12月10日
          整理项目文档

        </Container>
      </div>
    );
  }
}

export default Index;
