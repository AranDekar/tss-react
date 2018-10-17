import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

const gen = incrementAsync();
it('incrementAsync should call a delay and then put a new action', () => {
    expect(gen.next().value).toEqual(call(delay, 1000));
})
it('incrementAsync should call a delay and then put a new action', () => {
    expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }));
})
it('incrementAsync should call a delay and then put a new action', () => {
    expect(gen.next()).toEqual({ done: true, value: undefined });
})

