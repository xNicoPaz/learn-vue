Vue.component('alert-success',{
		props: ['title', 'message'],
		template: '<div><button @click="toggleAlert">X</button><div v-show="show" class="alert alert-success col-lg-12">'+
			'<strong>{{ title }}</strong> {{ message }}'+
			'</div></div>',
		
		data: function(){
			return {
				show: true,
			};
		},
		methods: {
			toggleAlert: function(){
				this.show = !this.show;
			}
		}
	}
);

Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',
	data: function(){
		return { tasks: [
					{description: "Hablar con mi amor", complete: true},
					{description: "Decirle a mi mama que me despierte cuando se valla por si acaso", complete: false},
					{description: "Estar listo para la entrevista mañana a las 10:30", complete: true}
				]
		};
	}
});

Vue.component('task', {
	template: "<li><slot></slot> Creador: {{ creator }} </li>",
	data: function(){
		return {
			creator: "Nico Paz"
		};
	},
});

new Vue({
	el: "#root"
});