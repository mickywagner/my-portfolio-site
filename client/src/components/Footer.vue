<template>
    <div class="footer">
        <v-list
            color="light-blue darken-4"
        >   
            <v-list-item>
                <a href="https://github.com/mickywagner">
                <v-icon color="white"
                >mdi-github</v-icon>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="https://www.linkedin.com/in/michaela-wagner/">
                <v-icon color="white"
                >mdi-linkedin</v-icon>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="https://www.facebook.com/michaela.wagner.545/">
                <v-icon color="white"
                >mdi-facebook</v-icon>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="https://www.instagram.com/mickywagner/">
                <v-icon color="white"
                >mdi-instagram</v-icon>
                </a>
            </v-list-item>
        </v-list>
        <v-spacer></v-spacer>
        <v-list
            color="light-blue darken-4"
            dark
        >
            <v-list-item>
                Michaela Wagner © 2020
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100vw;
    display: flex;
    background: #01579b;
}

.v-list {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
}

.v-list-item {
    padding: 0 5px;
}

.v-icon {
    background: orange;
    padding: 5px;
    border-radius: 5px;
}

a:hover {
    text-decoration: none;
}

</style>