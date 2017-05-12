<template>
    <a href="javascript:void(0)"
        class="sidebar-toggle"
        data-toggle="offcanvas"
        role="button"
        @click="handleSidebarToggle">
      <span class="sr-only">Toggle navigation</span>
    </a>
</template>

<script type="text/javascript">
    export default {
        data: function () {
            return {
                clickable: true
            }
        },
        methods: {
            handleSidebarToggle() {
                document.body.classList.toggle('sidebar-collapse');
            }
        }
    }
</script>
