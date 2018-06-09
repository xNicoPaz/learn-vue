Vue.component('panel', {
	template: `
		<div class="panel panel-primary">
			<panel-content :title="title" :message="message" @close-panel="$emit('close-panel')" ></panel-content>
		</div>`,
	props: [
		'title',
		'message',
	],
	data: function(){
		return {
		};
	}
});

Vue.component('panel-content',{
	template: `
		<div>
			<div class="panel-heading">{{title}} <button class="btn btn-info pull-right" @click="$emit('close-panel')">Ocultar panel<i class="fa fa-close"></i></button></div>
			<div class="panel-body">{{message}}</div>
		</div>`,
	props: [
		'title',
		'message',
	]
});

new Vue({
	el:'#root',
	data: {
		showPanel: true		
	}
});