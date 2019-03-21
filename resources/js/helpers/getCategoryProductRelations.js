export default function getCategoryProductRelations(categoriesRelationship){
    let newRelations = [];
    if ( categoriesRelationship !== undefined ) {
        for(let i=0; i<categoriesRelationship.length; i++) {
            let o = categoriesRelationship[i];
            if (!newRelations[o.catFilterBy]) newRelations[o.catFilterBy] = [];
            newRelations[o.catFilterBy].push(o.productID);
        }
    }
    return newRelations;
}