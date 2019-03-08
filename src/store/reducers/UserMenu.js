export const userMenu = (state = `nav-con-menu`, action) => {
    switch (action.type) {
        case `SHOW_USER_MENU`:
            return `nav-con-menu ${action.css}`;

        default: return state;
    }
}