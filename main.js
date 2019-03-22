var app = new Vue({
  el: "#app",
  data: {
    colors: [
      {
        color1: "#4030e9",
        color2: "#4030e9",
        color3: "#665bee",
        color4: "#4030e9",
        answer: "#665bee",
        status: null
      },
      {
        color1: "#49d230",
        color2: "#42bb29",
        color3: "#49d230",
        color4: "#49d230",
        answer: "#42bb29",
        status: null
      },
      {
        color1: "#0a3902",
        color2: "#0b3004",
        color3: "#0b3004",
        color4: "#0b3004",
        answer: "#0a3902",
        status: null
      },
      {
        color1: "#844206",
        color2: "#6c3405",
        color3: "#844206",
        color4: "#844206",
        answer: "#6c3405",
        status: null
      },
      {
        color1: "#a1ad9f",
        color2: "#a1ad9f",
        color3: "#aab6a8",
        color4: "#a1ad9f",
        answer: "#aab6a8",
        status: null
      },
      {
        color1: "#d2db4c",
        color2: "#ccd639",
        color3: "#ccd639",
        color4: "#ccd639",
        answer: "#d2db4c",
        status: null
      },
      {
        color1: "#ad4453",
        color2: "#ad4453",
        color3: "#ad4453",
        color4: "#9a3c4c",
        answer: "#9a3c4c",
        status: null
      },
      {
        color1: "#105b23",
        color2: "#2f6a3c",
        color3: "#105b23",
        color4: "#105b23",
        answer: "#2f6a3c",
        status: null
      },
      {
        color1: "#bc7c94",
        color2: "#bc7c94",
        color3: "#bc7c94",
        color4: "#c1889b",
        answer: "#c1889b",
        status: null
      },
      {
        color1: "#757110",
        color2: "#817f2a",
        color3: "#827e2a",
        color4: "#817f2a",
        answer: "#757110",
        status: null
      },
      {
        color1: "#eee95a",
        color2: "#eee969",
        color3: "#eee95a",
        color4: "#eee95a",
        answer: "#eee969",
        status: null
      },
      {
        color1: "#68aef3",
        color2: "#68aef3",
        color3: "#5fa8ed",
        color4: "#68aef3",
        answer: "#5fa8ed",
        status: null
      },
      {
        color1: "#e1b62b",
        color2: "#e4bd3e",
        color3: "#e1b62b",
        color4: "#e1b62b",
        answer: "#e4bd3e",
        status: null
      },
      {
        color1: "#cd4a8c",
        color2: "#cd4a8c",
        color3: "#cd4a8c",
        color4: "#db65a2",
        answer: "#db65a2",
        status: null
      }
    ],
    index: 0,
    scores: 0
  },
  methods: {
    checkAnswer(selectedColor) {
      currentColor = this.colors[this.index]
      if (currentColor.answer == selectedColor) {
        currentColor.status = true;
        this.scores++
        this.index++
      } else {
        currentColor.status = false;
        this.index++
      }
    },
    reset() {
        this.colors.forEach(color => {
            color.status = null
        })
        this.scores = 0
        this.index = 0
    }
  },
  computed: {
    results() {
      return this.index <= 13;
    }
  },

  component: []
});
