import bytes from "bytes";
import requireUserMiddlewarefrom from "cgps-application-server/middleware/require-user";

import FileStorage from "../../../services/file-storage";

import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function (req, res) {
  // Only logged in users can save files
  await requireUserMiddlewarefrom(req, res);

  const fileHash = await FileStorage.storeStream(
    req,
    bytes.parse(serverRuntimeConfig.bodySizeLimit),
  );

  const fileUri = FileStorage.uri(fileHash);

  res.json({
    hash: fileHash,
    url: fileUri,
  });
}
