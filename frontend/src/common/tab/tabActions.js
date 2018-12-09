export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

/* the '...' (rest/spread) operator allows to recieve several 
 * parameters and join all of then in an array */
export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}