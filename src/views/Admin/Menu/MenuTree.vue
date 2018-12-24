<template>

<div>
    {{item.label}}
    <ul style="margin-left:20px;">
        <li v-for="item in Menu" :key="item.id" v-if="item.parntid==parntid&&item.id!=parntid">
         {{item.label}}
         {{parntid}}


            <!-- <MenuTree  v-for="item in Menu" :Menu='Menu' :item='item' :parntid='item.parntid' :key="item.id" v-if="item.parntid==parntid" ></MenuTree> -->

        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:'MenuTree',
    props: [
        'Menu',
        'parntid',
        'item'
    ]

}
</script>

<style>

</style>

