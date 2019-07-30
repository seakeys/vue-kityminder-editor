# vue-kityminder

#### Description
{**When you're done, you can delete the content in this README and update the file with details for others getting started with your repository**}

#### Software Architecture
Software architecture description

#### Installation

1. xxxx
2. xxxx
3. xxxx

#### Instructions

1. xxxx
2. xxxx
3. xxxx

#### Contribution

1. Fork the repository
2. Create Feat_xxx branch
3. Commit your code
4. Create Pull Request


#### Gitee Feature

1. You can use Readme\_XXX.md to support different languages, such as Readme\_en.md, Readme\_zh.md
2. Gitee blog [blog.gitee.com](https://blog.gitee.com)
3. Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4. The most valuable open source project [GVP](https://gitee.com/gvp)
5. The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6. The most popular members  [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)




 <minder
      v-for="(item,index) in importData" 
      :key="index"
      :importData="item"
      :index='index'
    ></minder>



    importData: [
        { 
          'data': { 'text': '新闻1', 'id': 2, 'priority1': 1 },
          'children': [
            { 
              'data': { 'text': '新闻2', 'id': 3, 'priority1': 1 },
              'children': [
                { 'data': { 'text': '新闻3', 'id': 4, 'priority1': 1 } },
                { 'data': { 'text': '网页4', 'id': 5, 'priority1': 1 } },
                { 'data': { 'text': '贴吧5', 'id': 6, 'priority1': 2 } },
                { 'data': { 'text': '知道6', 'id': 7, 'priority1': 3 } },
                { 'data': { 'text': '音乐7', 'id': 8, 'priority1': 4 } }
              ]
            },
            { 'data': { 'text': '网页8', 'id': 9, 'priority1': 1 } },
            { 'data': { 'text': '贴吧9', 'id': 10, 'priority1': 2 } },
            { 'data': { 'text': '知道11', 'id': 11, 'priority1': 3 } },
            { 'data': { 'text': '音乐12', 'id': 12, 'priority1': 4 } }
          ]
        },
        { 
          'data': { 'text': '新闻1', 'id': 2, 'priority1': 1 },
          'children': [
            { 'data': { 'text': '贴吧9', 'id': 10, 'priority1': 2 } },
            { 'data': { 'text': '知道11', 'id': 11, 'priority1': 3 } },
            { 'data': { 'text': '音乐12', 'id': 12, 'priority1': 4 } }
          ]
        },
        { 
          'data': { 'text': '新闻1', 'id': 2, 'priority1': 1 },
          'children': [
            { 
              'data': { 'text': '新闻2', 'id': 3, 'priority1': 1 },
              'children': [
                { 'data': { 'text': '新闻3', 'id': 4, 'priority1': 1 } },
                { 'data': { 'text': '网页4', 'id': 5, 'priority1': 1 } },
                { 'data': { 'text': '贴吧5', 'id': 6, 'priority1': 2 } },
                { 'data': { 'text': '知道6', 'id': 7, 'priority1': 3 } },
                { 'data': { 'text': '音乐7', 'id': 8, 'priority1': 4 } }
              ]
            },
            { 'data': { 'text': '网页8', 'id': 9, 'priority1': 1 } },
            { 'data': { 'text': '贴吧9', 'id': 10, 'priority1': 2 } },
            { 'data': { 'text': '知道11', 'id': 11, 'priority1': 3 } },
            { 'data': { 'text': '音乐12', 'id': 12, 'priority1': 4 } }
          ]
        }
      ]