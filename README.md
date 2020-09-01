# useCssVariables
css-variables的react的hooks

```shell script
npm i @kne/use-css-variables
```

# 使用示例
```jsx
const Component = ()=>{
    const [height,setHeight] = useState({componentHeight:'40px'});
    useCssVariables(height);
    return (
        <div className="component" onClick={()=>{
            setHeight({
                componentHeight:'100px'
            });
        }}>按钮</div>
    );
};
```

```css
.component{
    height:var(--componentHeight);
}
```
# API

### change log:
