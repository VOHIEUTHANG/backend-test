import UserService from "../service/user.service.js";

class UserController {
  async getAllUserHandler(req, res) {
    const users = await UserService.getAllUsers();
    return res.status(200).send({
      users,
    });
  }
  async getUserHandler(req, res) {
    const { id } = req.params;
    if (id !== undefined) {
      const users = await UserService.getUserById(id);

      if (!users) {
        return res.status(400).send({
          message: `Get user with id = ${id} failure !`,
        });
      } else if (users?.length == 0) {
        return res.status(200).send({
          message: `User not found !`,
        });
      } else {
        return res.status(200).send({
          user: users[0],
        });
      }
    }
    return res.status(400).send({
      message: "Invalid request !",
    });
  }
  async insertUserHandler(req, res) {
    const { name, phone, email } = req.body;

    if (name && email && phone) {
      const resultStatus = await UserService.insertUser({ name, phone, email });
      return resultStatus
        ? res.status(200).send({
            message: "Insert user successfully !",
          })
        : res.status(400).send({
            message: "Insert user failure !",
          });
    }
    return res.status(400).send({
      message: "Invalid request !",
    });
  }
  async updateUserHandler(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    if (id !== undefined && name && email && phone) {
      const users = await UserService.updateUserById(id, name, phone, email);

      if (users === false) {
        return res.status(400).send({
          message: `Update user with id = ${id} failure !`,
        });
      } else if (users == 0) {
        return res.status(200).send({
          message: `User not found !`,
        });
      } else {
        return res.status(200).send({
          message: `Update user with id = ${id} successfully !`,
        });
      }
    }
    return res.status(400).send({
      message: "Invalid request !",
    });
  }
  async deleteUserHandler(req, res) {
    const { id } = req.params;
    if (id !== undefined) {
      const deleteUserCount = await UserService.deleteUserById(id);

      if (deleteUserCount === false) {
        return res.status(400).send({
          message: `Delete user with id = ${id} failure !`,
        });
      } else if (deleteUserCount == 0) {
        return res.status(200).send({
          message: `User not found !`,
        });
      } else {
        return res.status(200).send({
          message: `Delete user with id = ${id} successfully !`,
        });
      }
    }
    return res.status(400).send({
      message: "Invalid request !",
    });
  }
}

export default new UserController();
