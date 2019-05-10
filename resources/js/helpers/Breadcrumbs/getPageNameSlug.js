export function getPageNameSlug(that){
    const {isPagesReady, pages} = that.props;
    const matchPath = that.props.match.path;
    const pageSlug = matchPath.substr(1);
    const pageName = isPagesReady && pages[pageSlug].title;

    return {
        matchPath,
        pageName,
    };
}