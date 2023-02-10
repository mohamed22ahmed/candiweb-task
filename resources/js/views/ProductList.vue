<template>
    <products-nav />

    <div class="main_div">
        <div class="product row" v-for="product in products" :key="product.id">
            <div class="col-md-2 p-2">
                <input type="checkbox" class="delete-checkbox" :id="product.id" :value="product.id" v-model="checkedNames" >
            </div>
            <div class="col-md-10 p-5">
                <div class="row">{{ product.sku }}</div>
                <div class="row">{{ product.name }}</div>
                <div class="row">{{ product.price }} $</div>
                <div class="row">{{ product.weight }} KG</div>
            </div>
        </div>
    </div>


    <hr>
    <div class="text-center pb-5 footer">Scandiweb Test assignment</div>
</template>

<script>
import ProductsNav from '../components/ProductsNav.vue'

export default {
  components: { ProductsNav },
    data() {
        return {
            checkedNames: [],
            products: [
                {
                    id: 1,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 2,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 3,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 4,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 5,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 6,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 7,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 8,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 9,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 10,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 11,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 12,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 13,
                    sku: "sdfff-55",
                    name: "Mohamed",
                    price: 20,
                    weight: 20,
                },
                {
                    id: 14,
                    sku: "sdfff-55",
                    name: "ahmed",
                    price: 20,
                    weight: 20,
                },
            ],
        };
    },

    methods: {
        even(numbers) {
            return numbers.filter((number) => number % 2 === 0);
        },
    },
};
</script>

<style>
.main_div {
    padding-top: 30px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 80px;
    margin: 20px;
    height: 100vh;
}

.product {
    border: black 1px solid;
}

.delete-checkbox {
    margin-left: 10px;
    padding-top: 50px;
}

.footer {
    font-size: 20px;
    font-weight: bold;
}
</style>
