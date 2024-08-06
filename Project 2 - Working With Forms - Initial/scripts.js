members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMembers: {}
        }

    },
    methods: {
        addMember: function() {
            if(this.newMembers.fname && this.newMembers.lname && this.newMembers.instrument){
                this.members.push(this.newMembers);
                this.newMembers = {};
            }else{
                alert('Vixii')
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
