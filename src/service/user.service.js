import database from "../database/index.js";

class UserEmailService {
  async getAllUsers() {
    try {
      return await database("user").select("*");
    } catch (error) {
      return [];
    }
  }
  async insertUser(user) {
    try {
      await database("user").insert(user);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getUserById(id) {
    try {
      const user = await database.from("user").select("*").where("id", "=", id);
      return user;
    } catch (error) {
      return false;
    }
  }
  async deleteUserById(id) {
    try {
      const deleteUserCount = await database("user").where("id", "=", id).del();
      return deleteUserCount;
    } catch (error) {
      return false;
    }
  }
  async updateUserById(id, name, phone, email) {
    try {
      const updateUserCount = await database("user")
        .where("id", "=", id)
        .update({ name, phone, email });
      return updateUserCount;
    } catch (error) {
      return false;
    }
  }
}

export default new UserEmailService();
