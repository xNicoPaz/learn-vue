Vue.component('tabs', {
	template: `
	<div>
		<div class="tabs">
			<ul>
				<li v-for="tab in tabs">{{ tab.name }}</li>
			</ul>
		</div>
		<div>
			<slot></slot>
		</div>
	</div>
	`,
	data: function(){
		return {
			tabs: []
		};
	},
	created: function(){
		this.tabs = this.$children;
	}
});

Vue.component('tab', {
	template: `
		<div><slot></slot></div>
	`,
});

var app = new Vue({
	el: '#root'
});2