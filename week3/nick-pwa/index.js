var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Nick!'
  },
  methods: {
      changeMsg: function(){
          this.message= "Hi Nick again!";
      }
  }
})
