import { useMemo } from 'react';
import { css } from '@emotion/css';
import {useTheme} from "@mui/material";

const useClasses = (stylesElement: any) => {
    const theme = useTheme();
    return useMemo(() => {
        const rawClasses = typeof stylesElement === 'function'
            ? stylesElement(theme)
            : stylesElement;
        const prepared:any = {};

        Object.entries(rawClasses).forEach(([key, value = {}]) => {
            // @ts-ignore
            prepared[key] = css(value);
        });

        return prepared;
    }, [stylesElement, theme]);
};

export default useClasses;