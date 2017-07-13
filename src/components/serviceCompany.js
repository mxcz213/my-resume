import React from 'react';
import Company from './company.js';

export default class ServiceCompany extends React.Component {
	constructor(){
		super();
		this.state = {
			companys:[
				{
					name:'PPTV',
					job:'前端开发工程师',
					startTime:'2015-07',
					endTime:'至今',
					department:'云平台前端部',
					description:'负责公司项目聚力云的部分页面开发，管理员后台的全部需求开发，以及PGC的用户端和管理员后台的开发，接手新媒资的系统做维护和新需求开发，bug调试上线。',
					point:'原生js处理业务逻辑，template模板，使用部门原生封装的js工具集和组件构建mvc模式的项目。'
				},
				{
					name:'第九城市',
					job:'前端开发工程师',
					startTime:'2014/7',
					endTime:'2015/7',
					department:'平台研发部',
					description:'负责开发公司运营游戏—奇迹归来官网 活动 以及火瀑云平台页面的前端开发，以及admin后台数据统计之类的业务逻辑的开发。',
					point:'使用bootstrap做页面UI库，处理游戏数据统计业务的后台功能，游戏官网开发。'
				},
				{
					name:'寅酷游戏',
					job:'前端开发工程师',
					startTime:'2013/8',
					endTime:'2014/7',
					department:'平台研发部',
					description:'负责公司端游，手游，页游的页面开发，主要是宣传活动页，pc端和mobile端访问的页面。',
					point:'div+css 做页面样式布局，jquery 的dom操作 动画等处理业务和页面相关效果。'
				}
			]
		}
	}

	render(){
		const companys = this.state.companys;
		const companylist = companys.map((item,index,array) => {
			return <Company key={index} title={item}></Company>
		})
		return (
			<div className="service-company">
				<h4 className="title">工作经验</h4>
				{companylist}
			</div>
		)
	}
}