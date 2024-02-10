import RNFS from 'react-native-fs';

export const getVideoSize = async (filePath: string) => {
  try {
    const fileInfo = await RNFS.stat(filePath);
    const fileSizeInBytes = fileInfo.size;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    return { bytes: fileSizeInBytes, kilobytes: fileSizeInKB, megabytes: fileSizeInMB };
  } catch (error) {
    console.error('Error getting file size:', error);
    return null;
  }
};

export const resolutions:any = {
  '480p': { width: 854, height: 480 },
  '720p': { width: 1280, height: 720 },
  '1080p': { width: 1920, height: 1080 },
  '4k': { width: 3840, height: 2160 }
}