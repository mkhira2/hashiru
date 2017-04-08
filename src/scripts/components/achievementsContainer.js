// import React from 'react'

// var AchievementsContainer = React.createClass({
// 	render: function() {
// 		if (User.getCurrentUser().get('fiveKBadge') === true) {
// 			return (
// 				<div className='achievementsContainer'>
// 					<img src='./images/fivekbadge.png' />
// 				</div>
// 			)
// 		} 
// 		if (User.getCurrentUser().get('tenKBadge') === true) {
// 			return (
// 				<div className='achievementsContainer'>
// 					<img src='./images/tenkbadge.png' />
// 				</div>
// 			)
// 		}
// 		return null
// 	}
// })

// export default AchievementsContainer

// import React from 'react'

// var badgesObj = [ {'name': 'fiveKBadge',
// 				   'path': '/images/fiveKBadge.png',
// 				   'status': 'notEarned'},
// 			      {'path': '/images/tenKBadge.png', 
// 				   'status': 'notEarned'} ]

// var AchievementsContainer = React.createClass({
// 	render: function() {
// 		return (
// 			<div className='achievementsContainer'>
// 				<MakeAchievementsComponent achievements={badgesObj}/>
// 			</div>
// 		)
// 	}
// })

// var MakeAchievementsComponent = React.createClass({
// 	_makeAchievements: function(achievements){
// 		var achievementsArray = []
// 		for(var i = 0; i < achievements.length; i++){
// 			achievementsArray.push(<SingleAchievementComponent badgeImageObj = {achievements[i]} key={achievements.cid}/>)
// 		}
// 		return achievementsArray
// 	},

// 	render: function(){
// 		return(
// 			<div>{this._makeAchievements(this.props.achievements)}</div>
// 		)
// 	}
// })

// var SingleAchievementComponent = React.createClass({
// 	render: function(){
// 		if(this.props.badgeImageObj.status === 'earned'){
// 			var theBadgeImagePath = this.props.badgeImageObj.placeholderPath
// 		}
// 		else{
// 			var theBadgeImagePath = this.props.badgeImageObj.path
// 		}
// 		return(<div className='singleAchievement'>
// 					<img src={theBadgeImagePath} />
// 				</div>)
// 	}
// })

// export default AchievementsContainer