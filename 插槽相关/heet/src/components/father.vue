<script setup>
    import son from "./son.vue"
</script>

<template>
    <!-- <son>
        默认插槽:name="default"
 	</son> -->
    <br>
    <!-- <son>
        <template v-slot:name>
            具名插槽
        </template>
 	</son> -->
    <!-- <son>
        <template #name>
            具名插槽
        </template>
 	</son> -->
     <br>

    <!-- <son v-slot="ht" >
       作用域插槽{{ ht.text }}
 	</son> -->
    
    <son >
        <template #ht="fatherprop">

            作用域插槽{{ fatherprop.count }}
        </template>
 	</son>


</template>
