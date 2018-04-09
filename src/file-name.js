import React from 'react';
import PropTypes from 'prop-types';

const FileName = ( {file} ) =>(
    <div className="file-name">
        {file.name}
    </div>
)

FileName.propTypes = {
    file: PropTypes.object.isRequired
}

export default FileName;