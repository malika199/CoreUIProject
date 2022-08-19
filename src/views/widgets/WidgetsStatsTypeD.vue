<template>
  <CRow>
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD class="mb-4" style="--cui-card-bg: #3b5998">
        <template #icon
          ><CIcon icon="cib-facebook" height="52" class="my-4 text-white"
        /></template>
        <template #chart> </template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD class="mb-4" style="--cui-card-bg: #00aced">
        <template #icon
          ><CIcon icon="cib-twitter" height="52" class="my-4 text-white"
        /></template>
        <template #chart> </template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD class="mb-4" style="--cui-card-bg: #4875b4">
        <template #icon
          ><CIcon icon="cib-linkedin" height="52" class="my-4 text-white"
        /></template>
        <template #chart> </template>
      </CWidgetStatsD>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'WidgetsStatsD',
  setup() {
    const options = {
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    }

    return {
      options,
    }
  },
}
</script>
