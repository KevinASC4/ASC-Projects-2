
// Define a new component called todo-item
Vue.component('cisco-student', {
    props: ["student"],
  template: '<li>{{student}}</li>'
});

var app = new Vue({
    el: "#app",
    data: {
        message: "Nick is really cool too",
        message2: "Nick is sorta kinda cool",
        message3: "You loaded this page on" + new Date(),
        seen:false,
        students: [
            "Oskar",
            "Samuel",
            "Noor",
            "Ellis",
            "Jonathan",
            "Adeola",
            "Sharan",
            "Ambrose",
            "Kevin",
            "Joel",
            "Denzel",
            "Nick",
            "Nigel",
            "Jared",
            "Jason",
            "Anthony",
            "Abakir"
        ]
    },
    methods:{
        showDiv: function(){
            this.seen = !this.seen; 
        }
    }
});