import styled, { css } from 'styled-components'

const base = css`
    align-items: center;
    border-style: solid;
    border-width: 0.2rem;
    display: flex;
    justify-content: center;
    transition: all 0.2s;
`

export const btns = {
    clear: css`
        ${base}

        background: 0;
        border-color: var(--red-600);
        color: var(--red-600);

        &:hover {
            background: var(--red-600);
            color: white;
        }
`,
    red: css`
        ${base}

        background: var(--red-600);
        border-color: var(--red-600);
        color: white;

        &:hover {
            background: 0;
            color: var(--red-600);
        }
`,
    round: css`
        ${base}

        border-radius: 50%;
        min-height: 3.5rem;
        min-width: 3.5rem;
`,
    wide: css`
        ${base}

        height: 3.5rem;
        min-width: 8rem;
`
}
