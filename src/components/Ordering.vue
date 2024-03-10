<template>
 <div
          class="lessonBox"
          v-show="showDiv(index)"
          v-for="(x, index) in lessons" :key="index"
        >
          <h1>{{x.subject}}</h1>
          <p>{{x.location}}</p>
          <p>{{x.price}}</p>
          <p>{{ "Spaces: " + (x.originalAval - x.Aval ) }}</p>
          <i v-bind:class="x.icon"></i>
          <button class="button" v-on:click="valueIncrement(index)">
            Remove
          </button>
        </div>
        <form v-on:submit.prevent="checkoutSubmit">
          <input
            type="text"
            class="checkoutInput"
            required
            placeholder="Name"
            v-model="checkoutName"
          />
          <input
            type="text"
            class="checkoutInput"
            required
            placeholder="Phone Number"
            v-model="checkoutNumber"
          />
          <button class="checkoutButton" type="submit">Checkout</button>
        </form>
    
</template>

<script >
export default {
   props : ['lessons'],
  data() {
          return {

            checkoutName: null,
            checkoutNumber: null,
          };
        }, 
       methods: {
       
          valueIncrement(index) {
            if (this.lessons[index].Aval < 5) {
              this.lessons[index].Aval++;
            }
          },
            showDiv(index) {
            if (this.lessons[index].Aval < this.lessons[index].originalAval) {
              return true;
            }
          },
             checkoutSubmit() {
            const filteredLessons = [];

            for (let i = 0; i < this.lessons.length; i++) {
              if (this.lessons[i].Aval < this.lessons[i].originalAval) {
                const lessonInfo = {
                  _id: this.lessons[i]._id,
                  subject: this.lessons[i].subject,
                  location: this.lessons[i].location,
                  price: this.lessons[i].price,
                  spaces: this.lessons[i].originalAval - this.lessons[i].Aval,
                };

                filteredLessons.push(lessonInfo);
              }
            }

            console.log(filteredLessons);

            const orderData = {
              name: this.checkoutName,
              number: this.checkoutNumber,
              lessons: filteredLessons,
            };
            console.log(orderData.lessons);

            fetch("/api/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(orderData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                alert(data.message);
                console.log(JSON.stringify(orderData.lessons[0]._id) + "test");
                return fetch(`/api/lessons/${orderData.lessons[0]._id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    Aval: this.lesson.Aval - orderData.lessons[0].Aval,
                  }),
                });
              })
              .then((updateResponse) => updateResponse.json())
              .then((updateData) => {
                console.log(updateData);
                alert(updateData.message);
              })
              .catch((error) => {
                console.error("Error submitting order:", error);
                alert("Error submitting order. Please try again.");
              });
          },
        },
        computed: {
          searching() {
            return this.lessons.filter(
              (lesson) =>
                lesson.subject
                  .toLowerCase()
                  .includes(this.searchQuery.toLowerCase()) ||
                lesson.location
                  .toLowerCase()
                  .includes(this.searchQuery.toLowerCase())
            );
          },
        },
        
        }
        
      
</script>