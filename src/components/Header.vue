<template>
    <div class="header">
        <div class="container">
            <div class="logo">
               <h3>Gaelle</h3>
            </div>
            <div class="info">
                <div class="links">
                    <router-link class="link" to="/">Home</router-link>
                    <router-link class="link" to="/products">Products</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "headerCom"
}
</script>

<style>
.header {
   padding: 10px 0;
}

.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header .container .links {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header .container .links .link.router-link-exact-active {
  color: #42b983 !important;
} 
</style>