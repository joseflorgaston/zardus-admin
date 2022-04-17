<template>
    <div class='container-fluid col-12 col-lg-12'>
        <decrease-header link="decrease/create"></decrease-header>
        <v-data-table :headers="headers" :items="items" :server-items-length="count" :page="page"
            :items-per-page="itemsPerPage" @update:page="nextPage" @update:items-per-page="otherItemCount"
            :loading="loading" :footer-props="{
                itemsPerPageOptions: [5, 10, 15],
            }">
            <template v-slot:[`item.decreaseDate`]="{ item }">
                <shared-formatted-date :date="item.decreaseDate || ''" :hasHour="false"></shared-formatted-date>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon @click="decreaseDetails(item)" v-bind="attrs" v-on="on">
                            <v-icon color="primary" title="editar">mdi-eye</v-icon>
                        </v-btn>
                    </template>
                    <span>Detalles de Merma</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon @click="editDecrease(item)" disabled v-bind="attrs" v-on="on">
                            <v-icon color="primary" title="editar">mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>Editar Merma</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon @click="openDeleteDialog(item)" v-bind="attrs" v-on="on"
                            :disabled="item.inOrder > 0">
                            <v-icon color="error" title="eliminar">mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    <span>Deshacer Merma</span>
                </v-tooltip>
            </template>
        </v-data-table>
        <v-dialog v-model="viewDialog" persistent max-width="500">
            <view-decrease-dialog :item="editedItem" title="Merma"></view-decrease-dialog>
        </v-dialog>
        <v-dialog v-model="deleteDialog" persistent max-width="500">
            <delete-dialog :editItem="editedItem" title="Merma" deleteUrl="/api/decrease" :getUrl="`/api/decrease/${(this.page - 1) * this.itemsPerPage}/${this.itemsPerPage
            }`"></delete-dialog>
        </v-dialog>
    </div>
</template>
<script>
import DecreaseHeader from "~/components/Headers/DecreaseHeader.vue";
import DeleteDialog from '~/components/Dialogs/Decrease/DeleteDialog.vue'
import ViewDecreaseDialog from '~/components/Dialogs/Decrease/ViewDecreaseDialog.vue';
export default {
    components: { DecreaseHeader, DeleteDialog, ViewDecreaseDialog },
    auth: true,
    computed: {
        items: {
            get() {
                return this.$store.state.items
            },
            set(values) {
                this.$store.commit('setItems', values)
            },
        },
        count() {
            return this.$store.state.count
        },
        viewDialog() {
            return this.$store.state.dialog;
        },
        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog
            },
            set() {
                this.$store.commit('setDeleteDialog')
            },
        },
    },
    data: () => ({
        headers: [
            {
                text: 'Fecha',
                value: 'decreaseDate',
                class: 'header-color white--text',
            },
            {
                text: 'Motivo',
                value: 'description',
                class: 'header-color white--text',
            },
            {
                text: 'Comprobante',
                value: 'invoiceNumber',
                class: 'header-color white--text',
            },
            {
                text: 'Acciones',
                value: 'actions',
                class: 'header-color white--text',
            },
        ],
        loading: true,
        page: 1,
        itemsPerPage: 10,
        editedItem: {}
    }),
    async beforeMount() {
        await this.getDecreases()
    },
    methods: {
        async decreaseDetails({ _id }) {
            try {
                this.$store.commit('setLoading')
                this.editedItem = await this.$axios.$get("/api/decrease/" + _id);
                console.log(this.editedItem);
                this.$store.commit('setDialog');
            } catch (error) {
                this.$store.commit('setError', 'Ha ocurrido un error');
            } finally {
                this.$store.commit('setLoading');
            }
        },
        openDeleteDialog(item) {
            this.editedItem = item
            this.$store.commit('setDeleteDialog')
        },
        editDecrease({ _id }) {
            this.$router.push({
                path: '/decrease/create',
                query: { _id: `${_id}` },
            })
        },
        async nextPage(value) {
            this.page = value
            await this.getDecreases()
        },
        async otherItemCount(value) {
            this.itemsPerPage = value
            await this.getDecreases()
        },
        async getDecreases() {
            this.loading = true
            this.$store.commit('setLoading')
            await this.$store.dispatch('getDecreases', {
                page: this.page,
                itemsPerPage: this.itemsPerPage,
            })
            this.$store.commit('setLoading')
            this.loading = false
        },
    },
}
</script>

<style>
</style>