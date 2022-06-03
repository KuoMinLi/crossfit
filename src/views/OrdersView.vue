<template>
<LoadingView :active="isLoading">
    <div class="loadingio-spinner-cube-50evvftsk7p"><div class="ldio-a1obro97w5l">
      <div></div><div></div><div></div><div></div>
    </div></div>
</LoadingView>
<div class="text-end mt-4">
    <button class="btn btn-dark" type="button" @click="openModal(ture)">
      增加一筆訂單
    </button>
</div>
<table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th width="240">Email</th>
        <th>購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>

export default {
  data() {
    return {
      orders: [],
      orderpagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          console.log(res.data);
          this.isLoading = false;
          if (res.data.success) {
            this.orders = res.data.products;
            this.orderpagination = res.data.pagination;
          }
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
