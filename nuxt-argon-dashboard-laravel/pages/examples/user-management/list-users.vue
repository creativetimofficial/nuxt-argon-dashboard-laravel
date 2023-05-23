<template>
    <ArgonAlert class="mx-4 p-3 mt-4" color="danger">
        Add, Edit, Delete features are not functional. This is a PRO feature! Click
        <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel" target="_blank" class="text-dark font-weight-bolder">here</a> to see the PRO product.
    </ArgonAlert>
    <div class="card shadow-lg mx-4 p-3 mt-4">
        <div class="d-flex justify-content-between px-4 pt-3">
            <h5 class="font-weight-bolder mb-0">Users List</h5>
            <button type="button" class="btn base-button btn-icon btn-fab btn-primary btn-sm"
                @click.prevent="useToast('error', 'This is a PRO feature.')">
                <span class="btn-inner--text">Add User</span>
            </button>
        </div>
        <div class="mt-4">
            <div class="table-responsive">
                <table id="user-table" class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CREATED AT</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-sm font-weight-normal">Admin</td>
                            <td class="text-sm font-weight-normal">admin@jsonapi.com</td>
                            <td class="text-sm font-weight-normal">2023-04-03 11:42:15</td>
                            <td class="text-sm font-weight-normal">
                                <div class="d-flex align-items-center ms-auto">
                                    <div class="cursor-pointer edit">
                                        <i :class="`fas fa-user-edit text-secondary action`"></i>
                                    </div>
                                    <div class="mx-3 cursor-pointer delete">
                                        <i :class="`fas fa-trash text-secondary action`"></i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script setup>
import { DataTable } from "simple-datatables";
definePageMeta({
    middleware: ["auth"],
});

let usersListTable;
onMounted(() => {
    if (document.getElementById("user-table")) {
        usersListTable = new DataTable("#user-table", {
            searchable: false,
            sortable: false,
            fixedHeight: true,
        });
        handleButtons();

        usersListTable.on('datatable.sort', function () {
            handleButtons();
        })

        usersListTable.on('datatable.perpage', function () {
            handleButtons();
        });

        usersListTable.on('datatable.page', function () {
            handleButtons();
        });
    }
})
const handleButtons = () => {
    document.querySelectorAll(".action").forEach(function (el) {
        el.addEventListener("click", async function () {
            useToast('error', 'This is a PRO feature.');
        });
    });
}
</script>
