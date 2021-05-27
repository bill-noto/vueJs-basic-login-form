var app = new Vue({
    el: '#app',
    data() {
        return {
            user: [
                {
                    mail: '',
                    pass: ''
                }
            ]
        }
    },
    methods: {
        validation(){
            var mail = document.getElementById('mail').value;
            var pass = document.getElementById('pass').value;
            (!mail || !pass) ? alert('Email & Password required!') : alert('You are now logged in, good job!');
        },
        show(){
            var imp = document.getElementById('pass');
            (document.getElementById('hide').checked == true) ? imp.setAttribute('type', 'text') : imp.setAttribute('type', 'password');
        }
    }
});