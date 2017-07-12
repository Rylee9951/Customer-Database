let htmlStr = ''

customers.results.map(function(item){
	htmlStr += `
	<div class="contact">
		<img class="image" src="${item.picture.large}"/>
		<h2 class="name">${item.name.first} ${item.name.last}</h2>
		<p class="email">${item.email}</p>
		<p class="address">${item.location.street} ${item.location.city} ${item.location.state} ${item.location.postcode}</p>
		<p class="mobile">${item.cell}</p>
		<p class="social">${item.id.value}</p>
	</div>
	`
})

document.querySelector('#container').innerHTML += htmlStr