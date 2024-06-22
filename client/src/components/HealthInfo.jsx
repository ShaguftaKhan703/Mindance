const HealthInfo = ({ detailsFormData, setDetailsFormData }) => {
  return (
    <div className="details-form-child-container">
      <form>
        <div className="details-form">
          <label className="details-form-label" htmlFor="mentalHealth">
            How would you describe your mental health?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.mentalHealth}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, mentalHealth: event.target.value })}
          />
          <label className="details-form-label" htmlFor="physicalHealth">
            How is your physical health?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.physicalHealth}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, physicalHealth: event.target.value })}
          />
          <label className="details-form-label" htmlFor="therapy">
            Have you considered therapy before? Why or why not?
          </label>
          <input
            className="details-form-input"
            type="text"
            value={detailsFormData.therapy}
            onChange={(event) => setDetailsFormData({ ...detailsFormData, therapy: event.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default HealthInfo;
