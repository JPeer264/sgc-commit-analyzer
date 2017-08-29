import { parseRawCommit } from 'conventional-changelog/lib/git';

export default (pluginConfig, { commits }, cb) => {
  let type = null;

  commits
    .map(commit => parseRawCommit(`${commit.hash}\n${commit.message}`))
    .filter(commit => !!commit)
    .every((commit) => {
      if (commit.breaks.length) {
        type = 'major';

        return false;
      }

      switch (commit.type) {
        case 'Feat':
          type = 'minor';
          break;

        case 'Fix':
        case 'Docs':
          type = type || 'patch';
          break;

        default:
          type = type || null;
      }

      return true;
    });

  cb(null, type);
};
