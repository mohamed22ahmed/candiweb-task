<template>
    <nav class="navbar navbar-dark bg-dark justify-content-between px-5 pt-4">
        <a class="navbar-brand">Add Product</a>
        <div class="text-right">
            <router-link to="/addProduct">
                <button class="btn btn-primary my-2 my-sm-0" type="button">
                    Save
                </button>
            </router-link>

            &nbsp;&nbsp;
            <button class="btn btn-danger my-2 my-sm-0" type="submit">
                Delete
            </button>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped></style>
