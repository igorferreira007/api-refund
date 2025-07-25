import { RefundsController } from "@/controllers/refunds-controller"
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization"
import { Router } from "express"

export const refundsRoutes = Router()
const refundsController = new RefundsController()

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]),
  refundsController.create
)
refundsRoutes.get(
  "/",
  verifyUserAuthorization(["manager"]),
  refundsController.index
)
refundsRoutes.get(
  "/:id",
  verifyUserAuthorization(["employee", "manager"]),
  refundsController.show
)
