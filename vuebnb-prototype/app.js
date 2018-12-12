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
	methods: {
		myMethod: function(){
			return this.message + ' World';
		}
	},
	watch: {
		modalOpen: function() {
			var className = 'modal-open';
			if (this.modalOpen) {
				document.body.classList.add(className);
			} 
			else {
				document.body.classList.remove(className);
			}
		},

		message: function(newVal, oldVal) {
			console.log(oldVal, ', ', newVal); 
			alert(oldVal + '  ' + newVal);
		}
	},
	beforeCreate: function (){},
	created: function (){
		document.addEventListener('keyup',escapeKeyListener);
	},
	beforeMount: function (){},
	mounted: function (){},
	beforeUpdate: function (){},
	updated: function (){},
	beforeDestroy: function (){
		alert("beforeDestroy section");
	},
	destroyed: function (){
		document.removeEventListener('keyup', this.escapeKeyListener);
		alert("destroyed section");
	}
});

function escapeKeyListener(evt) {
	if (evt.keyCode === 27 &&app.modalOpen) {
		app.modalOpen = false;
	}
}

alert(app.myMethod());


/*
number=0;
setInterval(function() { 
	
	app.message = 'Message ' + number;
	number++;
}, 1500);
*/
