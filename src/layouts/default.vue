<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  variation: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value)
  },
  hideBottomPadding: {
    type: Boolean,
    default: false
  },
  hideTopPadding: {
    type: Boolean,
    default: false
  }
});

const isSecondary = computed(() => props.variation === 'secondary');
</script>

<template>
  <section class="w-full flex flex-col lg:flex-row">
    <slot>
      <div
        class="p-6 flex flex-col gap-2 border-y border-line bg-mobile-title-background md:p-12 xl:p-16 lg:border-none lg:text-right lg:w-3/10"
        :class="[isSecondary ? 'lg:bg-secondary-title-background' : 'lg:bg-primary-title-background']"
      >
        <slot name="title">
          <h3>{{ title }}</h3>
          <p>{{ subtitle }}</p>
        </slot>
      </div>
      <div
        class="p-6 md:p-12 xl:p-16 lg:w-7/10"
        :class="[
          { 'pb-0!': props.hideBottomPadding },
          { 'pt-0!': props.hideTopPadding },
          isSecondary ? 'lg:bg-secondary-content-background' : 'lg:bg-primary-content-background'
        ]"
      >
        <slot name="content" />
      </div>
    </slot>
  </section>
</template>
