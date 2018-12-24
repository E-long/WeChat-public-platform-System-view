<template>
    <div id="MenuSetting">
        <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="id">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.url"></el-input>
            </el-form-item>
            <el-form-item label="权限">
                <el-input v-model="form.type"></el-input>
            </el-form-item> 
            <el-form-item label="是否顶级">
                <el-switch v-model="form.top"></el-switch>
            </el-form-item>
            <el-form-item label="父级ID">
                <el-input v-model="form.fid"></el-input>
            </el-form-item> 
        </el-form>



    <div class="test">
       
        <MenuTree  v-for="item in Menu" :Menu='Menu' :item='item' :parntid="item.parntid" :key="item.id" v-if="item.id==item.parntid">
        </MenuTree>
                
    </div>


    </div>
</template>
<script>
    import MenuTree from "./MenuTree";

export default {
    name:'MenuSetting',
    data () {
        return {
            labelPosition:'left',
            form:{
                top:true
            },
        Menu: [
                {
                    'label': '第一菜单',
                    'id': 0,
                    'parntid': 0
                },{
                    'label': '这二菜单',
                    'id': 1,
                    'parntid': 1
                },{
                    'label': '第一个子菜单',
                    'id': 3,
                    'parntid': 0
                },{
                    'label': '第二个子菜单',
                    'id': 4,
                    'parntid': 1
                },{
                    'label': '第三个子菜单',
                    'id': 5,
                    'parntid': 1
                },{
                    'label': '第四个子菜单',
                    'id': 6,
                    'parntid': 0
                },{
                    'label': '第五个子菜单',
                    'id': 7,
                    'parntid': 6
                }
                ]
        }
    },
    components: {
       MenuTree
    }
    
}
</script>
<style>

</style>
