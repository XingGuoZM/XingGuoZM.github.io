
import {
  ReactSvg,
  WebpackSvg,
  JavascriptSvg,
  IphoneSvg,
  AndroidSvg,
  CpuSvg,
  NetworkSvg,
  RenderSvg,
  JobSvg,
  CitySvg,
  SchoolSvg,
  SchoolcourseSvg,
  SchooldateSvg,
  TelphoneSvg,
  EmailSvg,
  WechatSvg,
  AlgorithmSvg,
  InterviewSvg,
  SituationSvg,
  TaskSvg,
  ActionSvg,
  ResultSvg,
  DateSvg,
} from '@/assets';

export interface IUser {
  label: string;
  value: string;
}
export interface ICompany {
  name: string;
  addr: string;
  time: string;
  job: string;
  work: string;
}
export interface IProject {
  projectName: string;
  projectTime: string;
  projectRole: string;
  desc: string;
  resultList: string[];
}

export interface data {
  user: IUser[];
  company: ICompany[];
  project: IProject[];
}

export const data = {
  headTitle: '个人简历',
  theme: [
    { id: 'orange', value: '#ff6a00' },
    { id: 'green', value: '#3Eb575' },
    { id: 'blue', value: '#1479d7' },
    { id: 'black', value: '#121212' },
  ],
  userInfo: { value: '李志铭｜1995｜男｜5年前端经验' },
  userDetail: [
    {
      id: '1',
      title: '联系方式',
      list: [
        { Icon: TelphoneSvg, value: '18969176324' },
        { Icon: EmailSvg, value: '18969176324@163.com' },
        { Icon: WechatSvg, value: 'M-sharp' }
      ]
    },
    {
      id: '2',
      title: '教育背景',
      list: [
        { Icon: SchoolSvg, value: '江西财经大学' },
        { Icon: SchoolcourseSvg, value: '软件工程' },
        { Icon: SchooldateSvg, value: '2014～2018' }
      ]
    },
    {
      id: '3',
      title: '求职意向',
      list: [
        { Icon: JobSvg, value: '前端工程师' },
        { Icon: CitySvg, value: '深圳' },
        { Icon: DateSvg, value: '一周内到岗' }
      ]
    },
  ],
  expert: [
    { title: '性能优化', level: 'high', desc: ['熟悉计算机网络技术', 'CUP瓶颈', '熟悉浏览器原理'], iconList: [RenderSvg, NetworkSvg, CpuSvg] },
    { title: 'React生态', level: 'high', desc: ['熟悉React', '熟悉Redux', '熟悉Mobx'], iconList: [ReactSvg] },
    { title: 'Hybrid H5', level: 'high', desc: ['Webview', 'JsBridge', '兼容性'], iconList: [IphoneSvg, AndroidSvg] },
    { title: '前端工程化', level: 'high', desc: ['熟悉webpack', '熟悉rollup'], iconList: [WebpackSvg] },
    { title: 'JavaScript', level: 'high', desc: ['熟悉Es6/7', '能脱离框架开发', '熟悉Typescript'], iconList: [JavascriptSvg] },
    { title: 'Vue', level: 'medium', desc: ['熟悉Es6/7', '能脱离框架开发', '熟悉Typescript'] }
  ],
  skill:
    [
      { tag: 'javascript', percent: 0.9 },
      { tag: 'react', percent: 0.8 },
      { tag: 'webpack', percent: 0.65 },
      { tag: 'vue', percent: 0.4 },
      { tag: 'http', percent: 0.75 }
    ],
  experience: {
    amount: "300",
    stageList: [
      { id: '1', time: '2023.4', name: '武汉佰钧成信息技术有限公司', job: '前端开发工程师', },
      { id: "2", time: "2019.5", name: '上海中电电子系统科技股份有限公司', job: 'web前端开发工程师' },
      // { id: '3', time: '2018.5', name: '江西财经大学 | 软件工程' },
      { id: "3", time: "2018.5" },

      // { id: '4', time: '2023.4', threshold: '400' }
    ]
  },
  project: [
    {
      projectName: '淘特三⽅流量商品承接⻚',
      projectTime: '2023.2～2023.3',
      projectRole: '前端负责⼈',
      projectDetail: [
        {
          id: 's',
          Icon: SituationSvg,
          desc: '该项⽬是⼀个为了承接抖⾳等端外第三⽅流量⽽存在的落地⻚。原⻚⾯由于⽩屏时间过⻓、交互卡 顿、代码逻辑混乱且实现不规范，经常出现不知名错误且定位困难，直接导致三⽅过来的流量难以承 接住，转化率低造成不必要的损失。'
        },
        {
          id: 't',
          Icon: TaskSvg,
          desc: '为此我和另外⼀名前端负责针对该⼤流量（上线之后五百多万uv）且低端安卓机⽤户数量庞⼤（约占 70%）的场景进⾏⻚⾯优化重构，开发历时2周。该⻚⾯由三个模块组成（红包权益模块+推荐商品模 块+tab商品⻓列表），我主要负责红包权益和tab商品瀑布流模块的开发并且全程跟进项⽬，进度管理，参与从需求评审到新⻚⾯上线之后平稳运⾏的全过程。'
        },
        {
          id: 'a',
          Icon: ActionSvg,
          desc: '前端技术栈：react+typescript,主要解决了完成红包的状态管理，瀑布流⽆限滚动列表优化，优化⻚⾯性能保证⻚⾯帧率⼤于30fps、 安卓⾸屏加载速度⼩于1s、图⽚/动画/请求接⼝/包体积的优化，⻚⾯模块的容灾容错处理。 数据指标: '
        }, {
          id: 'r',
          Icon: ResultSvg,
          desc: [
            "• 数据获取时间从450ms减少⾄230ms,提升50%左右 ",
            "• ⾸屏数据渲染时间由原来186ms减少⾄现在29ms，提升80%左右 ",
            "• 包体积由原来391kb减少⾄现在184kb,缩减52%左右 ",
            "• 前端投⼊20⼈/⽇，bug总量5条，Bug Reopen率0，平均关闭时⻓0.29天 ",
          ]
        }
      ],
    },
    {
      projectName: '淘特游戏⼤厅',
      projectTime: '2021.6～2022.12',
      projectRole: '前端核⼼开发',

      projectDetail: [
        {
          id: 's',
          Icon: SituationSvg,
          desc: '该项⽬主要做各个游戏场的收⼝和分发，旨在提⾼⽤户停留时⻓和下单率。通过迭代⼀系列活动玩法 提⾼留存。游戏⼤厅主要通过玩游戏获取时⻓来赚取星星，可以在星星兑换⻚⾯⽤星星兑换游戏道具 或者购物红包来提⾼游戏时⻓或者下单等。'
        },
        {
          id: 't',
          Icon: TaskSvg,
          desc: '全程参与项⽬的需求评审、设计交互评审、设计前端技术⽅案、技术⽅案实现评审（包括公司现有⽅ 案的调研）、测试⽤例评审、编写符合规范的前端代码、bug⽇清、项⽬上线后系统稳定性的保障（性 能及报错等）。'
        },
        {
          id: 'a',
          Icon: ActionSvg,
          desc: '项⽬第⼀期有4个⻚⾯开发，包含游戏⾸⻚、星星兑换⻚、抽奖⻚⾯、排⾏榜⻚，我负 责⾸⻚（其中⼀个⻚⾯）全部需求的实现及维护，后续迭代⽀持其他⻚⾯的开发。采⽤技术栈为： react、typescript、lottie、swiper 根据设计稿还原出前端⻚⾯，完成了活动主题氛围的换肤、加载和交互的性能优化、图⽚优化、渲染 优化等，游戏⻓列表下滚动跟随的视频单实例播放管理，命令式的弹窗队列组件，游戏时⻓的统计上 报脚本，模块楼层管理、渲染及配置。 数据指标 '
        }, {
          id: 'r',
          Icon: ResultSvg,
          desc: [
            '• 前端可交互时间(tti)从1.5s降到1.1s ',
            '• 主js体积压缩之后409kb,主css70kb ',
            '• 项⽬第⼀期前端投⼊113⼈/⽇（前端开发4⼈，后续迭代前端2⼈）'
          ]
        }
      ]
    },
    {
      projectName: '淘特游戏时⻓统计脚本',
      projectTime: '2022.7～2022.8',
      projectRole: '前端核心开发',

      projectDetail: [
        {
          id: 's',
          Icon: SituationSvg,
          desc: '该项⽬专为游戏⼤厅及各个游戏⻓提供⽤户游戏时⻓的统计服务以及游戏⼤厅流量去向的追踪。'
        },
        {
          id: 't',
          Icon: TaskSvg,
          desc: '参与了需求评审、现有⽅案调研、技术⽅案设计、代码的编写实现、测试bug修复等⼯作'
        },
        {
          id: 'a',
          Icon: ActionSvg,
          desc: '使用的技术栈为preact、js,在开发过程中主要 解决了统计数据准确性（采集和处理）、防作弊和安全性、与宿主⻚ ⾯（⾃研游戏和三⽅接⼊游戏） 相隔离、异常处理、配置能⼒、后续复⽤扩展与维护（如⽀持ui渲染）等问题。'
        }, {
          id: 'r',
          Icon: ResultSvg,
          desc: ['• 上线后保持平稳的运⾏，为游戏⼤厅提供稳定的时⻓统计服务。']
        }
      ],
    },
    {
      projectName: '智慧园区后台管理系统',
      projectTime: '2018.5～2019.5',
      projectRole: '前端负责⼈',

      projectDetail: [
        {
          id: 's',
          Icon: SituationSvg,
          desc: '该项⽬为⽅便⾼效的对园区消防、空调、电梯及⻔禁、硬件设备等管理维护和控制以及相关数据采集 并且可⼤屏可视化进⾏展示。',
        },
        {
          id: 't',
          Icon: TaskSvg,
          desc: '参与系统的需求评审，根据设计稿给出可⾏的技术⽅案进⾏编码实现',
        },
        {
          id: 'a',
          Icon: ActionSvg,
          desc: '前端采用vue+vuex+element-ui技术栈,完成了⽤户⻆⾊权限管理、报警管理、数据报表、楼层电梯管理、设备远程控制，⼤屏实时数据展示，⻚⾯⽂案的国际化处理等功能',
        }, {
          id: 'r',
          Icon: ResultSvg,
          desc: [
            '• 沉淀出⼀套基于 element-ui进⾏⼆次封装的适⽤于公司内部适⽤的公⽤业务组件，树表、树形选择器、树形菜单导航、 基础表格、表单、表单表格等',
            '• 封装过可拖拽的⾃定义指令，并在团队内部使⽤。'
          ],
        }
      ],
    }
  ],
  projectList: [{
    projectName: '淘特年迎财神活动页面',
    projectTime: '2022.12～2023.1',
    projectRole: '前端负责人',
    projectDesc: '该项⽬是淘特2023春节活动玩法，端⾸⻚流量⼊⼝，主要是创新业务的探索，⾸先选择财神模版、然后调⽤ 相机拍摄或者选择相册照⽚、识别⼈脸后裁剪照⽚、合成新照⽚，最后引导分享好友获取红包的活 动玩法。主要完成了前端⼈脸的识别，图⽚编辑合成，财神动效模版轮播展示及优化，打通分享链 路，分享记录列表、被分享记录列表和红包领取记录的分⻚展示',
    projectResult: ['• 前端可交互时间1.5s', '• 前端投⼊20⼈/⽇（2名前端），前端bug总量15个，bug reopen率5%，平均关闭时⻓0.69天']
  }, {
    projectName: '淘特消消乐',
    projectTime: '2020.10～2021.6  ',
    projectRole: '前端核⼼开发',
    projectDesc: '该项⽬是淘特版的消消乐游戏，通过小游戏+购物的玩法提高停留时长和促使下单，负责中⼩需求的技术⽅案编写和代码实现，⼤版本迭代的代码实现。该项目最大的问题在于首屏页面复杂，数据来源多，导致首屏请求数量过多，依赖多方并且串行执行。为了解决上述问题主要完成了多方组件（canvas组件+react组件）通信数据状态管理、数据请求优化、⻚⾯请求封装统⼀管理及首屏请求的优先级、并发、重试、超时等提高页面首屏时间和体验',
    projectResult: []
  }, {
    projectName: '淘特⽉卡（特省卡）',
    projectTime: '2020.5～2020.10',
    projectRole: '前端核⼼开发',
    projectDesc: '对标拼多多省钱⽉卡，完成开卡送⻔槛红包、拼单免单的玩法。负责核⼼代码的实现，红包状态的 管理、商品⻓列表(带tab)优化、react组件库',
    projectResult: []
  }, {
    projectName: '淘特下单返现金',
    projectTime: '2020.5～2020.6',
    projectRole: '前端核⼼开发',
    projectDesc: '该项目为促进用户在指定的商品列表下单，返还一定金额的购物红包，根据视觉稿完成页面还原并保证兼容性，报包括android+ios端以及端外（例如钉钉或支付宝打开）打开url进行跳转，理解整体链路和多个部门人员进行合作开发，与客户端购物车、客户端侧商品详情页面、第三方（支付宝）结算支付流程等协调沟通，进行技术方案的设计，涉及用户权益（红包金额等）前端的容错处理。前端使用React技术栈进行开发，历时一周',
    projectResult: []
  }, {
    projectName: '营销会场活动⻚⾯搭建，模块开发',
    projectTime: '2019.5～2020.5 ',
    projectRole: '前端核⼼开发',
    projectDesc: '营销会场的⻚⾯搭建业务，主要开发适配模块供⻚⾯搭建系统消费。开发并维护12个（共60）业务 模块国际化多语⾔⽅案（i18n）、前端组件单元测试、主题换肤、埋点上报、⻚⾯多端适配、node提效⼩⼯具 ',
    projectResult: []
  }],
  achievement: [
    { id: 'blog', title: '在线博客', subTitle: '', url: 'https://xingguozm.github.io/mobile/blog' },
    { id: 'github', title: 'Github', subTitle: '', url: 'https://github.com' },
    { id: 'library', title: '组件库', subTitle: '', url: 'https://xingguozm.github.io/mobile/library' },
    { id: 'demonstration', title: '在线演示', subTitle: '(建设中)', url: '' },
  ]
};