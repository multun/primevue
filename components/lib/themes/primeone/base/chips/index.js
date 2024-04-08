export default {
    css: ({ dt }) => `
.p-inputchips {
    display: inline-flex;
}

.p-inputchips-input {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.25rem 0.25rem;
    gap: 0.25rem;
    color: ${dt('chips.color')};
    background: ${dt('chips.background')};
    border: 1px solid ${dt('chips.border.color')};
    border-radius: ${dt('rounded.base')};
    width: 100%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    box-shadow: ${dt('chips.box.shadow')};
}

.p-inputchips:not(.p-disabled):hover .p-inputchips-input {
    border-color: ${dt('chips.hover.border.color')};
}

.p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
    border-color: ${dt('chips.focus.border.color')};
    outline: 0 none;
}

.p-inputchips.p-invalid .p-inputchips-input {
    border-color: ${dt('chips.invalid.border.color')};
}

.p-variant-filled.p-inputchips-input {
    background: ${dt('chips.filled.background')};
}

.p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input  {
    background: ${dt('chips.filled.focus.background')};
}

.p-inputchips.p-disabled .p-inputchips-input {
    opacity: 1;
    background: ${dt('chips.disabled.background')};
    color: ${dt('chips.disabled.color')};
}

.p-inputchips-input-item {
    padding: 0.25rem 0;
    margin-left: 0.5rem;
    flex: 1 1 auto;
    display: inline-flex;
}

.p-inputchips-input-item input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-inputchips-input-item input::placeholder {
    color: ${dt('chips.placeholder.color')};
}

.p-fluid .p-inputchips {
    display: flex;
}
`
};
