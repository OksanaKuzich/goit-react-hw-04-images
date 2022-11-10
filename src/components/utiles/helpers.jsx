export const helpers = array => {
  return array.map(
    ({ id, webformatURL: SUrl, largeImageURL: LUrl, tags }) => ({
      id,
      SUrl,
      LUrl,
      tags,
    })
  );
};
