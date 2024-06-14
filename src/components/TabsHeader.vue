<template>
    <div class="tabHeader-wrap">
        <TabView :scrollable="true" selectOnFocus>
            <TabPanel v-for="tab in tabs" :key="tab.title">
                <template #header>
                    <Button class="btn":label="tab.title"  size="small" severity="secondary" />
                </template>
            </TabPanel>
        </TabView>
    </div>
</template>
<script setup>
import { ref } from "vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Button from "primevue/button";
const props = defineProps({
    tabs: {
        type: String,
        default: []
    }
})

</script>
<style>
.tabHeader-wrap {
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
}

.tabHeader-wrap .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    padding: 0rem 0.325rem;
}

.tabHeader-wrap .p-tabview .p-tabview-nav li .p-tabview-nav-link button {
    border-radius: 8px;
    padding: auto 12px;
}

.tabHeader-wrap .p-tabview .p-tabview-panels {
    padding: 0;
}

.tabHeader-wrap .p-tabview .p-tabview-nav {
    border: none
}

.tabHeader-wrap .p-tabview-ink-bar {
    display: none;
}

.tabHeader-wrap .p-highlight button {
    background-color: black;
    color: #fff;
}

</style>