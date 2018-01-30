const defaultSiteState = {
    activeMenu: undefined
};

const siteReducer = (state = defaultSiteState, action) => {
    switch (action.type) {
        case 'MENU_CHANGE':
            return {
                activeMenu: action.activeMenu
            };
        default:
            return state;
    }
};

export default siteReducer;