export function sortArrayByKey(arr, by){
    let newRelations = [];
    if ( arr !== undefined ) {
        for(let i=0; i<arr.length; i++) {
            let o = arr[i];
            if (!newRelations[o[by]]) newRelations[o[by]] = [];
            newRelations[o[by]].push(o);
        }
    }
    return newRelations;
}