<template lang="html">
  <div class="">
    <el-form :model="registerValidateForm" label-width="100px"  ref="registerValidateForm">
          <el-form-item
            prop="email"
            label="email address"
            :rules="rules.email"
          >
            <el-input v-model="registerValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
          prop="password"
          label="password"
          :rules = "rules.password"
          >
            <el-input type="password" v-model="registerValidateForm.password"></el-input>
          </el-form-item>
          <el-form-item
          prop="checkPass"
          label="password (re-type)"
          :rules = "rules.checkPass"
          >
            <el-input type="password" v-model="registerValidateForm.checkPass"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('registerValidateForm')">Register</el-button>
    </el-form>
  </div>
</template>

<script>
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'Register',
    data() {
        
        return {
            registerValidateForm: {
                email: '',
                password: '',
                checkPass: '',
                first: 'first'
            },
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
                password: [{
                        required: true,
                        trigger: 'blur'
                    }
                ],
                checkPass: [{
                        required: true,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
       
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.registerValidateForm;
                    api.userRegister(opt).then(({
                        data
                    }) => {
                        if (data.success) {
                            this.$message({
                                type: 'success',
                                message: `Registered successfully`
                            })
                            this.$router.go(0)
                            this.$router.push('/login')
                        } else {
                            if (data.reason) {
                                this.$message({
                                    type: 'info',
                                    message: data.reason
                                })
                            } else {
                                this.$message({
                                    type: 'info',
                                    message: 'registration failed'
                                })
                            }
                            
                        }
                    }).catch((err) => {
                        console.log(err);
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