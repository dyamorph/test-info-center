<script setup>
import { ref } from 'vue'

const orders = ref([
  {
    status: 'Active',
    number: '№364',
    date: '10.02.2023',
    period: '90 days',
    bill: 'Download',
    act: 'Download act'
  },
  {
    status: 'Expired',
    number: '№359',
    date: '10.02.2023',
    period: '90 days',
    bill: 'Download',
    act: 'Download act'
  },
  {
    status: 'Pending',
    number: '№180',
    date: '10.02.2023',
    period: '90 days',
    bill: 'Download',
    act: '-'
  }
])

const getStatusClass = (status) => {
  switch (status) {
    case 'Active':
      return 'badge bg-active'
    case 'Expired':
      return 'badge bg-expired'
    case 'Pending':
      return 'badge bg-pending'
    default:
      return 'badge bg-secondary'
  }
}
</script>

<template>
  <section class="container-fluid">
    <div class="container mt-5">
      <h1 class="order-table__title mb-4">Order History</h1>
      <div class="d-none d-md-block">
        <table class="table order-table">
          <thead>
            <tr>
              <th class="order-table__heading-item table-cell" scope="col">STATUS</th>
              <th class="order-table__heading-item table-cell" scope="col">NUMBER</th>
              <th class="order-table__heading-item table-cell" scope="col">DATE</th>
              <th class="order-table__heading-item table-cell" scope="col">PERIOD</th>
              <th class="order-table__heading-item table-cell" scope="col">BILL</th>
              <th class="order-table__heading-item table-cell" scope="col">ACT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td class="table-cell">
                <span :class="getStatusClass(order.status)">{{ order.status }}</span>
              </td>
              <td class="table-cell">{{ order.number }}</td>
              <td class="table-cell gray-cell">{{ order.date }}</td>
              <td class="table-cell gray-cell">{{ order.period }}</td>
              <td class="table-cell gray-cell">
                <img
                  src="/src/assets/icons/paperclip-icon.svg"
                  alt="Download Icon"
                  style="margin-right: 12px"
                />{{ order.bill }}
              </td>
              <td class="table-cell gray-cell">
                <img
                  v-if="order.act.length > 1"
                  src="/src/assets/icons/paperclip-icon.svg"
                  alt="Download Icon"
                  style="margin-right: 12px"
                />{{ order.act }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-block d-md-none">
        <div v-for="(order, index) in orders" :key="index" class="order-history">
          <div class="row" style="border-top-right-radius: 5px; border-top-left-radius: 5px">
            <div class="col-6 title">NUMBER</div>
            <div class="col-6">{{ order.number }}</div>
          </div>
          <div class="row">
            <div class="col-6 title">STATUS</div>
            <div class="col-6">
              <span :class="getStatusClass(order.status)">{{ order.status }}</span>
            </div>
          </div>

          <div class="row">
            <div class="col-6 title">DATE</div>
            <div class="col-6 gray-cell">{{ order.date }}</div>
          </div>
          <div class="row">
            <div class="col-6 title">PERIOD</div>
            <div class="col-6 gray-cell">{{ order.period }}</div>
          </div>
          <div class="row">
            <div class="col-6 title">BILL</div>
            <div class="col-6 gray-cell">
              <img
                src="/src/assets/icons/paperclip-icon.svg"
                alt="Download Icon"
                style="margin-right: 12px"
              />{{ order.bill }}
            </div>
          </div>
          <div class="row" style="border-bottom-right-radius: 5px; border-bottom-left-radius: 5px">
            <div class="col-6 title">ACT</div>
            <div class="col-6 gray-cell">
              <img
                v-if="order.act.length > 1"
                src="/src/assets/icons/paperclip-icon.svg"
                alt="Download Icon"
                style="margin-right: 12px"
              />{{ order.act }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-fluid {
  background-image: url('../assets/images/order-bg.png');
}

.table {
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}
.order-table__title {
  text-transform: uppercase;
  font-size: 28px;
  color: var(--light);
  font-weight: 400;
}

.table-cell {
  padding: 16px;
}

.order-history {
  margin-bottom: 12px;
}

.order-history .title {
  font-weight: bold;
  text-transform: uppercase;
}

.title {
  padding-inline: 0;
}

.badge {
  border-radius: 4px;
}

.bg-active {
  background-color: var(--accent);
}
.bg-expired {
  background-color: #f97474;
}
.bg-pending {
  background-color: #1e77d8;
}

.order-table__heading-item {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 700;
}
.gray-cell {
  color: #808181;
}
.row {
  background-color: var(--light);
  color: var(--dark);
  padding: 16px;
}
</style>
