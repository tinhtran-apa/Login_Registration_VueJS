<script setup lang="ts">
import LeftPanel from '../components/LeftPanel.vue';
import RightPanel from '../components/RightPanel.vue';
import SocialAuth from '../components/SocialAuth.vue';

</script>

<template>
    <LeftPanel />
    <RightPanel>
        <SocialAuth title="Welcome Back" des="Sigin in to continue to your workspace"/>
    </RightPanel>
</template>
