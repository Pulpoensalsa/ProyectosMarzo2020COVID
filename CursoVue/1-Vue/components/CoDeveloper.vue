<template lang="html"></template>

<script>
    export default{
        name:"CoDeveloper",
        props:{
            avatar:{
                type: String,
                required: true,
                validator(value) {
                    return value.starsWith("http");
                }
            },
            name : {
                type : String ,
                required : true
            },
            login: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required : true
            },
            company: {
                type : String, 
            },
            repos : {
                type: Number
            },
            gists: {
                type: Number
            }

        }
    }
</script>