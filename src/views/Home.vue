<template>
  <q-page class="q-pa-md">
    <div v-for="(ass, i) in assignatures" :key="i">
      <p>
        {{ ass.name }} _{{ calculateFinalGrade(ass.items).final }} =
        {{ calculateFinalGrade(ass.items).letter }}_
      </p>
      <div v-for="(item, i) in ass.items" :key="i">
        - {{ item.name }} | {{ item.percentage }} -
        {{ calculatePercentageValue(item.grades, item.percentage) }} |
        <span v-for="(grade, i) in item.grades" :key="i">[ {{ grade }} ]</span>
      </div>
    </div>
    <button @click="pushToArray()">test</button>

    <img alt="Vue logo" src="../assets/logo.png" />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      assignatures: [
        {
          owner: "djahsvkdkajs12y8",
          name: "Math",
          status: "on-course",
          items: [
            {
              name: "tests",
              percentage: 0.5,
              grades: [100, 90, 45],
            },
            {
              name: "homeworks",
              percentage: 0.5,
              grades: [90],
            },
          ],
        },
        {
          owner: "djahsvkdkajs12y8",
          name: "science",
          status: "on-course",
          items: [
            {
              name: "tests",
              percentage: 0.5,
              grades: [10, 90, 45],
            },
            {
              name: "homeworks",
              percentage: 0.5,
              grades: [73],
            },
          ],
        },
      ],
    };
  },
  methods: {
    calculatePercentageValue(grades, perc) {
      let sum = 0;
      grades.forEach((grade) => {
        sum += grade;
      });
      return ((sum / grades.length) * perc).toFixed(2);
    },
    calculateFinalGrade(items) {
      let finalGrade = 0;
      items.forEach((ass) => {
        finalGrade += parseFloat(
          this.calculatePercentageValue(ass.grades, ass.percentage)
        );
      });
      return {
        final: finalGrade,
        letter: this.returnGradeInLetter(finalGrade),
      };
    },
    returnGradeInLetter(grade) {
      if (grade > 90) return "A";
      if (grade >= 81 && grade < 91) return "B";
      if (grade >= 71 && grade < 81) return "C";
      if (grade >= 61 && grade < 71) return "D";
      if (grade > 0 && grade < 61) return "F";
      else return "F";
    },
    pushToArray() {
      this.assignatures[0].items[0].grades.push(89);
    },
  },
};
</script>
