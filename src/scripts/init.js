const init = function() {
	const findCookie = function(targetKey) {
		const cookies = document.cookie.split(';')
		let targetVal =
		cookies.forEach(function(cookie){
			let key = cookie.split('=')[0].trim(),
				val = decodeURIComponent(cookie.split('=')[1])
			if (key === targetKey) {
				targetVal = val
			}
		})
		return targetVal
	}
	const app_name = 'hashiru'
	const user = findCookie(app_name + '_user')
	if (user) {
		localStorage.setItem(app_name + '_user',user)
	}
	else {
		localStorage.removeItem(app_name + '_user')
	}
	return app_name
}

export default init