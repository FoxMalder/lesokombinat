<template>
  <div class="wrapper">
    <PageHeader />
    <main class="content">
      <nuxt />
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/Page/PageHeader'
import PageFooter from '@/components/Page/PageFooter'
export default {
  name: 'DefaultLayout',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
