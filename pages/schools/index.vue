<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col>
          <h1 class="font-weight-bold text-center">Input Response Survey</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4">
          <br />
          <v-form>
            <v-file-input></v-file-input>
            <div class="d-flex justify-center">
              <v-btn to="/schools/result" depressed class="text-capitalize"
                >Process
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'SchoolsPage',
  head() {
    return {
      title: 'Schools',
    }
  },
}
</script>
