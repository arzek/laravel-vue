<template>
  <v-data-table
    v-model="selected"
    v-bind:headers="headers"
    v-bind:items="items"
    select-all
    v-bind:pagination.sync="pagination"
    item-key="name"
    class="elevation-1"
  >
    <template slot="headers" scope="props">
      <tr>
        <th>
          <v-checkbox
            success
            hide-details
            @click.native="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
           ></v-checkbox>
        </th>
        <th class="text-xs-left" v-for="header in props.headers" :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
        >
          <v-icon>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template slot="items" scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td class="text-xs-left">
          <v-checkbox
            success
            hide-details
            :input-value="props.selected"
          ></v-checkbox>
        </td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.calories }}</td>
      </tr>
    </template>
    <template slot="footer">
      <td colspan="100%">
        <pagination-component></pagination-component>
        <div class="btn-group">
          <div>
            <v-btn color="primary">Send message to selected (2)</v-btn>
          </div>
          <div>
            <v-btn color="primary">Delete selected (2)</v-btn>
          </div>
        </div>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        pagination: {
          sortBy: 'name'
        },
        selected: [],
        headers: [
          {
            text: 'Telegram Subscribers',
            align: 'left',
            value: 'name'
          },
          { text: 'Count', value: 'calories' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408
          },
          {
            value: false,
            name: 'Donut',
            calories: 452
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518
          }
        ]
      }
    },
    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }
</script>