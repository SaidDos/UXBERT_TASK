import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';

export const shareFile = file => {
  RNFetchBlob.config({
    fileCache: true,
  })
    .fetch('GET', file)
    // the image is now dowloaded to device's storage
    .then(resp => {
      return resp.readFile('base64');
    })
    .then(async base64Data => {
      var base64Data = 'data:image/png;base64,' + base64Data;
      // here's base64 encoded image
      await Share.open({url: base64Data});
    })
    // eslint-disable-next-line no-alert
    .catch(err => alert(err));
};
