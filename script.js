console.log('JS OK!')



const app = new Vue({
    el: '#app', 
    data: {
        emails:[],
    },

    methods:{
        generateEmails(){
                for (let i = 0; i < 10; i++){
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
    
                            const randomEmail = response.data.response;
                            console.log(randomEmail)

                            this.emails.push(randomEmail)                            
                });
            }
        },

    },

    mounted(){
        this.generateEmails()

    }
});

