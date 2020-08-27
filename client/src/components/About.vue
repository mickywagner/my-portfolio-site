<template>
  <div class="about" id="about">
    <h1>About Me</h1>
    <v-layout class="bio">
      <div class="picture">
        <v-card
        >
          <v-img 
            max-width="300"
            :src="require('../assets/me3.jpg')"
          >
          </v-img>
        </v-card>
      </div>
      <div class="content">
        <p>{{bio}}</p>
        <h3>Technologies &amp; Skills</h3>
        <v-list v-for="item in frontend" :key="item.name">
            <v-list-item
              dark
            >
              {{item.name}}
            </v-list-item>
        </v-list>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      frontend: [
        {
          name: "HTML 5",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          name: "CSS3",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "SASS",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
        },
        {
          name: "React",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png",
        },
        {
          name: "Vue",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
        {
          name: "Vuetify",
          src:
            "https://camo.githubusercontent.com/d45d525030a08e62d38fe6b769add6cea24add64/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f767565746966796a732e737667",
        },
        {
          name: "Bootstrap",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        },

        {
          name: "Node",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Express",
          src: "https://i.cloudup.com/zfY6lL7eFa-3000x3000.png",
        },
        {
          name: "MongoDB",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        },

        {
          name: "Git",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
        },
        {
          name: "Heroku",
          src:
            "https://seeklogo.com/images/H/heroku-logo-B774A78667-seeklogo.com.png",
        },
        {
          name: "Jest",
          src:
            "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
        },
      ],
      bio:
        "Hey there! I'm Michaela and I currently live in Salt Lake City. I've been teaching myself how to code for over a year now and I'm looking for web development projects/jobs to take on. I particularly enjoy working with React, Vue, and Node/Express. My other interests include photography, travel, yoga, snowboarding, and learning languages, to name a few."
    };
  },
};
</script>

<style lang='scss' scoped>
.about {
  width: 100vw;
  border-bottom: 1px dotted gray;

  h1 {
    padding-top: 50px;
    text-align: center;
  }
}

.bio {
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;

  .content {
    padding-left: 50px;
    max-width: 60%;
  }
  
  .picture {
    align-self: flex-start;
  }
  p {
      font-size: 1.2rem;
      margin-bottom: 50px;
      text-align: justify;
  }
}

.v-card {
  margin-right: 10px;
  max-width: 500px;
}


.v-list {
  display: inline-block;
  background: rgb(54, 54, 54);
  margin: 0;
  padding: 0;

  .v-list-item {
    background: rgb(54, 54, 54);
    border: 1px solid white;
  }
}

@media only screen and (max-width: 780px) {
  .bio {
    flex-direction: column;

    .picture {
      align-self: center;
      padding-bottom: 20px;
    }

    .content {
      padding: 0;
      max-width: 90%;
    }
  }
}


</style>