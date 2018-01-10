<template scope='scope'>
<div class="main-display">
    <div class="banner">
        <h1>{{ msg }}: Mughees</h1>

        <el-button type="primary" @click="logout()">logout</el-button>
    </div>
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
            msg: 'Welcome to homepage',
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

<style lang="scss" scoped>
    @import '../assets/styles/hello.scss'
</style>
