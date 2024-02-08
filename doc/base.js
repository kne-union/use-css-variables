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
