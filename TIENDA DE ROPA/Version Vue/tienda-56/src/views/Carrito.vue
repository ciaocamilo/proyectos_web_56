<template>
    <div>
        <h1>${{precio_total}}</h1>
    </div>
</template>
<script>
export default {
    data () {
        return {
            precio_total: 0
        }
    },
    created () {
        this.precio_total = this.$route.params.total
    }
}
</script>