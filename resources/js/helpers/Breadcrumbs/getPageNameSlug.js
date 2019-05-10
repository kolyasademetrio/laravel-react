export function getPageNameSlug(that, isPagesReady, pages){
    const matchPath = that.props.match.path;
    const pageSlug = matchPath.substr(1);
    const pageName = isPagesReady && pages[pageSlug].title;

    return {
        matchPath,
        pageName,
    };
}