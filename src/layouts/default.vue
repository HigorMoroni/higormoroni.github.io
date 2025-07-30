<script setup lang="ts">
const props = defineProps({
  variation: {
    type: String,
    required: true,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value)
  }
});

const isSecondary = computed(() => props.variation === 'secondary');
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row">
    <slot>
      <div
        class="p-6 flex flex-col gap-2 border-y border-line bg-mobile-title-background md:p-11 lg:border-none lg:text-right lg:w-3/10"
        :class="isSecondary ? 'lg:bg-secondary-title-background' : 'lg:bg-primary-title-background'"
      >
        <slot name="title" />
      </div>
      <div
        class="p-6 md:p-11 lg:w-7/10"
        :class="isSecondary ? 'lg:bg-secondary-content-background' : 'lg:bg-primary-content-background'"
      >
        <slot name="content" />
      </div>
    </slot>
  </section>
</template>