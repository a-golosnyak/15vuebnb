var app = new Vue({
		el: '#app',
		data: {
			title: sample.title,
			address: sample.address,
			about: sample.about,
			headerImageStyle: {
				'background-image': 'url(sample/header.jpg)'
			},
			amenities: sample.amenities,
			prices: sample.prices,
			contracted: true,
			modalOpen: false,
			message: 'Hello world'
		},
		watch: {
			modalOpen: function() {
				varclassName = 'modal-open';
				if (this.modalOpen) {
					document.body.classList.add(className);
				} 
				else {
					document.body.classList.remove(className);
				}
			},

			message: function(newVal, oldVal) {
				console.log(oldVal, ', ', newVal); 
			}
		}
	});

setTimeout(function() { app.message = 'Message';}, 2000);
