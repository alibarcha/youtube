<template>
    <div class="errorPage flex justify-content-center align-content-center  ">
        <div class="flex flex-column align-items-center text-center justify-content-center ">
            <h1>404</h1>
            <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="">
            <p>This page isn't available. Sorry about that.</p>
            <RouterLink to="/">
                <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/1x/youtubelogo_30.png" alt="logo">
            </RouterLink>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.errorPage {
    background-color: #f1f1f1;
    height: 100vh;
    width: 100vw;
}
</style>