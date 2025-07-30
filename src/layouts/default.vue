<script setup lang="ts">
const props = defineProps({
  variation: {
    type: String,
    required: true,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value)
  }
});
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row">
    <slot>
      <div
        class="p-6 flex flex-col gap-2 border-y border-line bg-mobile-title-background md:p-11 lg:border-none lg:text-right lg:w-3/10"
        :class="`lg:bg-${props.variation}-title-background`"
      >
        <slot name="title" />
      </div>
      <div
        class="p-6 flex flex-col gap-3 md:p-11 lg:w-7/10"
        :class="`lg:bg-${props.variation}-page-background`"
      >
        <slot name="content" />
      </div>
    </slot>
  </section>
</template>