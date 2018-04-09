import React from 'react';
import PropTypes from 'prop-types';

function FileIcon( {file} ){
    let icon = 'fa-file-text-o';
    if( file.type === 'folder' ){
        icon = 'fa-folder'
    }

    return(
        <div className="file-icon">
            <i className={`fa ${icon}`}></i>
        </div>
    )
}

FileIcon.propTypes = {
    file:PropTypes.object.isRequired
}

export default FileIcon;