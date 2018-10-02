<template>
    <div id="app" :class="{'red': checked}">
        <label>Name:</label>
        <input type="text" v-model="name">
        <p>{{name}}</p>

        <input type="checkbox" v-model="checked">
        <span>Am I checked? {{checked ? 'Yes' : 'No' }}</span>

        <h1 :style="headingStyle">Shopping List</h1>
        <ul>
            <li v-for="item in groceries" :key="item.id">{{item.quantity}}x {{item.name}} {{item.date | date}}</li>
        </ul>

        <h1>Persons</h1>
        <ul>
            <li v-for="(p, index) in people" :key="index">{{p}}</li>
        </ul>
        <form v-on:submit.prevent="addPerson">
            <input type="text" v-model="person"/>
            <button>Add {{ person}}</button>
        </form>
    </div>
</template>
<script>
    import {convertDateToString} from "./filters/date.filter";


    export default {
        name: 'App',
        data: function () {
            return {
                name: '',
                checked: false,
                groceries: [
                    {
                        id: 1,
                        name: 'Pizza',
                        quantity: 1,
                        date: new Date(2000, 5, 29)
                    },
                    {
                        id: 2,
                        name: 'Hot Sauce',
                        quantity: 5,
                        date: new Date(1994, 10, 25)
                    },
                    {
                        id: 3,
                        name: 'Salad',
                        quantity: 1,
                        date: new Date(1973, 4, 15)
                    },
                    {
                        id: 4,
                        name: 'Water',
                        quantity: 1,
                        date: new Date(1954, 2, 5)
                    },
                    {
                        id: 5,
                        name: 'Yoghurt',
                        quantity: 1,
                        date: new Date(2005, 12, 31)
                    }
                ],
                headingStyle: {
                    color: 'green',
                    fontSize: '20 px',
                    textAlign: 'center',
                },
                person: '',
                people: [],
            }
        },
        methods: {
            addPerson: function () {
                if (this.person) {
                    this.people.push({id: this.people.length, name: this.person});
                    this.person = '';
                }
            }
        },
        // filters: {
        //     date: convertDateToString,
        // }
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #1f2d82;
        margin-top: 60px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: block;
    }

    #app.red {
        color: red;
    }
</style>