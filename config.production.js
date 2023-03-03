module.exports = {
  accessLog: "dev",
  retentions: {
    2419200: "4 Weeks",
  },
  defaultRetention: "2419200",
  // expire every file after maxAge (eg never downloaded one-time files)
  maxAge: 3600 * 24 * 35, // 75 days
  showRetention: false,
  showBucketPassword: false,
  adminPass: "EyPZvn4NKl9sCVqcMdXF",
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
