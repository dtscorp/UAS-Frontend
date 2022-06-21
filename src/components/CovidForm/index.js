import { nanoid } from "nanoid";
import { useState } from "react";
import image2 from "../../asset/image2.png";
import Alert from "../Alert";
import Button from "../UI/Button";
import FormStyled from "./Form.styled";

function CovidForm(props) {
  const { provincesData, setProvinceData } = props;
  const [province, setProvince] = useState(provincesData[0].kota);
  const [status, setStatus] = useState("positif");
  const [jumlah, setJumlah] = useState(0);

  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleProvince(e) {
    setProvince(e.target.value);
  }
  function handleStatus(e) {
    setStatus(e.target.value);
  }
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }
  function updateData() {
    const index = provincesData.findIndex(function (item) {
      return item.kota === province;
    });
    const findProvince = provincesData.find(function (item) {
      return item.kota === province;
    });
    if (status === "positif") {
      provincesData[index] = {
        ...findProvince,
        kasus: parseInt(findProvince.kasus) + parseInt(jumlah),
      };
    } else if (status === "sembuh") {
      provincesData[index] = {
        ...findProvince,
        sembuh: parseInt(findProvince.sembuh) + parseInt(jumlah),
      };
    } else if (status === "dirawat") {
      provincesData[index] = {
        ...findProvince,
        dirawat: parseInt(findProvince.dirawat) + parseInt(jumlah),
      };
    } else {
      provincesData[index] = {
        ...findProvince,
        meninggal: parseInt(findProvince.meninggal) + parseInt(jumlah),
      };
    }
    setProvinceData([...provincesData]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (province === "") {
      setIsProvinceError(true);
    } else if (status === "") {
      setIsProvinceError(false);
      setIsStatusError(true);
    } else if (jumlah === 0) {
      setIsProvinceError(false);
      setIsStatusError(false);
      setIsJumlahError(true);
    } else {
      updateData();
      setIsSuccess(true);
    }
  }
  return (
    <FormStyled>
      <section>
        <div className="form__left">
          <img src={image2} alt="" />
        </div>
        <div className="form__right">
          <h2>Form Covid</h2>
          {isSuccess && (
            <Alert success={isSuccess}>Data Succesfully Added</Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="provinsi">Provinsi</label>
              <select
                value={province}
                onChange={handleProvince}
                className="form__input"
              >
                {provincesData.map(function (province) {
                  let id = nanoid();
                  return (
                    <option key={id} value={province.kota}>
                      {province.kota}
                    </option>
                  );
                })}
                {isProvinceError && <Alert>The Province is Required </Alert>}
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="status">Status</label>
              <select
                value={status}
                onChange={handleStatus}
                className="form__input"
              >
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>The Status is Required</Alert>}
            </div>
            <div className="form__group">
              <label htmlFor="">Jumlah</label>
              <input
                onChange={handleJumlah}
                className="form__input"
                value={jumlah}
                type="number"
                min="0"
                name=""
                id=""
              />
              {isJumlahError && <Alert>The Jumlah is Required</Alert>}
            </div>
            <div>{/* <button>Submit</button> */}</div>
            <Button variant="secondary" full>
              submit
            </Button>
          </form>
        </div>
      </section>
    </FormStyled>
  );
}

export default CovidForm;
