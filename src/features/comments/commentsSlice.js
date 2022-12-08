import {COMMENTS} from '../../app/shared/COMMENTS'

export const selectCommentsByCampsiteId = (capmsiteId) =>{
    return COMMENTS.filter(
        (comment) => comment.campsiteId === parseInt(capmsiteId)
        )
}