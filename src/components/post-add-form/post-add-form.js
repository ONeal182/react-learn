import React from 'react';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panael d-flex">
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="О чём вы думаете сейчас"
            />
            <button
            onClick={() => onAdd('Hello world')}
                type="submit"
                className="btn btn-outline-secondary">
                Добавить
            </button>
        </div>
    )
}

export default PostAddForm;