<template>
<div id="app">
<div class="company_login_banner_wrapper">
    <img class="company_login_banner_logo" src="https://d37mc7632t0v7x.cloudfront.net/images/design_assets/icon_logo_transparent.png">
    <div class="company_login_header headline_two_white">UNTERNEHMENSPORTAL</div>
    <div class="company_login_logo_separator"></div>
</div>
<div class="company_login_background">
    <img class="company_login_background_img" src="./assets/logo.png">
</div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
 @import 'app.css'
</style>
