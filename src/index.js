import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import Time from './time';

const FileList = ( {files} ) => {

    return(
        <table className="file-list">
            <tbody>
            {files.map(file=>(
                <FileListItem key={file.id} file={file}/>
            ))}
            </tbody>
        </table>
    )
}

FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ( {file} ) => (
    <tr className="file-list-item">
        <td> <FileIcon file={file} key={0}/> </td>
        <td> <FileName file={file} key={1}/> </td>
        <td> <CommitMessage commit={file.latestCommit} /> </td>
        <td> <Time time={file.updated_at}/> </td>
    </tr>
)

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

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

const FileName = ( {file} ) =>(
    <div className="file-name">
        {file.name}
    </div>
)

const CommitMessage = ({commit}) =>(
    <div className="commit-message">
        {commit.message}
    </div>
)

CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
}

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FileList files={testFiles}/>, document.querySelector('#root'));
