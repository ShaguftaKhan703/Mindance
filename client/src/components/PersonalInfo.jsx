const PersonalInfo = ({ detailsFormData, setDetailsFormData }) => {
  return (
    <div className="details-form-child-container">
      <form>
        <div className="details-form">
          <label className="details-form-label" htmlFor="name">
            Name
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.name}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, name: event.target.value })}
          />
          <label className="details-form-label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="details-form-input"
            type="date"
            value={detailsFormData.birthday}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, birthday: event.target.value })}
          />
          <label className="details-form-label" htmlFor="occupation">
            Occupation
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.occupation}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, occupation: event.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
