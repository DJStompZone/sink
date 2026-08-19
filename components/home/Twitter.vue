<script setup>
import { DiscordIcon } from 'vue3-simple-icons'
import { ArrowRight } from 'lucide-vue-next'

const { discord } = useAppConfig()
</script>

<template>
  <a
    :href="discord"
    target="_blank"
    title="StompZone Discord"
    class="inline-flex items-center px-3 py-1 mx-auto my-4 space-x-1 text-sm font-medium rounded-lg bg-muted"
  >
    <DiscordIcon class="w-4 h-4" style="fill: #5865F2;" />
    <Separator
      orientation="vertical"
      class="h-4"
    />
    <span>Join my Discord server</span>
    <ArrowRight class="w-4 h-4" />
  </a>
</template>
