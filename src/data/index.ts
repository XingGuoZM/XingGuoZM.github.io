import ReactIcon from '../assets/react.svg';
import WebpackIcon from '../assets/webpack.svg';

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
  theme: ['#ff6a00', '#3Eb575', '#1479d7', '#121212'],
  user: [
    { label: '基本信息', value: '李志铭 | 1995 | 男' },
    { label: '联系方式', value: '18969176324' },
    { label: '工作意向', value: '高级前端开发工程师 | 深圳' },
    // { label: '', value: 'github', href: 'https://github.com' },
  ],
  expert: [
    { title: '性能优化', desc: ['网络瓶颈', 'CUP瓶颈', '渲染瓶颈'] },
    { title: 'React', icon: ReactIcon },
    { title: 'hybrid h5' },
    { title: 'webpack', icon: WebpackIcon }
  ],
  experience: {
    amount: "300",
    stageList: [
      { id: "1", time: "2014.9", name: '江西财经大学 | 软件工程', status: "-1", threshold: "100" },
      { id: "2", time: "2018.6", name: '上海中电电子系统科技股份有限公司', job: 'web前端开发工程师', status: "-1", threshold: "200" },
      { id: "3", time: "2019.5", name: '武汉佰钧成信息技术有限公司', job: '前端开发工程师', status: "-1", threshold: "300" },
      { id: '4', time: '2023.4', threshold: '400' }
    ]
  },
  project: [
    {
      projectName: '淘特三⽅流量商品承接⻚',
      projectTime: '2023.2～2023.3',
      projectRole: '前端负责⼈',
      situation: '该项⽬是⼀个为了承接抖⾳等端外第三⽅流量⽽存在的落地⻚。原⻚⾯由于⽩屏时间过⻓、交互卡 顿、代码逻辑混乱且实现不规范，经常出现不知名错误且定位困难，直接导致三⽅过来的流量难以承 接住，转化率低造成不必要的损失。',
      task: '为此我和另外⼀名前端负责针对该⼤流量（上线之后五百多万uv）且低端安卓机⽤户数量庞⼤（约占 70%）的场景进⾏⻚⾯优化重构，开发历时2周。该⻚⾯由三个模块组成（红包权益模块+推荐商品模 块+tab商品⻓列表），我主要负责红包权益和tab商品瀑布流模块的开发并且全程跟进项⽬，进度管理，参与从需求评审到新⻚⾯上线之后平稳运⾏的全过程。',
      action: '前端技术栈：react+typescript,主要解决了完成红包的状态管理，瀑布流⽆限滚动列表优化，优化⻚⾯性能保证⻚⾯帧率⼤于30fps、 安卓⾸屏加载速度⼩于1s、图⽚/动画/请求接⼝/包体积的优化，⻚⾯模块的容灾容错处理。 数据指标: ',
      resultList: [
        "• 数据获取时间从450ms减少⾄230ms,提升50%左右 ",
        "• ⾸屏数据渲染时间由原来186ms减少⾄现在29ms，提升80%左右 ",
        "• 包体积由原来391kb减少⾄现在184kb,缩减52%左右 ",
        "• 前端投⼊20⼈/⽇，bug总量5条，Bug Reopen率0，平均关闭时⻓0.29天"
      ],
    },
    {
      projectName: '淘特游戏⼤厅',
      projectTime: '2021.6～2022.12',
      projectRole: '前端核⼼开发',
      situation: '该项⽬主要做各个游戏场的收⼝和分发，旨在提⾼⽤户停留时⻓和下单率。通过迭代⼀系列活动玩法 提⾼留存。游戏⼤厅主要通过玩游戏获取时⻓来赚取星星，可以在星星兑换⻚⾯⽤星星兑换游戏道具 或者购物红包来提⾼游戏时⻓或者下单等。',
      task: '全程参与项⽬的需求评审、设计交互评审、设计前端技术⽅案、技术⽅案实现评审（包括公司现有⽅ 案的调研）、测试⽤例评审、编写符合规范的前端代码、bug⽇清、项⽬上线后系统稳定性的保障（性 能及报错等）。',
      action: '项⽬第⼀期有4个⻚⾯开发，包含游戏⾸⻚、星星兑换⻚、抽奖⻚⾯、排⾏榜⻚，我负 责⾸⻚（其中⼀个⻚⾯）全部需求的实现及维护，后续迭代⽀持其他⻚⾯的开发。采⽤技术栈为： react、typescript、lottie、swiper 根据设计稿还原出前端⻚⾯，完成了活动主题氛围的换肤、加载和交互的性能优化、图⽚优化、渲染 优化等，游戏⻓列表下滚动跟随的视频单实例播放管理，命令式的弹窗队列组件，游戏时⻓的统计上 报脚本，模块楼层管理、渲染及配置。 数据指标',
      resultList: [
        '• 前端可交互时间(tti)从1.5s降到1.1s ',
        '• 主js体积压缩之后409kb,主css70kb ',
        '• 项⽬第⼀期前端投⼊113⼈/⽇（前端开发4⼈，后续迭代前端2⼈）'
      ]
    },
    {
      projectName: '淘特游戏时⻓统计脚本',
      projectTime: '2022.7～2022.8',
      projectRole: '前端核心开发',
      situation: '该项⽬专为游戏⼤厅及各个游戏⻓提供⽤户游戏时⻓的统计服务以及游戏⼤厅流量去向的追踪。',
      task: '参与了需求评审、现有⽅案调研、技术⽅案设计、代码的编写实现、测试bug修复等⼯作',
      action: '使用的技术栈为preact、js,在开发过程中主要 解决了统计数据准确性（采集和处理）、防作弊和安全性、与宿主⻚ ⾯（⾃研游戏和三⽅接⼊游戏） 相隔离、异常处理、配置能⼒、后续复⽤扩展与维护（如⽀持ui渲染）等问题。',
      resultList: ['• 上线后保持平稳的运⾏，为游戏⼤厅提供稳定的时⻓统计服务。'],
    },
    {
      projectName: '智慧园区后台管理系统',
      projectTime: '2018.5～2019.5',
      projectRole: '前端负责⼈',
      situation: '该项⽬为⽅便⾼效的对园区消防、空调、电梯及⻔禁、硬件设备等管理维护和控制以及相关数据采集 并且可⼤屏可视化进⾏展示。',
      task: '参与系统的需求评审，根据设计稿给出可⾏的技术⽅案进⾏编码实现',
      action: '前端采用vue+vuex+element-ui技术栈,完成了⽤户⻆⾊权限管理、报警管理、数据报表、楼层电梯管理、设备远程控制，⼤屏实时数据展示，⻚⾯⽂案的国际化处理等功能',
      resultList: [
        '沉淀出⼀套基于 element-ui进⾏⼆次封装的适⽤于公司内部适⽤的公⽤业务组件，树表、树形选择器、树形菜单导航、 基础表格、表单、表单表格等',
        '封装过可拖拽的⾃定义指令，并在团队内部使⽤。'
      ],
    }
  ]
};