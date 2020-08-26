<template>
  <div class="about" id="about">
    <Nav />
    <div class="bio">
      <p>{{bio}}</p>

      <v-layout class="techs">
        <v-card 
            shaped
            color="yellow"
        >
          <v-card-title>Technologies</v-card-title>
          <v-card-text id="svgs">
            <div v-for="item in frontend" :key="item.name" class="tech-item">
              <div class="img">
                <img :src="item.src" />
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Nav from "./Navigation";

export default {
  name: "About",
  components: {
    Nav,
  },
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
        "I'm a self-taught programmer based in Salt Lake City, Utah. I'm a passionate about clean design and code. I'm always learning and problem-solving (because that's what you do when you teach yourself). My preferred tools include React, Vue, and NodeJS/Express.",
    };
  },
};
</script>

<style lang='scss' scoped>
.about {
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

.bio {
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  
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

.v-card-title {
    background: cyan;
}

#svgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.img {
  width: 50px;

  img {
    width: 100%;
  }
}

.tech-item {
  margin: 5px;
}
</style>