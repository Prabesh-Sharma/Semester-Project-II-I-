import pool from "../database/config.js";

class IssueController {
  async createIssue(req, res) {
    const { subject, description } = req.body;
    /*contains the json sent on body while sending the request ie
    {"subject":"test","description":"test"}
    you can use either postman thunder-client or curl to test this*/

    const id = req.user;//look into middlewares/authorize line no 44
      await pool.query(
        "INSERT INTO issue(_subject,_description,citizen_id) VALUES($1,$2,$3)",
        [subject, description, id],
      );//database insertion query

      res.status(200).json({
        message: "issue successfully created, my g",
      });
  }

  async getIssues(req, res) {
    const id = req.user;//middlwares/authorize line no 44

      const info = await pool.query(
        "SELECT * FROM issue WHERE citizen_id = $1",
        [id],
      );//gets all the issues associated with the user in form of an array

      if (info.rows.length === 0) {
        res.status(404).json({
          error: "nothing here lil bro",
        });
      }
      res.status(200).json({
        message: "it's your data, you the real nigga",
        data: info.rows,
      });
  }

  async getOneIssue(req, res) {
    const iid = req.params.id;//see routes/issueRoute line no 11
    const id = req.user;

      const result = await pool.query(
        "SELECT * FROM issue WHERE citizen_id = $1 AND _id = $2",
        [id,iid]
      );
      /*if the citizen id from the jwt and the issueid from the parameters 
      both match with a rowdata then return a array havin single object*/

      if (result.rows.length===0){
        return res.status(404).json({
            error : "nothing here lil bro"
        })
      }

      const{_subject:subject ,_description:description} = result.rows[0]
      /*since we know only one object is returned inside the array we can destructure like this*/

      res.status(200).json({
        message: "it's yours' , you the real nigga",
            subject,
            description
      });
  }

  async deleteIssue(req, res) {
    const id = req.user;
    const iid = req.params.id;

      const result = await pool.query(
        "DELETE FROM issue WHERE citizen_id = $1 AND _id = $2",
        [id, iid],
      );
      if (result.rowCount === 0) {
        return res.status(404).json({
          error: "issue not found, you ain't the real nigga lil bro",
        });
      }
      res.status(204).send();
  }
}

const issueController = new IssueController();
export default issueController;
//creating a new object of a class then exporting the object