<script setup lang="ts">
import { MapboxMap, MapboxNavigationControl } from 'vue-mapbox-ts';
import { Map as MapboxMapObject } from 'mapbox-gl';

const accessToken =
  'pk.eyJ1Ijoiamlhbmd4aXV6aGVuIiwiYSI6ImNseGFzbWk3MTA3NXYybXMzNHN5OTVpbXAifQ.Ou5LyHrssSEh3dlhsGjcHg';
const mapStyle = 'mapbox://styles/mapbox/streets-v11';
const mapCenter = [14.51446, 48.368721];
const mapZoom = 15;

console.log('Loading Map...');
</script>

<template>
  <mapbox-map
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :draggable="true"
    :center="mapCenter"
    :zoom="mapZoom"
    class="basemap"
  >
    <!-- <mapbox-marker :lngLat="[14.51446, 48.368721]"> </mapbox-marker> -->
  </mapbox-map>
</template>

<style></style>
