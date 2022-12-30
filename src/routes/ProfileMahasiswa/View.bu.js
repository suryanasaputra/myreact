import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import "./View.css";

const MAHASISWA_ENDPOINT =
  "https://637c622172f3ce38eaa0c862.mockapi.io/api/v1/mahasiswa/";

function ProfileMahasiswa() {
  const { id } = useParams();
  const [mahasiswa, setMahasiswa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchMahasiswa() {
      const fetchResponse = await fetch(MAHASISWA_ENDPOINT + id);
      const fetchData = await fetchResponse.json();

      setMahasiswa(fetchData);
      setLoading(false);
    }

    fetchMahasiswa();
  }, [id]);

  const Mahasiswa = () => {
    if (!mahasiswa && loading) return <div>Loading</div>;

    if (!loading && typeof mahasiswa !== "object")
      return "Data tidak ditemukan";

    return (
      <div>
        <h2>Profile Mahasiswa #{id}</h2>
        <ProfilePicture width={100} height={100} imageUrl={mahasiswa.photo} />
        <p>
          <b>
            {mahasiswa.name} ({mahasiswa.nim})
          </b>
        </p>
        <p>
          {mahasiswa.degree} - {mahasiswa.major_name} - {mahasiswa.faculty_name}
        </p>
        <p>
          Alamat: {mahasiswa.address.street}, {mahasiswa.address.city}
        </p>
      </div>
    );
  };

  return (
    <div className="container">
      <Mahasiswa />
    </div>
  );
}

export default ProfileMahasiswa;
