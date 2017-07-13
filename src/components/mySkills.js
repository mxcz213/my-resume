import React from 'react';

export default class MySkills extends React.Component {
	constructor(){
		super();
		this.state = {
			mySkill:[
				'熟悉html,css,javascript,有处理IE，谷歌，火狐等浏览器兼容问题的经历。',
				'对前端mvc架构有一定的理解，参与公司原生js封装的mvc库，可以自由扩展。',
				'熟悉前端一些ui框架如bootstrap,antd，熟悉reactjs结合antdUI组件，使用es6语法，采用webpack打包的项目，具备调试js代码的能力。',
				'近两年项目都是写原生js代码，进行原生js的封装和业务逻辑的处理。',
				'熟悉html5的新规范和css3，用这些新特性做过移动端网页。',
				'了解nodejs,写过一些小demo，了解php,java等后端语言，可以跟后端开发进行良好的接口对接和联调。',
				'工作认真，不懂的会很快去学习并投入到项目中。',
				'热爱前端，关注新技术，希望新项目可以用到这些前沿技术框架。',
				'抗压能力强，有分析问题与解决问题的能力，团队精神，协调和沟通能力。'
			]
		}
	}
	render(){
		const skills = this.state.mySkill;
		const skillStr = skills.map((item,index,array) => {
			return <p key={index + 1}>{index + 1}、{item}</p>
		})
		return (
			<div className="mySkill shadow-layout">
				<h4 className="title">我的技能</h4>
				<div className="mySkill-list mt10">
					{skillStr}
				</div>
			</div>
		)
	}
}