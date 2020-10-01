import styled, { css } from 'styled-components'

const base = css`
    align-items: center;
    border-style: solid;
    border-width: 0.2rem;
    display: flex;
    justify-content: center;
    outline: 0;
`

export const btns = {
    clearCyan: css`
        ${base}

        background: 0;
        border-color: var(--cyan-A400);
        color: var(--black-400);

        &:hover {
            background: var(--black-400);
            color: white;
        }
`,
    clearGray: css`
        ${base}

        background: 0;
        border-color: var(--gray-600);
        color: var(--gray-600);

        &:hover {
            border-color: var(--cyan-A400);
            color: var(--cyan-A400);
        }
`,
    clearRed: css`
        ${base}

        background: 0;
        border-color: var(--red-600);
        color: var(--red-600);

        &:hover {
            background: var(--red-600);
            color: white;
        }
`,

    clearWhite: css`
        ${base}

        background: 0;
        color: white;

        &:hover {
            background-color: white;
            color: var(--cyan-A400);
        }
`,
    red: css`
        ${base}

        background: var(--cyan-A400);
        border-color: var(--cyan-A400);
        color: white;

        &:hover {
            background: 0;
            color: var(--cyan-A400);
        }
`,
    rounded: css`
        ${base}

        border-radius: 50%;
        height: 3.5rem;
        padding: 0.3rem;
        width: 3.5rem;
`,
    white: css`
        ${base}

        background-color: white;
        color: var(--cyan-A400);
`,

    wide: css`
        ${base}

        height: 3.5rem;
        min-width: 8rem;
`,
    wideRounded: css`
        ${base}

        border-radius: 2rem;
        min-height: 3.5rem;
        min-width: 8rem;
`
}
