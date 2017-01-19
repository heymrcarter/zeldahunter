import { expect } from 'chai';
import * as subject from './playthrough-validator';

describe('playthroughValidator', () => {
  describe('validate', () => {
    describe('playthough id', () => {
      it('must be present', () => {
        expect(subject.validate({})).to.equal(false);
        expect(subject.validate({ id: '', name: '', titleId: '' })).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: 'title-id' })).to.equal(true);
      });

      it('must be an integer greater than 0', () => {
        expect(subject.validate({ id: -1, name: '', titleId: '' })).to.equal(false);
        expect(subject.validate({ id: 0, name: '', titleId: '' })).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: 'title-id' })).to.equal(true);
      });
    });

    describe('playthrough name', () => {
      it('must be present', () => {
        expect(subject.validate({})).to.equal(false);
        expect(subject.validate({ id: 1, name: '', titleId: '' })).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: 'title-id' })).to.equal(true);
      });
    });

    describe('playthrough titleId', () => {
      it('must be present', () => {
        expect(subject.validate({})).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: '' })).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: 1 })).to.equal(false);
        expect(subject.validate({ id: 1, name: 'name', titleId: 'title-id' })).to.equal(true);
      });
    });
  });
});