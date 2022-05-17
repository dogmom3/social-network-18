const router = require("express").Router();
const {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserId).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;