export function getCategoryProductRelationsByCatSlug(categoriesRelationship){
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

export function getCategoryProductRelationsByProductSlug(categoriesRelationship){
    
    //console.log( categoriesRelationship );
    
    let newRelations = [];
    if ( categoriesRelationship !== undefined ) {
        for(let i=0; i<categoriesRelationship.length; i++) {
            let o = categoriesRelationship[i];
            if (!newRelations[o.productSlug]) newRelations[o.productSlug] = [];
            newRelations[o.productSlug].push(o.categoryName);
        }
    }
    return newRelations;
}

