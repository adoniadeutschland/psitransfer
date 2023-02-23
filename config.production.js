module.exports = {
  accessLog: "dev",
  retentions: {
    2629743: "4 Weeks",
  },
  defaultRetention: "2629743",
  showRetention: false,
  showBucketPassword: false,
  adminPass: "admin",
  uploadPass: false,
  baseUrl: "/",
  uploadAppPath: "/",
  maxFileSize: Math.pow(2, 20) * 30000,
  maxBucketSize: Math.pow(2, 20) * 30000,
  mailFrom: "PsiTransfer <psitransfer@psi.cx>",
  mailTo: "fabian.giering@adonia.de",
  // "sslKeyFile": './tmp/cert.key',
  // "sslCertFile": './tmp/cert.pem',
};
