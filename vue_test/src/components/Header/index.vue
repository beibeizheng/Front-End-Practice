<template>
  <!--HEADER -->
  <header class="header">
    <!-- First row of the header -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>Welcome to our website</p>
          <p v-if="!userName">
            <span>Please</span>
            <router-link to="/login">Login</router-link>
            <router-link class="register" to="/register"
              >Free Register</router-link
            >
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="logout">Logout</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">My Orders</router-link>
          <router-link to="shopcart">My Shopping Cart</router-link>
          <a href="###">Corporate Procurement</a>
          <a href="###">Partnerships</a>
          <a href="###">Merchant Back Office</a>
        </div>
      </div>
    </div>
    <!--the second line of header Search area-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home" title="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      if (this.$route.query) {
        let location = {
          name: "search",
          params: { keyword: this.keyword || undefined },
        };
        location.query = this.$route.query;
        this.$router.push(location);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("userLogout");
        this.$router.push("/home");
      } catch (error) {}
    },
  },
  mounted() {
    // Clear keywords from the search bar
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
  computed: {
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 64px;
          background-color: #ea4a36;
          line-height: 0;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>