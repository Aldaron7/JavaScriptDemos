<template>
    <div class="course-list">
        <h1>Courses</h1>
        <div v-for="course in courses" v-bind:key="course.id">
            <div v-if="!(editing == course.id)">
                <label @click="setEdit(course)">{{course.name}}</label>
                <button @click="removeCourse(course)">Del</button>
            </div>
            <div v-else>
                <input type="text" v-model="course.name" v-on:keyup.enter="saveCourse(course)"/>
            </div>
        </div>
        <div v-if="!editing">
            <input type="text" v-on:keyup.enter="addCourse(courseName)" v-model="courseName" placeholder="Course name"/>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'App',
        data() {
            return {
                ROOT_URL: 'http://localhost:3000/courses',
                courses: [],
                courseName: '',
                editing: null,
            }
        },
        created() {
            this.getCourseList();
        },
        methods: {
            getCourseList() {
                axios
                    .get(this.ROOT_URL)
                    .then(res => {
                        this.courses = res.data;
                    })
                    .catch(error => console.log(error));
            },
            addCourse(name) {
                if (name.length > 0) {
                    axios
                        .post(this.ROOT_URL, {name})
                        .then(res => {
                            this.courses.push(res.data);
                            this.courseName = '';
                        })
                        .catch(error => console.log(error));
                }
            },
            setEdit(course) {
                this.editing = course ? course.id : null;
            },
            saveCourse(course) {
                this.setEdit(course);
                axios
                    .put(`${this.ROOT_URL}/${course.id}`, {...course})
                    .then(res => {
                        console.log(res.data);
                        this.setEdit(null);
                    })
                    .catch(error => console.log(error));
            },
            removeCourse(course) {
                axios
                    .delete(`${this.ROOT_URL}/${course.id}`)
                    .then(res => {
                        this.courses = this.courses.filter(c => c.id != course.id);
                    })
                    .catch(error => console.log(error));
            }
        },
    }
</script>

<style scoped>
    .course-list {
        background-color: rebeccapurple;
        padding: 10px;
        width: 50%;
        text-align: center;
        margin: 0 auto;
        color: white;
    }

    button {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>