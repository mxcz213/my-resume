import React from 'react';
import BaseInfo from './baseInfo';
import WorkExprience from './workExperience';
import ProjectExprience from './projectExperience';

export default class SpaceInfo extends React.Component {
	render(){

		return (
			<div className="base-wrapper">
				<WorkExprience></WorkExprience>
				<BaseInfo></BaseInfo>
				<ProjectExprience></ProjectExprience>
			</div>
		)
	}
}