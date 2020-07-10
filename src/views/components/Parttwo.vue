<template>
  <div class="wrapper">
   

    <div id="images">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image1"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/house'>Home Mortage</a> </h4>
        </div>
        
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image3"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/car'>Auto loan</a></h4>
        </div>
         <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image4"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4><a href='/personal'>Personal loan</a></h4>
        </div>
		 <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          
          <img
            :src="image2"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
		  <h4>Other loans</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image1: require("@/assets/img/house.png"),
	  responsive: false,
	  image2: require("@/assets/img/businesss.png"),
	  image3: require("@/assets/img/car.png"),
	  image4: require("@/assets/img/pay.png"),
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>
