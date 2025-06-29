<template>
    <!-- <slot></slot> -->
    <!-- <slot name="name"></slot> -->
    <!-- <div class="p" v-if="$slots.name">
        条件插槽
        <slot name="name"></slot>
    </div> -->
    <slot name="ht" :text="props.greetingMessage" :count="props.age"></slot>


</template>
    
<script setup lang='ts'>
    const props={
        greetingMessage:'nihao',
        name:"ht",
        age:33
    }
</script>
    
<style>
    
</style>
