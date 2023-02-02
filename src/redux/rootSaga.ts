import { AllEffect, ForkEffect } from 'redux-saga/effects';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  // include yield all([fork( yourRootSaga )]);
}
