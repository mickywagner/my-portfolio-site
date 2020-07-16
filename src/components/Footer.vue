<template>
    <div class="footer">
        <ul>
            <li>Michaela Wagner</li>
            <li>Github Link</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    background: #2c3e50;
    width: 100vw;
    color: white;
    display: flex;
    justify-content: center;
}

ul {
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        padding: 0 10px;
    }
}
</style>