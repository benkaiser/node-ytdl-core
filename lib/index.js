const getInfo     = require('./info');
const util        = require('./util');
const sig         = require('./sig');

/**
 * @param {string} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
const ytdl = (link, options) => {
  ytdl.getInfo(link, options, (err, info) => {
    if (err) {
      stream.emit('error', err);
      return;
    }
  });

  return stream;
};
module.exports = ytdl;

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getFullInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.validateID = util.validateID;
ytdl.validateURL = util.validateURL;
ytdl.getURLVideoID = util.getURLVideoID;
ytdl.getVideoID = util.getVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
};