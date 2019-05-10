export default function getPageNameSlug(that, isPagesReady, pages){
    const matchPath = that.props.match.path;
    const pageSlug = matchPath.split('/')[1];
    const pageName = isPagesReady && pages[pageSlug].title;

    return {
        matchPath: `/${pageSlug}`,
        pageName,
    };
}