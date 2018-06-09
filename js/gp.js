window.eventHandler = new Vue({
	el: '#eventHandler',
	mounted: function(){
		//Registrar eventos
		this.$on('joinGroupButtonClicked', function(data){
			console.log('You want to join the GP. Good for you buddy');
		});
		this.$on('mouseOverMember', function(data){
			console.log('You have moved the mouse over ' + data.member.first_name);
		});
	}
});

Vue.component('alert-info', {});

Vue.component('member', {
	template: '<li @click="onMouseOverMember"><strong>{{ full_name }}</strong>, de {{ member.age }} años</li>',
	props: [
		"member",
	],
	computed: {
		full_name: function(){
			return this.member.first_name + " " + this.member.last_name;
		}
	},
	methods: {
		onMouseOverMember: function(){
			window.eventHandler.$emit('mouseOverMember', { member: this.member });
		}
	},
});

Vue.component('member-list', {
	template: 
	`
	<div>
		<slot name="header">Cabecera por defecto</slot>
		<ul>
			<member v-for="member in members" :member="member"></member>
		</ul>
		<slot name="footer">Pie por defecto</slot>
	</div>
	`,
	props: [
	"members"
	]
});


new Vue({
	el: '#root',
	data: {
		//Registrar quien es el eventHandler
		eventHandler: window.eventHandler,
		members: 
		[
			{
				first_name: 'Franco Gabriel',
				last_name: 'Ledesma',
				age: 20,
			},
			{
				first_name: 'Nelson',
				last_name: 'Campos',
				age: 20,
			},
			{
				first_name: 'Cecilia',
				last_name: 'Regatuso',
				age: 20,
			},
		]
	}
});