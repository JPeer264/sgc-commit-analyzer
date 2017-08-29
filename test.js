import test from 'ava';

import analyzer from './';

test('no change', (t) => {
  t.plan(1);

  analyzer({}, {
    commits: [{
      hash: 'asdf',
      message: 'Chore: build script',
    }],
  }, (err, type) => {
    t.is(type, null);
  });
});

test('patch version', (t) => {
  t.plan(1);

  analyzer({}, {
    commits: [{
      hash: 'asdf',
      message: 'Fix: nasty bug',
    }, {
      hash: '1234',
      message: 'Fix(scope): even nastier bug',
    }],
  }, (err, type) => {
    t.is(type, 'patch');
  });
});

test('minor/feature version', (t) => {
  t.plan(1);

  analyzer({}, {
    commits: [{
      hash: 'asdf',
      message: 'Fix: nasty bug',
    }, {
      hash: '1234',
      message: 'Feat(scope): cool feature',
    }],
  }, (err, type) => {
    t.is(type, 'minor');
  });
});

test('docs version', (t) => {
  t.plan(1);

  analyzer({}, {
    commits: [{
      hash: 'asdf',
      message: 'Docs: improve docs',
    }, {
      hash: '1234',
      message: 'CI: chore things',
    }],
  }, (err, type) => {
    t.is(type, 'patch');
  });
});

test('major/breaking version', (t) => {
  t.plan(1);

  analyzer({}, {
    commits: [{
      hash: 'qwer',
      message: 'feat(something): even cooler feature\nBREAKING CHANGE: everything so broken',
    }, {
      hash: '1234',
      message: 'feat(scope): cool feature',
    }, {
      hash: 'asdf',
      message: 'fix: nasty bug',
    }],
  }, (err, type) => {
    t.is(type, 'major');
  });
});
