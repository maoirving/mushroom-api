'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Jobs',
      [
        {
          name: '高级前端工程师',
          type: 'society',
          recruitingNnumbers: 10,
          salary: '25-50K',
          workLocation: '厦门思明区厦门市软件园望海路61号楼软件园二期3层',
          workExperience: '5-10年',
          educationBackground: '本科',
          description: `<p>1. 负责美团客户服务体系产品与工具的前端架构设计与开发落地，能够从体验、质量、性能、效率等多个维度持续优化产品；<br/>
          2. 负责美团服务体验前端工程化工具的建设与迭代，并建立可量化的指标抓手；<br/>
          3. 深入了解美团服务体系内业务，能够根据业务特性与发展阶段做技术选型与技术演进；<br/>
          4. 负责新人指导与低级别工程师培养；</p>`,
          skill: `<p>1. 熟悉前后端整体开发流程，能够从项目整体考虑设计方案，熟悉至少一种后端语言，Java/Python均可；<br/>
          2. 熟练使用AngularJS/Vue框架中至少一种；<br/>
          3. 熟练使用NodeJS；<br/>
          4. 对组件化开发有深入理解；<br/>
          5. 熟悉Linux，熟悉常用命令，了解Shell，Awk，Sed等使用。</p>`,
          companyId: 4,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'APP推广',
          type: 'society',
          recruitingNnumbers: 4,
          salary: '6-11K',
          workLocation: '南京秦淮区南京平安国际金融中心10楼',
          workExperience: '1-3年',
          educationBackground: '大专',
          description: `<p>1、通过公司CRM库匹配合适的客户，进行邀约推广业务；并免费为商家提供营销活动的策略支持服务；<br/>
          2、收集商户及用户对于充电宝产品的使用情况反馈，并及时协助解决使用过程中遇到的问题；<br/>
          3、与公司各部门配合，及时处理反馈市场信息，协助提升运营效率，提高用户满意度；<br/>
          4、与客户建立高价值合作关系，维护客情。</p>`,
          skill: `<p>1、一年及以上的销售经验，并有良好销售业绩，有互联网销售经验者优先；<br/>
          2、热爱销售，善于挑战，积极乐观，有强烈的成功欲望和企图心；<br/>
          3、富有激情和创新理念，追求个人职业发展和公司利益的双赢，注重职业升华机遇和优质工作氛围；<br/>
          4、具备较强的人际沟通能力，及逻辑思维能力；为人正直，诚实可靠；</p>`,
          companyId: 4,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'SRE运维研发工程师',
          type: 'society',
          recruitingNnumbers: 4,
          salary: '25-50K',
          workLocation: '南京秦淮区南京平安国际金融中心10楼',
          workExperience: '不限',
          educationBackground: '本科',
          description: `<p>-Site Rebiability Egieer，负责百度搜索公司大规模分布式系统及各类在线服务可靠、稳定、 高效运行<br/>
          -关注业界前沿接入技术动态，负责超大规模流量接入系统的优化，演进和新接入技术探索 和应用<br/>
          -关注业界相关技术动态，对齐混部技术方向(Docker 等)，贡献与引领业界技术趋势<br/>
          -参与在线系统和各类产品架构设计及自动化系统的实现，满足严格的质量与效率要求<br/>
          -参与百度国内外整体机房建设，为产品用户提供最优质的接入与使用体验布局<br/>
          -设计研发服务运维解决方案，包括网站加速、持续交付、容量管理、弹性计算、故障分析、 流量分配、性能调优等<br/>
          -使用 AI 技术解决超大规模互联网应用运维问题</p>`,
          skill: `<p>-深入理解 Linux 操作系统;具备较好的计算机网络和体系结构基础 -熟练掌握 C/C++/Python/Go/Shell等至少一种主流编程语言<br/>
          -良好的逻辑思维和分析能力，热衷于解决问题、追求极致<br/>
          -强烈的责任心、进取心、团队合作精神和 Ownership</p>`,
          companyId: 3,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'UI设计师',
          type: 'school',
          recruitingNnumbers: 3,
          salary: '5-6k',
          workLocation: '北京海淀区百度大厦A座F4-Aw',
          workExperience: '不限',
          educationBackground: '本科',
          description: `<p>-负责百度技术中台用户体验部的产品UI&运营设计工作<br/>
          -快速理解用户及产品，基于对设计趋势的分析和思考，与产品交互一起构思和创意，灵活提供视觉解决方案，不断优化产品体验<br/>
          -追求极致，能够输出符合业界趋势的有竞争力的视觉设计方案<br/>
          -把控产品的整体视觉风格，保证产品的品质与审美<br/>
          -与其他对接设计师、产品经理、工程师紧密沟通协作，共同达成目标</p>`,
          skill: `<p>-本科及以上学历，设计、美术或相关专业<br/>
          -有3年以上视觉设计工作经验，有可视化设计、3D动效、视频、插画等经验者优先<br/>
          -具有扎实的设计理论与娴熟的设计技巧，精通色彩、图形、信息和GUI设计原则及方法<br/>
          -热爱设计，审美水平优秀；善于捕捉流行趋势，关注最新的技术和设计动态<br/>
          -具备良好合作态度及团队精神，并富有工作激情、创新欲望和责任感</p>`,
          companyId: 3,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Java开发工程师',
          type: 'society',
          recruitingNnumbers: 4,
          salary: '25-50K',
          workLocation: '上海黄浦区Soho复兴广场(南三门)A座',
          workExperience: '3-5年',
          educationBackground: '本科',
          description: `<p>1.主持公司核心交互和笔记中台的开发和维护，支撑赋能业务研发部门；<br/>
          2.带领团队设计并实现核心中台服务的高可用架构，保障线上服务稳定可持续发展；<br/>
          3.主持系统架构设计、日志及部署规范制定、技术文档编写等；<br/>
          4.参与开发人员codereview工作，并能从语言和框架层面提供性能优化、安全性建议；</p>`,
          skill: `<p>1.5年及以上大厂中台服务的架构开发经验，有带团队的经验更佳<br/>
          2.精通Java，具备良好的编码能力和编码习惯；熟悉多线程编程，熟悉分布式、缓存、消息队列等机制，熟悉JVM机制；<br/>
          3.理解常见中间件和框架的原理和机制，包括但不限于Spring/SpringBoot，Netty等；<br/>
          4.熟悉Mysql/MongoDB/Redis 等数据库产品的使用和底层原理<br/>
          5.技术视野开阔，学习主动性强，具有优秀的业务沟通能力，良好的工作协调能力</p>`,
          companyId: 1,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '测试开发',
          type: 'school',
          recruitingNnumbers: 3,
          salary: '4-6k',
          workLocation: '北京朝阳区龙湖蓝海引擎产业园龙湖蓝海产业园',
          workExperience: '不限',
          educationBackground: '本科',
          description: `<p>1、参与需求分析、结合开发计划、需求文档制定测试计划、测试方案；<br/>
          2、搭建测试环境和完成测试环境的代码部署；<br/>
          3、把控测试进度从而推动项目进度；<br/>
          4、根据项目特点，引入新的测试方法和工具，提高测试效率；<br/>
          5、制定项目测试报告，并站在测试角度给出建设性意见；</p>`,
          skill: `<p>1. 计算机或其他相关专业本科及以上学历，3年以上测试相关经验；<br/>
          2. 具有优秀的 Coding 能力,Java 或 Python，熟悉常见的数据结构与算法；<br/>
          3. 熟悉至少一种自动化测试工具，能独立完成自动化测试；<br/>
          4. 精通测试流程和测试用例设计方法，能主动进行技术钻研；<br/>
          5. 对App，服务端，接口测试，性能测试，测试工具/平台，CI，CD 有某项专精；<br/>
          6. 能够分析出当前业务线的痛点问题，具备通过技术工具或推动流程改进解决实际问题的经验；</p>`,
          companyId: 2,
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {})
  }
}
