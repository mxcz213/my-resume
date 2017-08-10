import React from 'react';
import ProjectDetail from './projectDetail.js';

export default class Project extends React.Component {
	constructor(){
		super();
		this.state = {
			project:[
				{
					name:'图文资讯（暂未上线）',
					company:'PPTV',
					description:'主要是做官宣页面，用户入住流程，以及入驻成功之后的用户控制台（包括文章内容创作，文章统计，账号管理等），项目采用的技术栈是reactJs、webpack、es6、antd，由于资源紧缺，前端由我主导，主管做技术支持，做好框架搭建，以便后续新进人员可以进行模块开发。',
					href:'暂未上线'
				},
				{
					name:'聚力云',
					company:'PPTV',
					description:'主要是做官网的开发以及用户后台的业务逻辑的处理，原生的javascript写业务逻辑和定制组件开发，MVC模式架构，echart 做图表，template 模板结合，前后端分离，跨域调接口等。',
					href:'http://www.pptvyun.com/',
				},
				{
					name:'PGC以及媒资系统',
					company:'PPTV',
					description:'PGC主要是针对个体用户签约pptv主站做的视频管理，上传，专辑的业务。媒资系统：公司内部对视频编辑部做的一个媒资信息管理系统，添加上传视频等。',
					href:'http://share.pptv.com/'
				},
				{
					name:'端游手游官网',
					company:'第九城市，寅酷游戏',
					description:'负责公司端游，手游，页游的页面开发，主要是宣传活动页，pc端和mobile端访问的页面。',
					href:''
				}
			]
		}
	}

	render(){
		const project = this.state.project;
		const projectList = project.map((item,index,array) => {
			return <ProjectDetail key={index} title={item}></ProjectDetail>
		})
		return (
			<div className="service-company">
				<h4 className="title">项目经验</h4>
				{projectList}
			</div>
		)
	}
}