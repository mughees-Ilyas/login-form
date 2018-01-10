<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="5" :offset="9">
        <el-tabs class="regTable" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane  label="login" name="first">
            <el-col >
              <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                    <el-form-item
                      prop="email"
                      label="email address"
                      :rules="rules.email"
                    >
                      <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="password"
                    :rules = "rules.password"
                    >
                      <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">login</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="Registration" name="second">
            <Register></Register>
          </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'login',
    data() {
        return {
            dynamicValidateForm: {
                email: '',
                password: ''
            },
            activeName: this.$store.state.activeName,
            rules: {
                email: [{
                        required: true,
                        message: 'enter email address',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        trigger: 'blur'
                    }
                ],
                password: {
                    required: true,
                    message: 'enter password',
                    trigger: 'blur'
                }
            }
        }
    },
    components: {
        Register
    },
    methods: {
        handleClick(tab, event) {},
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.dynamicValidateForm;
                    api.UserLogin(opt).then(({
                        data
                    }) => {
                        
                        if (data.success) {
                            this.$message({
                                type: 'success',
                                message: 'login success'
                            })
                            this.$store.dispatch('UserLogin', data.token)
                            this.$store.dispatch('UserName', data.email)
                            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                            this.$router.push({
                                path: redirect
                            })
                        } else {
                            this.$message({
                                type: 'info',
                                message: 'login failed'
                            })
                        }
                    })
                } else {
                    console.log('Error Submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss">
.el-col {
    // margin-bottom:
}
.regTable {
    background-color: white;
    border-radius: 4px;
    height: 100%;
    padding-bottom:15px;
    position: relative;
    width: 420px;
}

.el-tabs__item {
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    width: 200px;
    color: rgb(255, 255, 255);
    background-color: rgb(65, 65, 65);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px 0px inset;
}

.is-active {
    color: rgb(61, 70, 77)!important;
    background-color: rgb(255, 255, 255);
    box-shadow: none;
}

.el-form {
    padding-right: 20px
}
.el-tabs__active-bar {
    background-color:transparent!important;
}
</style>
