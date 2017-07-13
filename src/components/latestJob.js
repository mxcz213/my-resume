import React from 'react';

export default class LatestJob extends React.Component {
	render(){
		return (
			<div className="latest-job shadow-layout font-0 mb20">
				<div className="inline-block job">
					<h4 className="title">最近工作</h4>
					<p>职位：web前端开发工程师</p>
					<p>公司：PPTV</p>
					<p>行业：互联网</p>
				</div>
				<div className="inline-block school">
					<h4 className="title">最高学历/学位</h4>
					<p>学校：长沙理工大学</p>
					<p>专业：计算机应用技术</p>
					<p>学历/学位：大专</p>
				</div>
			</div>
		)
	}
}