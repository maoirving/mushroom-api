'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: '行吟信息科技（上海）有限公司',
          type: '互联网',
          imageUrl:
            'https://img2.bosszhipin.com/mcs/chatphoto/20151215/177707d137204f203a5299cbd7f5c31ed66df05e1ba3f433ffd5d4568db0adb6.png?x-oss-process=image/resize,w_120,limit_0',
          address: '上海黄浦区Soho复兴广场C座',
          financingStage: 'D轮及以上',
          introduction: `<p>小红书由毛文超和瞿芳于2013年在上海创立。小红书以“Inspire Lives”为使命，用户可以通过短视频、图文等形式记录生活点滴，分享生活方式，并基于兴趣形成互动。<br/>
          2018年6月1日，小红书完成了超过3亿美元的新一轮融资，由阿里巴巴领投，金沙江创投、腾讯投资、纪源资本、元生资本、天图投资、真格基金、K11郑志刚先生等机构公司及个人跟投，估值超过30亿美元。截至到2019年10月，小红书月活跃用户数已经过亿，其中70%用户是90后，并持续快速增长。<br/>
          凭借真实、向上、多元的社区氛围，小红书已成为年轻人不可替代的生活方式平台和消费决策入口，具有制造流行和热点的能力。<br/>
          小红书社区目前内容覆盖时尚、个护、彩妆、美食、旅行、娱乐、读书、健身、母婴等各个生活方式领域，每天产生超过30亿次的笔记曝光。过去一年中，小红书用户分享的内容以超过10倍的速度增长，其中科技数码11.4倍，家居装修10.1倍，养生11.6倍，宠物8.6倍，婚庆10.4倍，音乐8.5倍。</p>`,
          scale: '1000-9999人',
          legalRepresentative: '曾秀莲',
          registeredCapital: '100万人民币',
          registeredAt: '2013-08-02',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '阿里巴巴网络科技有限公司',
          type: '互联网',
          imageUrl:
            'https://img.bosszhipin.com/beijin/mcs/banner/c14c7536c0478b10cd4c46efb7d1b6e2cfcd208495d565ef66e7dff9f98764da.png?x-oss-process=image/resize,w_120,limit_0',
          address: '杭州余杭区阿里巴巴西溪园区',
          financingStage: '已上市',
          introduction: `<p>阿里巴巴集团的使命是让天下没有难做的生意。<br/>
          我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关联公司口碑，参与物流和本地服务行业，同时与蚂蚁金融服务集团有战略合作，该金融服务集团主要通过中国领先的第三方网上支付平台支付宝运营。<br/>
          <br/>
          我们的愿景<br/>
          我们旨在构建未来的商务生态系统。我们的愿景是让客户相会、工作和生活在阿里巴巴，并持续发展最少102年。</p>`,
          scale: '10000以上',
          legalRepresentative: '张勇',
          registeredCapital: '1220000万人民币',
          registeredAt: '2018-03-19',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '百度国际科技（深圳）有限公司',
          type: '互联网',
          imageUrl:
            'https://img.bosszhipin.com/beijin/logo/0e0d441a2f93a236536f20e8277bf4dbbe1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_120,limit_0',
          address: '北京海淀区百度科技园',
          financingStage: '已上市',
          introduction: `<p>“百度”二字，来自于八百年前南宋词人辛弃疾的一句词：众里寻他千百度。这句话描述了词人对理想的执着追求。<br/>
          百度拥有数万名研发工程师，这是中国乃至全球最为优秀的技术团队。这支队伍掌握着世界上最为先进的搜索引擎技术，使百度成为中国掌握世界尖端科学核心技术的中国高科技企业，也使中国成为美国、俄罗斯、和韩国之外，全球仅有的4个拥有搜索引擎核心技术的国家之一。</p>`,
          scale: '10000以上',
          legalRepresentative: '崔珊珊',
          registeredCapital: '2000万美元',
          registeredAt: '2010-11-23',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '北京三快在线科技有限公司',
          type: '互联网',
          imageUrl:
            'https://img.bosszhipin.com/beijin/upload/com/logo/20210420/f9bff82be5bd8c7fd799be43dae6079577c47d994acd32f441228b04529816d2.png?x-oss-process=image/resize,w_120,limit_0',
          address: '武汉江夏区东港科技产业园5号楼',
          financingStage: '已上市',
          introduction: `<p>美团的使命是“帮大家吃得更好，生活更好”。作为一家生活服务电子商务平台，公司聚焦“Food +Platform”战略，以“吃”为核心，通过科技创新，和广大商户与各类合作伙伴一起，努力为消费者提供品质生活，推动生活服务业需求侧和供给侧数字化升级。<br/>
          2018年9月20日，美团正式在港交所挂牌上市。美团将始终坚持以客户为中心，不断加大在科技研发方面的投入，更好承担社会责任，更多创造社会价值，与广大合作伙伴一起发展共赢。<br/>
          Introduction to Meituan<br/>
          The mission of Meituan is “We help people eat better, live better ”. As China’s e-commerce platform for services, Meituan places its focus on the “Food+ Platform” strategy and always takes “eating” as the core of its businesses. Resorting to its advantages in scientific innovation, Meituan joins hands with a vast number of merchants and diverse partners to offer consumers quality services and accelerate the digital upgrade of the life service industry on both demand and supply sides.<br/>
          Officially listed on the Main Board of the Stock Exchange of Hong Kong Limited on September 20, 2018, Meituan has always centered on customers and kept increasing investment in scientific R&D, thus better fulfilling its social responsibilities, creating more values for the society, and seeking win-win cooperation with all partners.</p>`,
          scale: '10000以上',
          legalRepresentative: '穆荣均',
          registeredCapital: '333166万美元',
          registeredAt: '2011-05-06',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {})
  }
}
