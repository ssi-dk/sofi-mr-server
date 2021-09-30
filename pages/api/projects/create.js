import requireUserMiddlewarefrom from "cgps-application-server/middleware/require-user";

import dataabse from "../../../services/dataabse";
import serverRuntimeConfig from "../../../utils/server-runtime-config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: serverRuntimeConfig.bodySizeLimit,
    },
  },
};

export default async function (req, res) {
  // Only logged in users can create projects
  const user = await requireUserMiddlewarefrom(req, res);

  const db = await dataabse();

  const projectModel = new db.models.Project();

  projectModel.owner = user.id;

  // if (req.query.linkedProjectId) {
  //   const linkedProjectModel = await ProjectsService.getProjectDocument(req.query.linkedProjectId, user);
  //   projectModel.linkedProjectId = linkedProjectModel.linkedProjectId ?? linkedProjectModel.id;
  // }

  if (req.query.access === "private") {
    projectModel.access = 0;
  }
  else {
    projectModel.access = 1;
  }

  await projectModel.saveJson(req.body);

  return res.json({
    isOwner: true,
    id: projectModel.id,
    url: projectModel.url(),
  });
}
