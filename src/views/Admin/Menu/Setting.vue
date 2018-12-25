<template>
    <div id="MenuSetting">
        <el-form :model='form' ref="form" :rules="rules" :label-position="labelPosition" label-width="80px">
            <el-form-item label="名称" prop='name'>
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="id" prop='sid'>
                <el-input type='number' v-model="form.sid"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop='url'>
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item label="权限" prop='user_level'>
                <el-tooltip class="item" effect="dark" content="选择最高可访问者" placement="top">
                  <el-select v-model="form.user_level" placeholder="请选择">
                    <el-option
                    v-for="item in userLevel"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                    </el-option>
                 </el-select>
                </el-tooltip>
            </el-form-item> 
            <el-form-item label="父级ID" prop='fid'>
                <el-input  type='number' v-model="form.fid"></el-input>
            </el-form-item> 
            <el-form-item label="快捷选择">
                <el-tree :data="Menu" :props="defaultProps"  @node-click="handleNodeClick" style="margin-top:6px"></el-tree>
            </el-form-item>
            <el-form-item align=center>
                  <el-button type="primary" @click="submitForm('form')">提交</el-button>
                  <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
    import getTrees from "@/components/tree";
export default {
    name:'MenuSetting',
    data () {
        return {
            labelPosition:'left',
            form:{
                fid:0
            },
            rules:{
                name: [
                    { required: true, message: '请输入导航名', trigger: 'blur' }
                ],
                sid: [
                    { required: true, message: '请输入导航id', trigger: 'blur' }
                ],
                url: [
                    { required: true, message: '请输入访问地址', trigger: 'blur' }
                ],
                user_level: [
                    { required: true, message: '请输入用户权限', trigger: 'blur' }
                ],
                fid: [
                    { required: true, message: '请输入父级id，0为顶级导航', trigger: 'blur' }
                ]
            },
        Menu:[
           ]
        ,
        userLevel:[],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
        }
    },
    methods: {
       handleNodeClick(data) {
           this.form.fid=data.sid;
      },
       submitForm(formName) {
           let _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
              _this.$post('/admin/menu/add',_this.form).then(resp=>{
                 window.reload()
              })
          } else {
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }  
    },
    created () {
       let _this=this;
       this.$get('/admin/menu/get').then(resp=>{
            _this.Menu=getTrees(resp.data,0)
       })

        this.$get('/admin/user/user_level').then(resp=>{
            _this.userLevel=resp.data;
       })

             
    },
    components: {
       
    }
    
}
</script>
<style>

</style>
