<template>
  <div>
    <div>
      <button
        type="button"
        @click="sendToRay()"
      >
        send ref to ray
      </button><br>
      <button
        type="button"
        @click="increment()"
      >
        increment data var
      </button><br>
    </div>
    <div
      ref="div1"
    >
      <div
        ref="div1a"
      >
        {{ one }}
      </div>
      <div
        ref="div1b"
      >
        {{ two }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      one: 100,
      two: 22,
    };
  },

  created() {
    // ray('a string');

    console.log('ray.created-1');
    this.$ray().data();
    console.log('ray.created-2');
    this.$ray().track('one');
    console.log('ray.created-3');
  },

  methods: {
    sendToRay() {
      this.$ray().ref('div1');
    },

    increment() {
      this.one += 3;
    },
  },
};
</script>
