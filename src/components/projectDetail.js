import React from 'react';

export default class ProjectDetail extends React.Component {

	render(){
		const infornation = this.props.title;
		return (
			<div className="company">
				<div className="mb10 font-0">
					<span className="span-dw">项目名：{infornation.name}</span>
					<span className="span-dw">所属公司：{infornation.company}</span>
				</div>
				<div className="mb10">
					<p className="">项目描述：{infornation.description}</p>
				</div>
				<div className="mb10">
					{
						infornation.href 
						? <p className="main-color">项目地址：<a href={infornation.href} target="_blank">{infornation.href}</a></p>
						: <p className="main-color">游戏更新比较快，可能已经下线了：(</p>

					}
				</div>
			</div>
		)
	}
}