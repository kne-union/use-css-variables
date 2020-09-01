import {useEffect, useMemo, useCallback, useRef} from 'react';
import 'construct-style-sheets-polyfill';

export default (obj) => {
    const sheetRef = useRef(new CSSStyleSheet());

    const removeCurrentSheet = useCallback(() => {
        const ls = document.adoptedStyleSheets.slice(0);
        const index = ls.indexOf(sheetRef.current);
        if (index > -1) {
            ls.splice(index, 1);
        }
        document.adoptedStyleSheets = ls;
    }, []);

    useMemo(() => {
        sheetRef.current.replaceSync(`:root{ ${Object.keys(obj).map((name) => `--${name}:${obj[name]};`).join('')} }`);
        removeCurrentSheet();
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheetRef.current];
    }, [obj, removeCurrentSheet]);

    useEffect(() => {
        return () => {
            removeCurrentSheet();
        };
    }, [removeCurrentSheet]);

    return removeCurrentSheet;
};