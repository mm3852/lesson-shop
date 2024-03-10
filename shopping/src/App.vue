<template>
 <button class="buttonToggle" v-on:click="pageToggle()">
        {{ showCartPage ? "Go to Lessons" : "Go to cart"}}
      </button>

      <div v-show="!showCartPage">

 <Lesson :lessons="lessons"></Lesson>
 </div>
  <div v-show="showCartPage">
 <ordering :lessons="lessons"></ordering>
 </div>
</template>

<script >
export default {
 data() {
  return {
         lessons: [],
               showCartPage: false,
  }},
  methods: {
                 valueDecrement(index) {
            if (this.lessons[index].Aval > 0) {
              this.lessons[index].Aval--;
            }
          },
          valueIncrement(index) {
            if (this.lessons[index].Aval < 5) {
              this.lessons[index].Aval++;
            }
          },
          pageToggle() {
            for (let index in this.lessons) {
              if (
                this.showCartPage == false &&
                this.lessons[index].Aval == this.lessons[index].originalAval
              ) {
              } else {
                this.showCartPage = !this.showCartPage;
                break;
              }
            }
          },
   async fetchLessons() {
            try {
              const response = await fetch(
                "http://lesson-shop-env.eba-a9ygfdpz.us-east-1.elasticbeanstalk.com/api/lessons"
              );
              const data = await response.json();
              this.lessons = data;
              this.lessons = data.map((lesson) => ({
                ...lesson,
                originalAval: lesson.Aval,
              }));
            } catch (error) {
              console.error("Error fetching lessons:", error);
            }
          },
       },
        created() {
          this.fetchLessons();
        },
}
</script>

<style>
/* Your existing styles here */
</style>
