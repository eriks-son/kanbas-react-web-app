export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br />
      <input id="wd-name" value="A1 - ENV + HTML" /> <br /> <br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page
        of your Web application running on Netlify. The landing page
        should include the following: Your full name and section Links to 
        each of the lab assignemnts Link to the Kanbas application Links
        to all relevant source code repositories The Kanbas application should 
        include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="PERCENTAGE">PERCENTAGE</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="ONLINE">Online</option>
            </select>

            <br />

            <label>
              Online Entry Options
            </label> <br />

            <input type="checkbox" 
              name="wd-online-entry-check"
              id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label> <br />
            <input type="checkbox" 
              name="wd-online-entry-check"
              id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label> <br />
            <input type="checkbox" 
              name="wd-online-entry-check"
              id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label> <br />
            <input type="checkbox" 
              name="wd-online-entry-check"
              id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label> <br />
            <input type="checkbox" 
              name="wd-online-entry-check"
              id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label> <br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label> <br />
            <input id="wd-assign-to" value="Everyone" /> <br />

            <br />
            
            <label htmlFor="wd-due-date">Due</label> <br />
            <input id="wd-due-date" type="date" value="2024-05-13" /> <br />

            <br />
             
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label> <br />
                  <input id="wd-available-from" type="date" value="2024-05-06" />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label> <br />
                  <input id="wd-available-until" type="date" value="2024-05-20" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tfoot>
          <tr>
            <td align="right" colSpan={2}>
              <button id="wd-assignments-editor-cancel">Cancel</button>
              <button id="wd-assignments-editor-save">Save</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}