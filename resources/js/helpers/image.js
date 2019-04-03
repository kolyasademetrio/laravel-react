export const getThumbnail = (path, size) => {
    
    const pathArray = path.split('/');
    const filename = pathArray.pop();
    const targetPath = pathArray.join('/');
    const fileNameWithoutExt = filename.split('.').slice(0, -1).join('.');

    const re = /(?:\.([^.]+))?$/;
    const ext = re.exec(filename)[1];

    const thumbnailNameWithPostfix= `${targetPath}/${fileNameWithoutExt}-${size[0]}x${size[1]}.${ext}`;

    return thumbnailNameWithPostfix;
};