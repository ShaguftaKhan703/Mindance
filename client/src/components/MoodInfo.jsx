const MoodInfo = ({ detailsFormData, setDetailsFormData }) => {
  return (
    <div className="details-form-child-container">
      <form>
        <div className="details-form">
          <label className="details-form-label" htmlFor="purpose">
            What is the purpose of your visit?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.purpose}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, purpose: event.target.value })}
          />
          <label className="details-form-label" htmlFor="feeling">
            How are you feeling today?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.feeling}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, feeling: event.target.value })}
          />
          <label className="details-form-label" htmlFor="hobbies">
            What do you do to keep yourself busy?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.hobbies}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, hobbies: event.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default MoodInfo;
