<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="moveInDiv" @mouseleave="moveOutDiv">
        <h2 class="all">
          全部商品分类
        </h2>
        <transition name="show">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                @mouseenter="moveIn(index)"
                :class="{ item_on: currentIndex === index }"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
              >
                <!-- 使用声明式导航,会卡,原因是每个<router-link>组件标签,都会创建一个组件对象,创建太多了,改为编程式导航 -->
                <h3>
                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category2Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                  <!-- <a
                  href="javascript:;"
                  @click="
                    $router.push({
                      name: search,
                      query: {
                        categoryName: c1.categoryName,
                        category1Id: c1.categoryId,
                      },
                    })
                  "
                  >{{ c1.categoryName }}</a
                > -->
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          href="javascript:;"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapState, mapActions } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    moveIn: throttle(
      function(index) {
        this.currentIndex = index;
      },
      30,
      //在刚触发就执行
      { leading: true }
    ),

    toSearch(event) {
      let data = event.target.dataset;
      if (!data.categoryname) return;
      let location = {
        name: "search",
        query: {
          categoryName: data.categoryname,
        },
      };
      if (data.category1id) {
        location.query.category1Id = data.category1id;
      }
      if (data.category2id) {
        location.query.category2Id = data.category2id;
      }
      if (data.category3id) {
        location.query.category3Id = data.category3id;
      }
      this.$router.push(location);
      this.getCategoryList();
    },
    moveInDiv() {
      this.isShow = true;
    },
    moveOutDiv() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    if (this.$route.path !== "/home") this.isShow = false;
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      &.show-enter {
        opacity: 0;
      }
      &.show-enter-to {
        opacity: 1;
      }
      &.show-enter-active {
        transition: opacity 1s;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 660px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          &.item_on {
            background-color: black;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
