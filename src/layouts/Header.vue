<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo-sc.jpeg">
          </q-avatar >
        Sellers Commerce
        </q-toolbar-title>
        <q-tabs align="right">
          <q-route-tab to="/Home" label="Home" />
          <q-route-tab to="/Product" label="Product" />
          <q-route-tab to="/Cart" label="Cart" />
      <q-btn color="black" text-color="white" label="Logout"  @click="$router.replace('/Login')"/>
          
        </q-tabs>
      </q-toolbar>

      
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
  
</script>