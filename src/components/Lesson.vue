<template>

     <input
          type="search"
          class="search"
          placeholder="Search"
          v-model="searchQuery"
        />
  <div class="lessonBox" v-for="(x, index)  in searching" :key="index">
          <h1>{{x.subject}}</h1>
          <p>{{x.location}}</p>
          <p>£{{x.price}}</p>

          <p v-if="x.Aval >0">{{ "Spaces: " + x.Aval }}</p>
          <p v-else>No more avaliable items</p>
          <i v-bind:class="x.icon"></i>
          <button class="button" v-on:click="valueDecrement(index)">
            Add to cart
          </button>
        </div>
          <form class="ordering">
          <label class="container"
            >Subject
            <input
              type="radio"
              value="subject"
              name="option"
              checked="checked"
              v-on:Click="sortChoice('subject')"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Location
            <input
              type="radio"
              value="location"
              name="option"
              checked="checked"
              v-on:Click="sortChoice('location')"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Price
            <input
              type="radio"
              value="price"
              name="option"
              checked="checked"
              v-on:Click="sortNumber('price')"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Avalability
            <input
              type="radio"
              value="avalability"
              name="option"
              checked="checked"
              v-on:Click="sortNumber('Aval')"
            />
            <span class="checkmark"></span>
          </label>
        </form>

        <form class="orderingChoose">
          <label class="container"
            >Deccending
            <input
              type="radio"
              value="location"
              checked="checked"
              name="ordering"
              v-on:Click="sortOrdering(false)"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Accending
            <input
              type="radio"
              checked="checked"
              value="subject"
              name="ordering"
              v-on:Click="sortOrdering(true)"
            />
            <span class="checkmark"></span>
          </label>
        </form>
</template>

<script>
export default {
  props : ['lessons'],
  data() {
          return {
            searchQuery: "",
            sortProperty: 42,
            ascendedOrder: true,
          };
        }, 
       methods: {
          valueDecrement(index) {
            if (this.lessons[index].Aval > 0) {
              this.lessons[index].Aval--;
            }
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
              sortChoice(property) {
            this.lessons.sort((a, b) => {
              const valueA = a[property].toLowerCase();
              const valueB = b[property].toLowerCase();
              this.sortProperty = property;
              return this.ascendedOrder
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
            });
          },
          sortNumber(property) {
            this.lessons.sort((a, b) => {
              this.sortProperty = property;
              return this.ascendedOrder
                ? a[property] - b[property]
                : b[property] - a[property];
            });
          },
          sortOrdering(property) {
            this.ascendedOrder = property;
            return this.sortProperty === "subject" ||
              this.sortProperty === "location"
              ? this.sortChoice(this.sortProperty)
              : this.sortNumber(this.sortProperty);
          },
        },
       
        }
        
      
</script>

<style></style>