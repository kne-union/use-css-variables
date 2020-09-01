import {useEffect, useRef} from 'react';
import 'construct-style-sheets-polyfill';

export default (obj) => {
    const sheetRef = useRef(new CSSStyleSheet());

    const removeCurrentSheet = () => {
        const ls = document.adoptedStyleSheets.slice(0);
        const index = ls.indexOf(sheetRef.current);
        if (index > -1) {
            ls.splice(index, 1);
        }
        document.adoptedStyleSheets = ls;
    };

    useEffect(() => {
        sheetRef.current.replaceSync(`:root{ ${Object.keys(obj).map((name) => `--${name}:${obj[name]};`).join('')} }`);
        removeCurrentSheet();
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheetRef.current];
        return () => {
            removeCurrentSheet();
        };
    }, [obj]);

    return removeCurrentSheet;
};