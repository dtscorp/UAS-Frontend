import { nanoid } from "nanoid";
import ProvinceStyled from "./Province.styled";
import { useSelector } from "react-redux";
function Province() {
  // const { provincesData } = props;
  const provincesData = useSelector((store) => store.covidReducer.provinsi);
  let no = 1;
  return (
    <ProvinceStyled>
      <section>
        <h2>Provinsi</h2>
        <h3>Data Covid Berdasarkan Provinsi</h3>
        <div className="province__container">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {provincesData.map(function (province) {
                let id = nanoid();
                return (
                  <tr key={id}>
                    <td>{no++}</td>
                    <td>{province.kota}</td>
                    <td>{province.kasus}</td>
                    <td>{province.sembuh}</td>
                    <td>{province.meninggal}</td>
                    <td>{province.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </ProvinceStyled>
  );
}

export default Province;
