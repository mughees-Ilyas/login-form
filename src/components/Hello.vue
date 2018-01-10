<template scope='scope'>
<div class="hello">
    <h1>{{ msg }}: Mughees</h1>

    <el-button type="primary" @click="logout()">logout</el-button>
</div>
</template>

<script>
/**
 * @author: weakgoldfish
 */
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Vue-login',
        }
    },
    methods: {
    
        logout() {
            this.$store.dispatch('UserLogout')
            if (!this.$store.state.token) {
                this.$router.push('/login')
                this.$message({
                    type: 'success',
                    message: 'loged out'
                })
            } else {
                this.$message({
                    type: 'info',
                    message: 'error'
                })
            }
        },
    }
}
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    /*display: inline-block;*/
    margin: 10px 0;
}

a {
    color: #42b983;
}

.list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-complete-leave-active {
    position: absolute;
}
</style>
