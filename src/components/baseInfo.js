import React from 'react';
import AccountInfo from './accountInfo.js';
import LatestJob from './latestJob.js';
import MySkills from './mySkills.js';

export default class BaseInfo extends React.Component {
	render(){
		return (
			<div className="base-info">			
				<AccountInfo></AccountInfo>
				<LatestJob></LatestJob>
				<MySkills></MySkills>
			</div>
		)
	}
}