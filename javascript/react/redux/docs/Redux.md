# Redux

​ 官网文档很清晰了, 这里就简单的概述一下我的理解: **Action** 用来描述操作, **Reducer** 用来操作(更新) state. **Store**具有唯一性, 它将所有的 Reducer 集合并执行其默认操作, 然后生成一个 object 树. 使用 redux 的 createStore 方法即可生成一个 store.

```javascript
// Action生成函数, 用来动态生成Action
export const setState = state => ({
  type: "SET_STATE",
  state
});

/**
 * Reducer函数, 用来描述在线状态, 它默认返回false
 * state	就是你需要操作的数据
 * action	就是上面那玩意生成的对象
 */
export const onlineState = (state = false, action) => {
  // 使用action中的type来区分操作
  switch (action.type) {
    case "SET_STATE":
      // 这里直接返回action中操作的数据
      return action.state;
    default:
      return state;
  }
};

// 假如你有一个简单的state
const state = {
  onlineState: false
};
// Redux的更新数据的操作流程大致如下
// 创建action
const updateOnlineAction = setState(true);
// 根据action获得最新的数据
const nowOnlineState = onlineState(state, nowOnlineState);
// 更新数据
state.onlineState = nowOnlineState;
```

## 为什么要用 Redux ?

​ 一般而言是为了方便维护、管理整个 React 项目中的 state. 抱着学习的目的, 我尝试了一下, 感觉体验不错, 使用了 Redux 可以很好的提升整个项目的可扩展性. 各个组件也有良好的解藕性, 抽出加入组件库十分方便. 后期维护与更新迭代也是易如反掌.

## 使用 Redux 需要考虑什么?

​ 使用了 Redux 会让相关复杂化, 也就是说开发周期和前期需要考虑的事情会变的很多且繁杂. 你得先设计部分数据的结构, 思考用户操作流程, 也要花费更多精力在组件的解藕上. 总体来说, 小型项目使用 Redux 就有种大炮打麻雀, 麻烦不少.

## 怎么在项目中使用 Redux ?

​ 我的做法是先设计一个 object tree, 并且把各种数据进行关联, 尽量减少数据的嵌套层级. 然后思考操作这个数据主要有几种情况, 并写好先关的 Action . 比如用于记录用户是否登陆的状态, 操作情况就分一种 **SET_STATE**. 而一个用户列表数据, 操作情况可能就有 **ADD_USER**, **REMOVE_USER**, **SORT_LIST**. 我们要做的就是提前把它想出来, 然后去实现相关逻辑, 也就是去创建 **Reducer**. 再把所有的 Reducer 关联起来, 创建一个 **Store** 让用户所有的操作都有迹可循. 到这里我们只要再去写一些只关心**数据展示效果**的 UI 组件, 再创建相对应的只关心**数据内容**的容器组件将其包囊起来就并在根节点上使用 Redux 提供的 **Provider** 组件创建最高层的 **Store** 就大功告成了, 不容易...
