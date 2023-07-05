import React, { useRef } from 'react';
import Header from '../components/PageHeader';
import UserInfo from '../components/UserInfo';
import CompanyInfo from '../components/CompanyInfo';
import TimeLine from '../components/TimeLine';
import Footer from '../components/Footer';
import './Home.css'

export default function Home() {
  const scroller = useRef(null);
  const data = {
    user: [
      { label: '基本信息', value: '李志铭/1995/男' },
      { label: '学校专业', value: '江⻄财经⼤学/软件工程/本科/2014-2018' },
      { label: '联系方式', value: '18969176324' },
      { label: '擅长技能', value: '性能优化、react、移动端h5、webpack' },
      { label: '工作意向', value: '高级前端开发工程师/深圳、杭州、广州、上海' },
      { label: '代码总结', value: 'github', href: 'https://github.com' },
    ],
    company: [
      { name: '武汉佰钧成技术有限责任公司', addr: '杭州', time: '2019.6~2023.3.31', job: '前端开发', work: 'use React develop hybrid h5 page' },
      { name: '上海中电电⼦科技股份有限公司', addr: '杭州', time: '2018.6~2019.6', job: 'web前端开发', work: '使用vue2开发pc后台管理系统' }
    ]
  };
  return <div className='home' ref={scroller}>
    <Header scroller={scroller}>
      <div className='home-header'>个人简历</div>
    </Header>
    <div className='home-content'>
      <UserInfo user={data.user}></UserInfo>
      <CompanyInfo company={data.company} />
      <TimeLine />
      <Footer />
    </div>
  </div>
}