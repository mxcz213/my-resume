import React from 'react';

export default class Company extends React.Component {
	render(){
		const infornation = this.props.title;
		return (
			<div className="company">
				<div className="mb10 font-0">
					<span className="span-dw">公司：{infornation.name}</span>
					<span className="span-dw">职位：{infornation.job}</span>
				</div>
				<div className="mb10 font-0">
					<span className="span-dw">部门：{infornation.department}</span>
					<span className="span-dw">在职时间：{infornation.startTime}-{infornation.endTime}</span>
				</div>
				<div className="mb10">
					<p className="">工作内容：{infornation.description}</p>
				</div>
				<div className="mb10">
					<p className="main-color">项目所用知识点：{infornation.point}</p>
				</div>
			</div>
		)
	}
}