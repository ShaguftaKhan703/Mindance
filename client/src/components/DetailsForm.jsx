import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import MoodInfo from "./MoodInfo";
import HealthInfo from "./HealthInfo";
import "../assets/css/DetailsForm.css";

const DetailsForm = () => {
  const userID = useGetUserID();
  const [page, setPage] = useState(0);
  const [detailsFormData, setDetailsFormData] = useState({
    name: '',
    birthday: '',
    occupation: '',
    purpose: '',
    feeling: '',
    hobbies: '',
    mentalHealth: '',
    physicalHealth: '',
    therapy: '',
    userID: userID,
  });

  const [cookies, ] = useCookies(['access_token']);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://mindance-api.onrender.com/details',
      { ...detailsFormData },
      { headers: { authorization: cookies.access_token } });
      alert('Details submitted!');
      !cookies.access_token ? navigate('/auth') : navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  const DetailsFormText = [
    <div>
      <h2>Congratulations on your first step! <br /> Tell us a bit about yourself.</h2>
      <span>We are always ecstatic <br /> to meet lovely souls like you.</span>
    </div>,
    <div>
      <h2>We are so proud of you <br /> for reaching out to us!</h2>
      <span>Sometimes, asking for help <br /> is the bravest move you can make.</span>
    </div>,
    <div>
      <h2>You're not alone in this. <br /> We're here for you!</h2>
      <span>We believe that mental health <br /> is a journey, not a destination.</span>
    </div>
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo detailsFormData={detailsFormData} setDetailsFormData={setDetailsFormData} />
    } else if (page === 1) {
      return <MoodInfo detailsFormData={detailsFormData} setDetailsFormData={setDetailsFormData} />
    } else {
      return <HealthInfo detailsFormData={detailsFormData} setDetailsFormData={setDetailsFormData} />
    }
  }

  return (
    <div className="details-container">
      <div className="details-buttons-container">
        <div className="progress-count"><h3>{page + 1}/3</h3></div>
        <div className="progress-bar">
          <div style={{ width: page === 0 ? "33.33%" : page === 1 ? "66.66%" : "100%" }}></div>
        </div>
        <div className="form-text">{DetailsFormText[page]}</div>
        <div className="form-buttons">
            <button
              className="details-prev-button"
              disabled={page === 0}
              onClick={() => {
                setPage((thisPage) => thisPage - 1);
              }}
            >
              Previous
            </button>
            <button
              className="details-next-button"
              disabled={page === DetailsFormText.length - 1}
              onClick={() => {
                if (page === DetailsFormText.length - 1) {
                  alert('Details submitted!');
                } else {
                  setPage((thisPage) => thisPage + 1);
                }
              }}
            >
              Next
              {/* {page === DetailsFormText.length - 1 ? "Submit" : "Next"} */}
            </button>
            <button
              className="details-submit-button"
              type="submit"
              disabled={page !== DetailsFormText.length - 1}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      <div className="details-form-container">
        <div className="form-body">{PageDisplay()}</div>
      </div>
    </div>
  );
};

export default DetailsForm;
