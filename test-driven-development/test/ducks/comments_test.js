import { expect } from '../test_helper';
import { commentReducer, saveComment, SAVE_COMMENT } from '../../src/ducks';

describe('ducks', () => {
    describe('saveComment action', () => {
        it('has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });

    describe('comments reducer', () => {
        it('handles action with unknown type', () => {
           expect(commentReducer(undefined, {})).to.eql([]);
        });

        it('handles action of type SAVE_COMMENT', () => {
            const action = { type: SAVE_COMMENT, payload: 'new comment' };
            expect(commentReducer([], action)).to.eql(['new comment']);
        });
    });
});
