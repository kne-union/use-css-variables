
# use-css-variables


### 描述

css-variables的react的hooks


### 安装

```shell
npm i --save @kne/use-css-variables
```


### 概述

#### 特点

* UI分离，支持自定义UI框架。提供了antd的组件封装 @kne/react-form-antd 和 taro的组件封装 @kne/react-form-taro
* 分级校验规则配置，校验规则支持异步校验
* 事件驱动，方便灵活扩展。可以通过debug选项配置，通过触发事件顺序和参数轻松调试
* 支持包含Group的复杂表单，子表单


### 示例

#### 示例代码

- 这里填写示例标题
- 点击按钮css var var(--component-height)增加10px
- UseCssVariables(@kne/use-css-variables),antd(antd)

```jsx
const {default: useCssVariables} = UseCssVariables;
const {Button, Space} = antd;
const {useState, useMemo} = React;
const Example = () => {
    const [height, setHeight] = useState(40);

    const cssVariables = useMemo(() => {
        return {'component-height': `${height}px`};
    }, [height]);

    useCssVariables(cssVariables);
    return (<Space direction="vertical">
        <Button onClick={() => {
            setHeight((height) => height + 10);
        }}>按钮</Button>
        <div style={{
            height: 'var(--component-height)', background: 'var(--primary-color)'
        }}/>
    </Space>);
};

render(<Example/>);

```


### API


