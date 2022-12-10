module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "strapi-test-bucket2",
        publicFiles: false,
        uniform: false,
        basePath: "",
      },
    },
  },
};
