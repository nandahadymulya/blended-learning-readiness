<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1 class="font-weight-bold text-center">Input Response Survey</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="my-auto">
          <v-card>
            <v-card-title>
              Clustering Result
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ResultSchoolsPage',
  head() {
    return {
      title: 'Schools Result',
    }
  },
}
</script>
